function foxTrot(event){
     var x = event.which || event.keyCode;
     if (x==13) {
        var originalWords=document.getElementById("textTyped").value;
        var stripped=originalWords.replace(/[^A-Za-z ]/g, '');
        var i=0;
        var Words=stripped.split(/[ ]+/);
        var newWords=new Array;
        while (i<Words.length) {
            newWords.push(makePig(Words[i]));
            i++;
        }
        i=0;
        var fullSentence="";
        while (i<newWords.length) {
            fullSentence=fullSentence+" " + newWords[i];
            i++;
        }
        
        
        
        
        document.getElementById("translatedWords").textContent=document.getElementById("translatedWords").textContent+fullSentence;
     }
}

function vowelTest(s) {
  return (/^[aeiouAEIOU]$/i).test(s);
}

function makePig(str) {
    var i=0;
    var letters=str;
   




    while (i<str.length) {
        if (vowelTest(str[i])) {
            var newWord=letters+"ay";
            return newWord;
        }
        else {
            
            letters=letters+str[i];
            letters=letters.slice(1);
        }
        
        i++;
    }
    var newWord=letters+"ay";
    
    return newWord;
}

function isAlpha(xStr){
    var regEx = /^[a-zA-Z\-]+$/;
    return xStr.match(regEx);
  }



   

