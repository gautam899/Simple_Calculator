let string = "";//THe string that will concatenate in the input feild in our html page 
let buttons = document.querySelectorAll('.button');
let memory = 0;
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '=')
        {
            if (string.includes('/0')) {
                string = "Error";
            } else {
                string = eval(string).toString();
                // string = eval(string);
            }
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string = "";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='M+'){
            memory += parseFloat(string);
            string = "";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='M-'){
            memory -= parseFloat(string);
            string = "";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='MR'){
            string = memory.toString();
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string = string.slice(0, -1);
            document.querySelector('input').value=string;
        }
        //Memory clear if we press the MC button.
        else if(e.target.innerHTML=='MC'){
            memory = 0;
        }
        else if(e.target.innerHTML=='π'){
            string = string + Math.PI.toString();
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='√'){
            string = `Math.sqrt(${string})`;
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target);
            string =  string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
        
    })
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }