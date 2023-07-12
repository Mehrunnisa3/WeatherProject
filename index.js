for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    if(this =="0"){
        var audio = new Audio("crash.mp3");
        audio.play();

    }
});
    
};

