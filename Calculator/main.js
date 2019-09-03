var button = document.getElementById("button");

button.onclick = function() {
    var clickBut = event.target;
    
    if (! (clickBut.nodeName === "SPAN") ) return false;
    


}