# GET JSON by JSONP
### Dependency 依赖
无

### Compiler 编译器
Gulp + Browserify

### getJson 方法使用
```js
var getJson = require("./module/jsonp.js");

(function(window){
    getJson({
        url: "/api",
        onsuccess: function(json){
            //todo
            //when succeed
        },
        onerror: function(json){
            if(window.console) {console.warn(json);}
        }
    });
})(window);
```
