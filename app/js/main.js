/**
 *
 * Bootstrap one-page template with Parallax effect | Script Tutorials
 * http://www.script-tutorials.com/bootstrap-one-page-template-with-parallax-effect/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Script Tutorials
 * http://www.script-tutorials.com/
 */
var i= 1;
$(document).ready(function (){

  /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        var bottom_of_object;
        var bottom_of_window;
        var last_bottom_of_window;

        /* Check the location of each desired element */
        $('.nav').each( function(i){
            
            bottom_of_object = $(about).offset().top - 10 ;
            bottom_of_window = $(window).scrollTop() ;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).css({'-webkit-transform':'translateY(0)','-o-transform': 'translateY(0)','-moz-transform': 'translateY(0)'})
            }else{
                $(this).css({'-webkit-transform':'translateY(-60px)','-o-transform': 'translateY(-60px)','-moz-transform': 'translateY(-60px)'})
            }
        }); 

        
    });
});