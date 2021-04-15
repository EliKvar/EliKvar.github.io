$(document).ready(function(){
    $(".clip-text1").click(function(){
      $("").hide();
    });

    $("p").on({
        mouseenter: function(){
          $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
          $(this).css("background-color", "lightblue");
        },
        click: function(){
          $(this).css("background-color", "yellow");
        }})
        
  });