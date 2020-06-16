// 1. 使用 抛出异常
let needBreak = true;
let p = new Promise((resolve, reject) => {
  resolve('step1');
});

p.then(data => {
  console.log(data);
  return 'step2';
}).then(data => {
  console.log(data);
  if (needBreak) {
    throw "we need break";
  }
  return 'step3';
}).then(data => {
  console.log(data);
  return 'step4';
}).catch(reason => {
  console.log('got error:', reason);
}).finally(() => {
  console.log('finished.');
});

// 使用 reject
let needBreak = true;
let p = new Promise((resolve, reject) => {
  resolve('step1');
});

p.then(data => {
  console.log(data);
  return 'step2';
}).then(data => {
  console.log(data);
  if (needBreak) {
    return Promise.reject('break without exception.');
  }
  return 'step3';
}).then(data => {
  console.log(data);
  return 'step4';
}).catch(reason => {
  console.log(reason);
}).finally(() => {
  console.log('finished.');
});