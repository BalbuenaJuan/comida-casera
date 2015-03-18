/**
 * Created by Juan on 17/03/2015.
 */

var menu = $('#menu');
var contenedor = $('#menu-contenedor');
var menu_offset = menu.offset();

$(window).on('scroll', function() {
    if($(window).scrollTop() > menu_offset.top) {
        menu.addClass('menu-fijo');
    } else {
        menu.removeClass('menu-fijo');
    }
});