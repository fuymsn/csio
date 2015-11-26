/**
 * @author young
 * @date 2015/11/26
 */
 
!(function (name, factory) {
    if (typeof define === "function" && define.amd) {
     
        // AMD, Webpack
        define([], factory);
    } else if (typeof module === "object" && module.exports) {
     
        // Node, CommonJS-like
        module.exports = factory();
    } else {
     
        // Browser globals (this is window)
        this[name] = factory();
    }
})('dialog', function () {

    function dialog() {
        //todo
    }

    return dialog;

});
