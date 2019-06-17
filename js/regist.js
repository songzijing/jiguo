// 60秒验证码
var letter = document.getElementsByClassName('letter')[0];
var time = 60;
$('.letter').on('click',function(){
    alert('验证码为:1234');
    var a = setInterval(function(){
        time=time-1;
        letter.innerHTML= time+'秒后重试';
        if(time<1){
            clearInterval(a);
            letter.innerHTML= '获取验证码';
        }
    },1000);
})

var phone = document.getElementsByClassName('phone')[0];//手机号输入框
var btn = document.getElementById('registered');//注册按钮
var v_1 = document.getElementsByClassName('v_1')[0];//图片验证码
var v_2 = document.getElementsByClassName('v_2')[0];//验证码
var names = document.getElementsByClassName('name_')[0];//用户名
var password = document.getElementsByClassName('password')[0];//密码
var password_ = document.getElementsByClassName('password_')[0];//确认密码

btn.onclick=function(){
    //手机号
    if(phone.value.length==0){
        alert('手机号输入不能为空');
        return;
    }else if(phone.value.length!=11){
        alert('手机号应为11位数');
        return;
    }else{
        alert('成功');
    }
    
    //图片验证码
    if(v_1.value.length==0){
        alert('图片验证码输入不能为空');
        return;
    }else if(v_1.value != 'r2B7'){
        alert('图片验证码错误')
        return;
    }else{
        alert('成功')
    }

    //验证码
    if(v_2.value.length==0){
        alert('验证码输入不能为空');
        return;
    }else if(v_2.value!=1234){
        alert('验证码错误');
        return;
    }else{
        alert('成功');
    }

    //用户名
    if(names.value.length==0){
        alert('输入不能为空');
        return;
    }else{
        alert('成功')
        return;
    }

    //密码
    if(password.value.length==0){
        alert('输入不能为空');
        return;
    }else if(password.value.length<6){
        alert('密码长度不能小于六位');
        return;
    }else{
        alert('成功')
    }

    //确认密码
    if(password.value != password_.value){
        alert('两次密码不相同');
        return;
    }else(
        alert('成功')
    )


}


