$(function () {

    //template 模板
    function format(str, object) {
        var array = Array.prototype.slice.call(arguments, 1);
        return str.replace(/\\?\{\{([^{}]+)\}\}/gm, function (match, name) {
            if (match.charAt(0) == '\\')
                return match.slice(1);
            var index = Number(name);
            if (index >= 0) {
                return array[index];
            }
            if (object && object[name] !== void 0) {
                return object[name];
            }
            return '';
        });
    }

    var $colMainWrap = $('.col-main-wrap'),
        //resource item template
        htmlTmp = '<li><span>{{0}}</span><i class="m-item-del"></i></li>';

    //使用事件委托的方式绑定，只绑定一次，而且对新增元素也有效
    $colMainWrap.on("click", '.m-item-del', function () {
        $(this).closest("li").hide(function () {
            $(this).remove();
        });
    }).on("click", '.j-open-panel', function () {
        $('.m-panel').hide();
        $('.m-panel').find(".m-alert").text("");
        $(this).closest('.m-item').find('.m-panel').show();
    }).on('click', '.j-panel-close-btn', function () {
        $(this).closest('.m-panel').hide();
    }).on('click', '.j-resource-add-btn', function () {
        var $this = $(this),
            $panel = $this.closest('.m-panel'),
            $panelHandleList = $this.closest('.m-item').find('.m-item-handle-list'),
            $input = $panel.find(".m-panel-input"),
            $tips = $panel.find(".m-alert"),
            inputText = $input.val(),
            arr = inputText.split(","),
            text,
            $htmlTmp;

        //type nothong
        if (/^\s*$/.test(inputText)) {
            $tips.text("Enter resources name");
            return;
        }

        //对没有输入 一次输入进行判断
        //append resource to panel
        $.each(arr, function (i) {
            text = $.trim(arr[i]);//低版本浏览器不能直接
            if (!(/^\s*$/.test(text))) {
                $htmlTmp = $(format(htmlTmp, text));
                $panelHandleList.append($htmlTmp);
            }
        });
        //clear the input
        $input.val("");
    });

    //clear input's content when enter sth into input
    $('.m-panel').on("keyup", ".m-panel-input", function () {
        $(this).closest(".m-panel").find(".m-alert").text("");
    });

    //hide panel when click body
    $("body").on("click", function () {
        $(".m-panel").hide();
    });

    //event.keyCode == 13
    //删除按钮增加hover效果
});