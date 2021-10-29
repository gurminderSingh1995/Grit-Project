$(document).ready(function(){
    $("#openbutton").click(function (){
        $("#myOverlay").css("display","block");    
   });
    $("#closebutton").click(function (){
        $("#myOverlay").css("display","none");    
   });
    
$("#loginbtn").css("background-color","#00cccc");   
    $("#sign-up").hide();
    $("#login").show();
    $("#loginbtn").click(function(){
        $("#sign-up").hide();
        $("#login").show();
        $(this).css("background-color","#00cccc");
        $("#signupbtn").css("background-color","#ddd");
        
    });
    $("#signupbtn").click(function(){
        $("#login").hide();
        $("#sign-up").show();
        $(this).css("background-color","#00cccc");
        $("#loginbtn").css("background-color","#ddd");
    });
});