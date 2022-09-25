var video = document.getElementById("mp4");
    var btnstart = document.getElementById("btnstart");
    var current_time=document.getElementById('current_time');
    var btntime = document.getElementById("btntime");
    var btngo = document.getElementById("btngo");
    var btnback = document.getElementById("btnback");
    var btnmute=document.getElementById("btnmute");
    var btnsound=document.getElementById("btnsound");
    var btnbig=document.getElementById("btnbig");
    var totaltime=document.getElementById('totaltime');
    //Executed when the video starts playing
    video.onplaying = function () {
        //get the total time of the video
        var allTime = video.duration;
        var m=Math.floor(allTime%3600/60);
        var s=Math.floor(allTime%60);
        m=m>=10?m:'0'+m;
        s=s>=10?s:'0'+s;
        totaltime.innerHTML=m+':'+s;//allTime.toString();
    };
    //start executed when the video playback position changes
    video.ontimeupdate = function () {
        btntime.value =100*this.currentTime/this.duration;///this.totaltime;
        var time=this.currentTime;
        var m=Math.floor(time%3600/60);
        var s=Math.floor(time%60);
        m=m>=10?m:'0'+m;
        s=s>=10?s:'0'+s;
        current_time.innerHTML=m+':'+s;
    };
 
    //Event for playing progress bar
    btntime.addEventListener("mousedown",function(){
        this.onmousemove=function(){
            video.currentTime=this.value*video.duration/100;
        }
        this.onmouseup=function(){
            this.onmousemove=null;
            this.onmouseup=null;
        }
    });
 
    //Fast forward click events, in every 5 seconds
    btngo.addEventListener("click", function () {
        btnstart.innerHTML = "PLAY";
        video.pause();
        time = setInterval(function () {
            video.currentTime += 5;
        }, 1000);
    });
    //Fast backward click event, in every 2 seconds
    btnback.addEventListener("click", function () {
        btnstart.innerHTML = "PLAY";
        video.pause();
        time = setInterval(function () {
            video.currentTime -= 2;
            if (video.currentTime <= 0) {
                video.play();
                clearInterval(time);
            }
        }, 1000);
    });
    
    //Volume Progress Bar Events
    btnsound.addEventListener("mousedown",function(){
        this.onmousemove=function(){
            video.volume=this.value/100;
        }
        this.onmouseup=function(){
            this.onmousemove=null;
            this.onmouseup=null;
        }
    });
    //Full screen click event
    btnbig.addEventListener("click",function(){
        if (video.webkitRequestFullScreen) {
            video.webkitRequestFullScreen();
        }
        else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        }
        else if (video.msRequestFullScreen) {
            video.msRequestFullScreen();
        }
        else if (video.RequestFullScreen) {
            video.RequestFullScreen();
        }
    });
    //Played click events
    btnstart.addEventListener("click", function () {
        if (this.innerHTML == "PLAY") {
            video.play();
            this.innerHTML = "STOP";
        }
        else {
            video.pause();
            this.innerHTML = "PLAY";
        }
        clearInterval(time);
    })

    
   //Mute click events
   btnmute.addEventListener("click",function(){
    video.muted=!video.muted;
});
    

  