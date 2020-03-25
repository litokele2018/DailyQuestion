function SelfVue (options) {
    var self = this;
    this.vm = this;
    this.data = options.data;

    Object.keys(this.data).forEach(function(key) {
        self.proxyKeys(key);
    });

    observe(this.data);
    new Compile(options.el, this.vm);
    return this;
}

SelfVue.prototype = {
    proxyKeys: function (key) {
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get() {
                return this.data[key];
            },
            set(newVal) {
                this.data[key] = newVal;
            }
        });
    }
}
