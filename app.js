function display(val){
             document.getElementsByClassName
             document.getElementById("input").value += val;
         }

function calculate(){
    var x = document.getElementById("input").value;
    var x1 = document.getElementById("input").value.indexOf("^"); 
    if(x1 != -1){
        var first = parseInt(x.substr(0,x1));
        var second = parseInt(x.substr(x1 + 1));
        var pow = Math.pow(first,second);
        document.getElementById("input").value = pow;
    }
    else{
        var y = eval(x);
        document.getElementById("input").value = y;
    }
}

function clr(){
    document.getElementById("input").value = "";
}

function sqrt(){
   var x = document.getElementById("input").value;
   var y = Math.sqrt(x);
   document.getElementById("input").value = y;
}

