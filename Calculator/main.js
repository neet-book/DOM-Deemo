var button = document.getElementById("button");
var expression = new Expression();
var history = {

}
button.onclick = function() {
    var clickBut = event.target;
    var resultValue = 0;
    if (! (clickBut.nodeName === "SPAN") ) return false;

    // 将点击按钮显示
    var displyContent = document.getElementsByClassName("content")[0];
    changeContent(displyContent, clickBut);
      
    //获得值
    if (/[0-9]/g.test(clickBut.id)){
        let i = 0;
        switch (true){
            case expression.poeratorMark.length > i:

                i++;
                if (expression.mark == -1){
                    expression.varl = expression.varl * -1;
                    expression.mark = 1;
                }

                expression.varlues.push(expression.varl);
                expression.varl = "";
                expression.varl += clickBut.id;
                break;
            case expression.poeratorMark.length == i:

                expression.varl += clickBut.id;
                break;
        }
    }
    
    // 根据按键执行不同功能或设置标记
    switch(true){
        // 功能键
        case clickBut.parentNode.className === "fun":
               
             exFunction(clickBut, expression, displyContent);
        break;
        // 运算符
        case clickBut.parentNode.className === "operator":

            if(clickBut.id === "mult" || clickBut.id === "division") {
                expression.priority = 1;    
            }
            expression.poeratorMark.push(clickBut.id);
        break;
            //将浮点数标记为1
        case clickBut.id === "point":
            expression.float = 1;
            expression.varl += "."
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
    function exFunction(elm, expr, target) {

        switch (true) {
            //计算，输出结果，并初始化表达式对象
            case elm.id === "result":
            resultValue = compute(expr);
            changeContent(displyContent, clickBut, resultValue);
            expression = new Expression();
            break;

            //实现删除一项输入
            case elm.id === "delect":

            break;
            //实现删除所有
            case elm.id === "delect-all":
                expre = new Expression();
                changeContent(target, elm, "")
            break;
        }
    }

    function compute(expr){
        //检查各项标记
        //处理浮点数
        expression.varlues.push(expression.varl);

        if (expr.float) {
            var accuracy = [];
            var arr = 0
            expr.varlues.map(function(val) {
                accuracy.pop( val.length - val.charAt(".") );
            } );
            expr.varlues.map(function(val) {
                val = 10* arr * parseFloat(val); 
            } );
        }
        //处理优先级
        if (expr.priority){
            var count = []
            count.push( expr.varlues.shift() );

            for( var i = 0 ; expr.poeratorMark.length > i; i++){
                
                switch(true) {
                    case expr.poeratorMark[i] === "mult":
                        count.push( count.pop() * expr.varlues.shift() );
                    break;
                    
                    case expr.poeratorMark[i] === "division":
                            var quotient = count.pop() / expr.varlues.shift();
                            if ( quotient == Infinity || quotient == -Infinity ) return "error: 0";
                            count.push( quotient );
                            
                    break;
                    default:
                        count.push( expr.varlues.shift() );
                }
            }

            expr.varlues = count;
        }
        console.log("完成乘除运算", expr.varlues);
        //将所有数进行加或减运算
        var prValue = Number( expr.varlues.shift() );
        for(var i = 0 ; expr.poeratorMark.length > i; i++){
            var  num = 0;
            switch(true) {
                case expr.poeratorMark[i] === "add":
                    num = expr.varlues.shift();
                    prValue += Number(num);
                break;
                
                case expr.poeratorMark[i] === "sub":
                    num = expr.varlues.shift();
                    prValue -= num;
                break;
                default:
                    continue;
            }
        }

        if(expr.float) prValue = prValue / arr * val; 
        return prValue;
        
    }

    /******* 函数定义，测试区  end **********/
}








function Expression () {
    this.varl = ""; //保存正在输入值
    this.poeratorMark = []; //运算符位
    this.varlues = []; //所有的值
    this.mark = 1; //是否是带符号数,1为无符号数，-1为符号数
    this.float = 0; //是否是浮点数
    this.priority = 0; //优先级
}


