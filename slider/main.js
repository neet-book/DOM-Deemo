
var left = 0;
setTimeout(slider, 3000);

function slider(){
    var items = document.getElementsByClassName("slider-container")[0].children[0];

    left += 100;
    if ( left > 400 ) {
        left = 0;

        items.setAttribute("class", "slider no-transiton");
        items.style.left = "0%";
        setTimeout( function() {
            items.setAttribute("class", "slider");
        });
        
    }

    items.style.left = -left + "%";

    setTimeout(arguments.callee, 3000);
}

function addClassName(elem, name) {
    var elemClass = elem.getAttribute("class");
    var hasName = RegExp("\\b" + name + "\\b", "g");

    switch ( true ) {
        case elemClass == null: 
            console.log(1);
            elem.setAttribute("class", name);
        break;
        
        case hasName.test(elemClass):
            let newName = elemClass.replace(hasName, "");
            elem.setAttribute("class", newName);
        break;

        default:
            elem.className += elemClass + " " + name;
        break;       
    }
}
