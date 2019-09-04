var button = document.getElementById("button");

button.onclick = function() {
    var clickBut = event.target;
    if (! (clickBut.nodeName === "SPAN") ) return false;

    // 将点击按钮显示
    var displyContent = document.getElementsByClassName("content")[0];
    changeContent(displyContent, clickBut);
    

    switch (clickBut.id){
        case "raduls":

        break;
        case "add":

        break;
        //减法
        case "sub":

        break;
        //乘法
        case "mult":

        break;
        //除法
        case "division":

        break;
        //小数
        case "point":

        break;
        //负数
        case "negative":

        break;

        case "delect-all":
            changeContent(displyContent, clickBut, "");
        break;
        case "delect":

        break;
        case "history":

        break;
    }



    
/******* 函数定义，测试区 start **********/


/*  
 * 根据点击按钮更改显示内容
 * changeContent(target, btn, result)；
 * target :elementObject 需要修改内容的元素节点
 * btn ：elementObje 要显示的按钮
 * result : tring || number 要直接显示的内容
 */
function changeContent(target, btn, result) {

    if ( ! (btn.parentNode.className === "fun" || btn.id === "result" ) ) {
        target.innerHTML += btn.innerHTML;
        console.log(1);
    } else {
        target.innerHTML += "";
        console.log(2);
    }

    if ( ! ( result === undefined ) ) {
        target.innerHTML = result;
        console.log(3);
    }
}


/******* 函数定义，测试区  end **********/

}
