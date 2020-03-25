function Observer(data) {
    this.data = data;
    this.dep = new Dep(); // 自身的dep 如果还有儿子对象 它也有一个自己的dep
    this.walk(data);
}

Observer.prototype = {
    walk: function (data) {
        var self = this;
        Object.keys(data).forEach(function (key) {
            self.defineReactive(data, key, data[key]);
        });
    },
    defineReactive: function (data, key, val) {
        let self = this
        var childObj = observe(val); // 如果下面还有儿子对象 返回一个新的observer
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function getter() {
                if (Dep.target) {
                    self.dep.addSub(Dep.target);
                    if (childObj) { // 儿子数据变了也要通知这个watcher
                        childObj.dep.addSub(Dep.target)
                    }
                }
                return val;
            },
            set: function setter(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                self.dep.notify();
            }
        });
    }
};

function observe(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }
    return new Observer(value);
};

function Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },
    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update();
        });
    }
};
Dep.target = null;