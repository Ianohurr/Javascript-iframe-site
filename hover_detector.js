function color_change() {
        var boxxy=document.getElementById("box");
        boxxy.style.backgroundColor="yellow";
        boxxy.textContent="Hey buddy, back off!";
    }
    function color_change2() {
        var boxxy=document.getElementById("box");
        boxxy.style.backgroundColor="#ccccff";
        boxxy.textContent="It's me again!";
        var counter=document.getElementById("counter");
        counter.textContent="You have backed off " + window.counter + " times";
        window.counter++;
        
    }
  var counter=1; 

    

