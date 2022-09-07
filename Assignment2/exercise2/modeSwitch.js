let isDarkMode = false

function switchModes(){
    if(isDarkMode === false){
        document.documentElement.style.setProperty("--col-01","#f9dde6");
        document.documentElement.style.setProperty("--col-02","#171219");
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDarkMode = true;
    }else{
        document.documentElement.style.setProperty("--col-01","#171219");
        document.documentElement.style.setProperty("--col-02","#f9dde6");
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDarkMode = false;
    }
    
}