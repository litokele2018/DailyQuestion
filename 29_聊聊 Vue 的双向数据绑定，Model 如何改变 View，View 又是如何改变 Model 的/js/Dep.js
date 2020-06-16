<<<<<<< HEAD
 // Dep
 function Dep() {
   this.subs = []
 }
 Dep.prototype = {
   addSub(watcher) {
     this.subs.push(watcher)
   },
   notify() {
     this.subs.forEach(watcher => {
       watcher.update()
     })
   }
 }
=======
 // Dep
 function Dep() {
   this.subs = []
 }
 Dep.prototype = {
   addSub(watcher) {
     this.subs.push(watcher)
   },
   notify() {
     this.subs.forEach(watcher => {
       watcher.update()
     })
   }
 }
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
 Dep.target = null;