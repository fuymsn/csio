var script = document.createElement("script");

var __oms__success = function(){
    if(window.console){console.log("finish load...")}
}
var __oms__error = function(){
    if(window.console){console.warn("fetch oms error...")}
}

script.src = '/core.min.js';
script.type = 'text/javascript';

//if chrome
script.onload = function(e){
    __oms__success();
}

script.onerror = function(e){
    __oms__error();
}

//if ie
script.onreadystatechange = function(e){
    if(this.readyState == 'complete'){
        __oms__success();
    }else if(this.readyState == 'loaded'){
        __oms__error();
    }
}

document.getElementsByTagName('head')[0].appendChild(script);
