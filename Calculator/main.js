var button = document.getElementById("button");
var expression = new Expression();
var history = {

}
button.onclick = function() {
    var clickBut = event.target;
    if (! (clickBut.nodeName === "SPAN") ) return false;

    // 将点击按钮显示
    var displyContent = document.getElementsByClassName("content")[0];
    changeContent(displyContent, clickBut);
      
    //获得计算值
    if (/[0-9]/g.test(clickBut.id)){

        if (expression.poeratorMark.length == 0) {

            expression.varl1 += clickBut.id;
        } else {

            expression.varl2 += clickBut.id;
        }
    }
    // 根据按键执行不同功能或设置标记
    switch(true){
        case clickBut.parentNode.className === "fun":
               
             exFunction(clickBut, expression, displyContent);
        break;

        case clickBut.parentNode.className === "operator":
            if(clickBut.id === "mult" || clickBut.id === "division") {

                expression.priority = 1;
            }
            expression.poeratorMark.push(clickBut.id);
        break;
            //将浮点数标记为1
        case clickBut.id === "point":
            expression.float = 1;
        break;
            //将符号标记为-1
        case clickBut.id === "negative":
            expression.mark = -1;
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

        if ( ! ( result === undefined ) ) {

            target.innerHTML = result;
            return;
        }

        if ( ! (btn.parentNode.className === "fun" || btn.id === "result" ) ) {
            target.innerHTML += btn.innerHTML;
        } else {
            target.innerHTML += "";
        }
    }

    // 执行各项功能
    function exFunction(elm, expre, target) {
        switch (true) {
            case elm.id === "result":
            history = compute(expre);
            break;
            case elm.id === "delect":

            break;
            case elm.id === "delect-all":
                expre = new Expression();
                changeContent(target, elm, "")
            break;


        }
    }

    function compute(){
    
    }

/******* 函数定义，测试区  end **********/



    console.log(expression);
}

function Expression () {
    this.varl1 = ""; //值1
    this.varl2 = ""; //值2
    this.poeratorMark = []; //运算符
    this.varlues = []; //所有的值
    this.mark = 1; //是否是带符号数,1为无符号数，-1为符号数
    this.float = 0; //是否是浮点数
    this.priority = 0; //优先级
}

