// var timeDivMain = document.createElement("div");
var timeDiv = document.createElement("div");
var timeNow = document.createElement("p");
timeDivMain.appendChild(timeDiv);
timeDiv.appendChild(timeNow);
// document.body.appendChild(timeDivMain); 
timeDiv.className += "timeStyle";
// timeDivMain.className = "bkg_night";



var timeModule = (function() {

    return{   
        changeTime: function(){
            var now = new Date();
            var hour = now.getHours() >= 10 ? now.getHours() : "0" + now.getHours();
            var min = now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes();
            var sec = now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds();
            var date_s = hour + " " + min + " " + sec;
            timeNow.innerHTML = date_s;    
            timeModule.changeColor(now.getHours());
        },
        getTime: function(){
            var now = new Date();
            var hour = now.getHours() >= 10 ? now.getHours() : "0" + now.getHours();
            var min = now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes();
            var sec = now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds();
            var date_s = hour + " " + min + " " + sec;
            return date_s;    
        },
        changeColor: function(hours){
            if(hours >= 0 && hours < 6){
                timeDivMain.className = "bkg_night";
            }else if(hours >= 6 && hours < 10){
                timeDivMain.className = "bkg_daytime";
            }else if(hours >= 10 && hours < 18){
                timeDivMain.className = "bkg_evening";
            }else if(hours >= 18 && hours < 24){
                timeDivMain.className = "bkg_night";
            }
        },
        getColor: function(hours){
            var colorClass;
            if(hours >= 0 && hours < 6){
                colorClass = "bkg_night";
            }else if(hours >= 6 && hours < 10){
                colorClass = "bkg_daytime";
            }else if(hours >= 10 && hours < 18){
                colorClass = "bkg_evening";
            }else if(hours >= 18 && hours < 24){
                colorClass = "bkg_night";
            }
            return colorClass;
        }
    }
})();
var now = new Date();
timeNow.innerHTML = timeModule.getTime(); 
timeDivMain.className = timeModule.getColor(now.getHours());
var interval = setInterval(timeModule.changeTime,1000);   
