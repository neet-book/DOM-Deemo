function positinMessage(){
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    //创建变量保存当前元素位置
    var x = elem.style.left;
    var y = elem.style.top;
    console.log(x,y);

}
var movement = setTimeout(positinMessage,3000);