
$(document).ready(function(){
    var makeHeightEqual = function(){
        var squareElements = $('.square-element');
        squareElements.css('height', $('.square-element').css('width')); 
    }
    
    jQuery(window).resize(makeHeightEqual);
    makeHeightEqual();
})

