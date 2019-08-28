/*$(document).ready()方法，jQuery支持我们预定在DOM加载完毕后调用某个函
 *数，而不必等待页面中的图像加载。
*/
$(document).ready(
    function () {
        //获得div 类名poem-stanza的元素
    $('div.poem-stanza').addClass('horizontal');
} );