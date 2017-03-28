function font_style() {
        var font=document.getElementById("fontStyle").value;
        if (font=="bold") {
            document.getElementById("quote").style.fontWeight=font;
            document.getElementById("quote").style.fontStyle="normal";
        }
        else if (font=="italic bold") {
            document.getElementById("quote").style.fontWeight="bold";
            document.getElementById("quote").style.fontStyle="italic";
        }
        else {
        document.getElementById("quote").style.fontStyle=font;
        document.getElementById("quote").style.fontWeight="normal";
        }
    }
function font_family() {
        var font=document.getElementById("fontFamily").value;
            document.getElementById("quote").style.fontFamily=font;
        
    }
function font_backgroundColor() {
        var fontBackground=document.getElementById("fontColor").value;
            document.getElementById("quote").style.backgroundColor=fontBackground;
        
    }
function fontSIZE() {
   
        var fontBackground=document.getElementById("fontSize").value;
            document.getElementById("quote").style.fontSize=fontBackground + "px"
        
    }


    

