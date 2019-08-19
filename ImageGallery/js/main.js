//创建img元素并设置其id，src属性
var placeholder = document.createElement("img");
placeholder.setAttribute("id","placeholder");
placeholder.setAttribute("src","img/cover.jpg");
//创建p元素并设置其id和内容
var description = document.createElement("p");
var descText = document.createTextNode("Choose an image.");
description.setAttribute("id","description");
description.appendChild(descText);
//将创建好的img和p元素添加进div
var container = document.getElementById("container");
container.appendChild(placeholder);
container.appendChild(description)
//定义占位符图片切换函数
function showPic(whichpic){
    var whichpic = event.target;    //获得被点击的a元素
    var source = whichpic.getAttribute("href");    //创建变量保存显示图片的href
    var placeholder = document.getElementById("placeholder");   //获得占位图片
    placeholder.setAttribute("src",source);
    //添加修改描述的功能
    var description = document.getElementById("description");
    var text = whichpic.childNodes[0].nodeValue;
    description.childNodes[0].nodeValue = text;
    
}

function showPicDOM1( ){ //使用非DOM方法
    var whichpic = event.target;    //获得被点击的a元素
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placholder");
    placeholder.src = source;       //不使用DOM方法来给占位图src属性赋值
}
var ul = document.getElementsByTagName("ul")[0];
ul.onclick = function(){
    var whichpic = event.target
    if(whichpic.tagName == "A"){
        showPic(whichpic);
        return false;
    }
    
}
