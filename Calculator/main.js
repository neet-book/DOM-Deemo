var button = document.getElementById("button");
var expression = new Expression();

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

    if (/[0-9]/g.test(clickBut.id)){

        if (expression.poeratorMark.length == 0) {

            expression.varl1 += clickBut.id;
        } else {

            expression.varl2 += clickBut.id;
        }
    }

    switch(true){
        case clickBut.parentNode.className === "fun":
                console.log(1);
             
        break;

        case clickBut.parentNode.className === "operator":
            switch(clickBut.id) {
                case "mult":
                case "division":
                    expression.priority = 1;

            }
            expression.poeratorMark.push(clickBut.id);
        break;

        case clickBut.id === "point":
                console.log(3);
            expression.float = 1;
        break;

        case clickBut.id === "negative":
                console.log(4);
            expression.mark = -1;
        break;
    }
    console.log(expression);
};

function Expression () {
    this.varl1 = ""; //值1
    this.varl2 = ""; //值2
    this.poeratorMark = []; //运算符
    this.varlues = []; //所有的值
    this.mark = 1; //是否是带符号数,1为无符号数，-1为符号数
    this.float = 0; //是否是浮点数
    this.priority = 0; //优先级
};

