function show_video_1(){
    var x = document.getElementById("middle_video_background");
    x.style.display = "block";

    var y = document.getElementById("video");
    y.src="../../material/async/digital_material/async_digital_material_ppt_basic.mp4";
    y.style.display = "block";

    var a = document.getElementById("middle_video_frame");
    a.style.display = "block";

    var b = document.getElementsByClassName("video_ppt");
    for(var i=0; i<b.length; i++) {
        b[i].style.display = "block";
    }
};

function show_video_2(){
    var y = document.getElementById("video");
    y.src="../../material/async/digital_material/async_digital_material_ppt_advanced.mp4";
    y.style.display = "block";
};

function show_video_3(){
    var x = document.getElementById("middle_video_background");
    x.style.display = "block";

    var y = document.getElementById("video");
    y.src="../../material/async/digital_material/async_digital_material_evercam_basic.mp4";
    y.style.display = "block";

    var a = document.getElementById("middle_video_frame");
    a.style.display = "block";

    var b = document.getElementsByClassName("video_evercam");
    for(var i=0; i<b.length; i++) {
        b[i].style.display = "block";
    }
};

function show_video_4(){
    var y = document.getElementById("video");
    y.src="../../material/async/digital_material/async_digital_material_evercam_advanced.mp4";
    y.style.display = "block";
};

function show_video_5(){
    var x = document.getElementById("middle_video_background");
    x.style.display = "block";

    var y = document.getElementById("video");
    y.src="../../material/async/digital_material/async_digital_material_ispring_basic.mp4";
    y.style.display = "block";

    var a = document.getElementById("middle_video_frame");
    a.style.display = "block";

    var b = document.getElementsByClassName("video_ispring");
    for(var i=0; i<b.length; i++) {
        b[i].style.display = "block";
    }
};

function show_video_6(){
    var y = document.getElementById("video");
    y.src="../../material/async/digital_material/async_digital_material_ispring_advanced.mp4";
    y.style.display = "block";
};

function hide_video(){
    var x = document.getElementById("middle_video_background");
    x.style.display = "none";

    var y = document.getElementById("video");
    y.style.display = "none";
    y.pause();
    y.currentTime=0;

    var z = document.getElementById("middle_video_frame");
    z.style.display = "none";

    var w = document.getElementsByClassName("middle_video_button");
    for(var i=0; i<w.length; i++) {
        w[i].style.display = "none";
    }
};