$(function(){
    var str=$(window).width()

    if(str>1500){
    $('.wrapper .leval2').mouseover(function(){
        $(this).stop(true).animate({
            "marginTop":"0px"
        },300)
       
    })
        $('.wrapper .leval2').mouseout(function(){
        $(this).stop(true).animate({
            "marginTop":"-180px"
        },300)
       
    })
     $('.wrapper .leval3').mouseover(function(){
        $(this).stop(true).animate({
            "marginTop":"0px"
        },300)
      
    })
        $('.wrapper .leval3').mouseout(function(){
        $(this).stop(true).animate({
            "marginTop":"-150px"
        },300)
      
    })

     $('.login').mouseover(function(){
        $(this).stop(true).animate({
            "marginTop":"0px"
        },300)
      
    })
 
        $('.login').mouseout(function(){
        $(this).stop(true).animate({
            "marginTop":"-150px"
        },300)
       
    })
}
$('.icon').click(function(){
    $('.bottom .body').css({
        'max-height':"100%",
        
    })
    $('#demo ').css({
        "margin-bottom":"30px"
    })
     $('#demo1 ').css({
        "margin-bottom":"30px"
    })
     $('#demo2').css({
        "margin-bottom":"30px"
    })
    
})
 


})