function show_video_1(){
    var x = document.getElementById("middle_video_background");
    x.style.display = "block";
    var y = document.getElementById("video_1");
    y.style.display = "block";
};

function show_video_2(){
    var x = document.getElementById("middle_video_background");
    x.style.display = "block";
    var y = document.getElementById("video_2");
    y.style.display = "block";
};

function show_video_3(){
    var x = document.getElementById("middle_video_background");
    x.style.display = "block";
    var y = document.getElementById("video_3");
    y.style.display = "block";
};

function show_video_4(){
    var x = document.getElementById("middle_video_background");
    x.style.display = "block";
    var y = document.getElementById("video_4");
    y.style.display = "block";
};

function hide_video(){
    var x = document.getElementById("middle_video_background");
    x.style.display = "none";
    var y = document.getElementsByClassName("video");
    for(var i=0; i<y.length; i++) {
        y[i].style.display = "none";
        y[i].pause();
        y[i].currentTime=0;
    }
};