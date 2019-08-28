$('document').ready( function () {
    //未large print按钮绑定事件
    $('#switcher button').click(function () {
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');
        var re = /( ?<=- )/g;
        console.log( this.id.match(re));
        
    } );
} );
