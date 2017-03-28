function foxTrot() {
        
        textTyped=document.getElementById("textTyped").value;
        var Words=new Array;
        var i=0;
        var wordsCoded;
        while (i<textTyped.length) {
            if (textTyped[i]!=null && isAlpha(textTyped[i])){
            Words.push(textTyped[i]);
            }
            i++;
        }
        i=0;


   

i =0;
var fullSentence="";
while (i<Words.length) {
    switch(Words[i]) {
        case "a":
            Words[i]="Alpha";
            break;
        case "A":
            Words[i]="Alpha";
            break;
        case "b":
            Words[i]="Beta";
            break;
        case "B":
            Words[i]="Beta";
            break;
        case "c":
            Words[i]="Charlie";
            break;
        case "C":
            Words[i]="Charlie";
            break;
        case "d":
            Words[i]="Delta";
            break;
        case "D":
            Words[i]="Delta";
            break;
        case "e":
            Words[i]="Echo";
            break;
        case "E":
            Words[i]="Echo";
            break;
        case "f":
            Words[i]="Foxtrot";
            break;
        case "F":
            Words[i]="Foxtrot";
            break;
        case "g":
            Words[i]="Golf";
            break;
        case "G":
            Words[i]="Golf";
            break;
        case "h":
            Words[i]="Hotel";
            break;
        case "H":
            Words[i]="Hotel";
            break;
        case "i":
            Words[i]="India";
            break;
        case "I":
            Words[i]="India";
            break;
        case "j":
            Words[i]="Juliett";
            break;
        case "J":
            Words[i]="Juliett";
            break;
        case "k":
            Words[i]="Kilo";
            break;
        case "K":
            Words[i]="Kilo";
            break;
        case "l":
            Words[i]="Lima";
            break;
        case "L":
            Words[i]="Lima";
            break;
        case "m":
            Words[i]="Mike";
            break;
        case "M":
            Words[i]="Mike";
            break;
        case "n":
            Words[i]="November";
            break;
        case "N":
            Words[i]="November";
            break;
        case "o":
            Words[i]="Oscar";
            break;
        case "O":
            Words[i]="Oscar";
            break;
        case "p":
            Words[i]="Papa";
            break;
        case "P":
            Words[i]="Papa";
            break;
        case "q":
            Words[i]="Quebec";
            break;
        case "Q":
            Words[i]="Quebec";
            break;
        case "r":
            Words[i]="Romeo";
            break;
        case "R":
            Words[i]="Romeo";
            break;
        case "s":
            Words[i]="Sierra";
            break;
        case "S":
            Words[i]="Sierra";
            break;
        case "t":
            Words[i]="Tango";
            break;
        case "T":
            Words[i]="Tango";
            break;
        case "u":
            Words[i]="Uniform";
            break;
        case "U":
            Words[i]="Uniform";
            break;
        case "v":
            Words[i]="Victor";
            break;
        case "V":
            Words[i]="Victor";
            break;
        case "w":
            Words[i]="Whiskey";
            break;
        case "W":
            Words[i]="Whiskey";
            break;
        case "x":
            Words[i]="X-ray";
            break;
        case "X":
            Words[i]="X-ray";
            break;
        case "y":
            Words[i]="Yankee";
            break;
        case "Y":
            Words[i]="Yankee";
            break;
        case "z":
            Words[i]="Zulu";
            break;
        case "Z":
            Words[i]="Zulu";
            break;
    }
    i++;
}


i=0;
while (i<Words.length) {
    fullSentence=fullSentence+ " " + Words[i];
    i++;
}
//counter.textContent
document.getElementById("codewords").textContent=fullSentence;
    
}

function isAlpha(xStr){
    var regEx = /^[a-zA-Z\-]+$/;
    return xStr.match(regEx);
  }

    

