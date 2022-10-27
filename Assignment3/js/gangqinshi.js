var start_btn=document.getElementById("start_btn");

    var music=document.getElementsByClassName("music");
    //Start to circle
    start_btn.onclick=function(){
        //Start to circle
        
        timer=setInterval(start,300);
    }
    var i=0;

    var gedan_list=document.getElementsByClassName("img");
    function start(){
        //Set random number
        var n=Math.round(Math.random()*10);
        i++;
		if(i==8){
			i = 0;
		}
        
        for(var j=0;j<music.length;j++){
            music[j].style.boxShadow="none";
        }
        
        if(i==n){
            
            gedan_list[i].style.display="block";
            clearInterval(timer);
           
            

        }

        music[i].style.boxShadow="2px 5px 10px 5px #000";
        console.log(i,n);
        
    } 
    for(var w=0;w<gedan_list.length;w++){
        gedan_list[w].onclick=function(){
            this.style.display="none";
        }

    }
    // Stop turning
    var stop_btn=document.getElementById("stop_btn");
    stop_btn.onclick=function(){
        clearInterval(timer);
    }
    //Playing and pausing music
    var mp3=document.getElementsByTagName("audio");
    var Play=document.getElementsByClassName("Play");
    for(var m=0;m<Play.length;m++){

        Play[m].onclick=function(){
            for(var k=0;k<Play.length;k++){
                Play[k].style.boxShadow="0 7px 8px #000";
            }
            this.style.boxShadow="none";
            
            this.childNodes[1].play();
            console.log(this.childNodes[1]);

        }
        
    }