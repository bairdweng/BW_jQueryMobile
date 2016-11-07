

/*监听html文件*/
$(document).ready(function(){
    /*#btn2表示绑定html id 为btn2的按钮标签，所以按钮被点击，会触发这个函数*/
    $("#btn2").click(function(){
        /*打开chrome,右键检查可以看到console选项下输出了'点击了按钮'，类似iOS的NSLog*/
        console.log('点击了按钮');

        //绑定标签ol。添加一个列表项。每次触发这个函数，html就会增加一项。
        // $("ol").append("<li>追加列表项</li>");

        //获取聚合数据，这是一个js函数.直接写函数名调用。
        getjuheData();

        /*这是一个叫 getjuheData 的函数。*/
        function getjuheData(){
            /*get请求*/
            $.get("http://v.juhe.cn/toutiao/index?type=&key=cee8d108ce2da022b1a011d68eee0743",function(response){
                /*这里可以打印出获取的数据*/
                // console.log(response);

                /*获取key，返回是个字典,查看控制台的输出，一层层解析出来。根据控制台的输出，可以获取data是个数组*/
                var data = response['result']['data'];
                for (var i=0;i<data.length;i++){
                    /*这里可以看到数组的每个对象*/
                    var dataDic = data[i];
                    /*把新闻的标题取出*/
                    var newsTitle = dataDic['title'];
                    /*拼接字符串 跟 <li>追加列表项</li> 类似，js用+号作为字符串的拼接 */
                    var html = '<li>'+newsTitle+'</li>'
                    //批量插入到html并显示。
                    $("ol").append(html);
                }
            });
        }
    });


});
