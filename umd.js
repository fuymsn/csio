//同时兼容cmd和umd
(function(root, factory) {
    if (typeof define === "function" && (define.amd || define.cmd) {
        define(function(require, exports, module) {
            return factory(root);
        });
    } else {
        root.dialog = factory(root);
    }
})(window, function(root) {
    //code here
    return dialog;
});
