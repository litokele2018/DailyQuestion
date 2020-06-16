const http = require('http')
const MultiParty = require('multiparty')
// 一个fs扩展库 https://www.npmjs.com/package/fs-extra
const fse = require("fs-extra")
const path = require('path')
const server = http.createServer()
// 文件保存路径
const UPLOAD_DIR = path.resolve(__dirname, 'target')

const resolvePost = (req) => {
  return new Promise(resolve => {
    let chunk = ""
    req.on('data', (data) => {
      chunk += data
    })
    req.on('end', () => {
      resolve(JSON.parse(chunk))
    })
  })
}

const pipeStream = (path, writeStream) => {
  return new Promise(resolve => {
    const readStream = fse.createReadStream(path)
    readStream.pipe(writeStream)
    readStream.on('end', () => {
      fse.unlinkSync(path)
      resolve()
    })
  })
}

// 合并切片
const mergeFileChunk = async (filePath, filename, size) => {
  console.log(filePath)
  const chunkDir = path.resolve(UPLOAD_DIR, filename)
  // 读取目录的内容
  const chunkPaths = await fse.readdir(chunkDir)
  // 根据index进行排序
  chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
  await Promise.all(
    chunkPaths.map((chunkPath, index) =>
      pipeStream(
        path.resolve(chunkDir, chunkPath),
        fse.createWriteStream(path.resolve(chunkDir, '..', 'jayChou_Mojito.mp4'), {
          start: index * size,
          end: (index + 1) * size
        })
      )
    )
  )
  // 合并完成删除原来的切片文件目录
  fse.rmdirSync(chunkDir)
}

server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "*")
  if (req.method === "OPTIONS") { // cors 预检查
    res.status = 200
    res.end()
    return
  }

  if (req.url === '/merge') {
    const data = await resolvePost(req)
    const { filename, size } = data
    const filePath = path.resolve(UPLOAD_DIR, `${filename}`)
    await mergeFileChunk(filePath, filename, size)
    res.end(JSON.stringify({ code: 0, message: "file merge success" }))
  }

  const multiparty = new MultiParty.Form()
  // files 参数保存了 FormData 中文件，fields 参数保存了 FormData 中非文件的字段
  multiparty.parse(req, async (err, fields, files) => {
    if (err) return
    // 文件 Blob 实例存储在files中
    const [chunk] = files.chunk
    const [hash] = fields.hash
    const [filename] = fields.filename
    // 创建文件名
    const chunkDir = path.resolve(UPLOAD_DIR, filename)
    // 如果文件不存在
    if (!fse.existsSync(chunkDir)) {
      await fse.mkdirs(chunkDir)
    }
    if (!fse.existsSync(`${chunkDir}/${hash}`)) {
      await fse.move(chunk.path, `${chunkDir}/${hash}`)
    }

    res.end("received file chunk")
  })
})



server.listen(3000, () => {
  console.log("正在监听 3000 端口")
})