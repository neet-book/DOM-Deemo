var button = document.getElementById("button");
var expression = new Expression();

button.onclick = function() {
    var clickBut = event.target;
    if (! (clickBut.nodeName === "SPAN") ) return false;
    
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