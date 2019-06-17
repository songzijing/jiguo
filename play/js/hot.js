 $(function(){
    // 请求json数据渲染到页面上
    $.ajax({
        url:"json/kw.json",
        success:function(data){
            console.log(data);
            console.log(data.list_.length);
            var list = '';
            for(var i = 0;i < data.list_.length;i++){
            list+='<li>';
            list+='<a href="">';
                    list+='<img src='+data.list_[i].img+' width="220" height="130"/>';
                    list+='<div class="info">';
                    list+='<p class="title">'+data.list_[i].title+'<br/><span>'+data.list_[i].text+'</span></p>'
                list+='<div class="tip fix">';
                   list+= '<span class="price left">'+data.list_[i].price+'</span>';
                list+='<div class="right icon">';
                    list+='<span class="xin">3</span>';
                    list+='<span class="look">3</span>';
                    list+='</div>';
                    list+='</div>';
                    list+='</div>';
                    list+='</a>';
                    list+='</li>'
            }
            $('.shop').html(list);
        }
    });
     $(".comMore").on("click",function(){
         var self = $(this);
         var param = '';//加载html变量
         self.addClass("loading").html("正在加载中");
         $.post("json/json.js",function(data){
             allLen = data.length;//获取json长度
             var data1 = data.index_list[indexNum];
             var dlen = data1.length;
             for(var j=0;j<dlen;j++){
                 var thisd = data1[j];
                 var img = thisd["img"];
                 var text = thisd["text"];
                 var price=thisd["price"];
                 param+='<li><a href=""><img src="'+img+'" width="220" height="130"/><div class="info"><p class="name">'+text+'</span></p><div class="tip fix"><span class="price left">'+price+'</span><div class="right icon"><span class="xin">3</span><span class="look">3</span></div></div></div></a><>';
             }
             self.parent().prev().append(param);
             indexNum++;
             if(indexNum>=allLen){
                 self.parent().html('<span class="no-more">没有更多啦~</span>');
                 indexNum = 0
             }else{
                 self.removeClass("loading").html("点击加载更多");
             }
         },"json");
     });
});