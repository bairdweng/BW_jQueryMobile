

/*监听html文件*/
$(document).ready(function(){
    /*#btn2表示绑定html id 为btn2的按钮标签，所以按钮被点击，会触发这个函数*/
    $("#btn2").click(function(){
        /*打开chrome,右键检查可以看到console选项下输出了'点击了按钮'，类似iOS的NSLog*/
        console.log('点击了按钮');

        //绑定标签ol。添加一个列表项。每次触发这个函数，html就会增加一项。
        $("ol").append("<li>追加列表项</li>");
    });
});
