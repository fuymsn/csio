/**
 * @author young
 * @date 2015/11/26
 */
 
!(function (name, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        this[name] = factory();
    }
})('dialog', function () {

    function dialog() {
        //todo
    }

    return dialog;

});
