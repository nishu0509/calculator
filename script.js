let screen = document.querySelector("input");
let buttons =
document.querySelectorAll("button");
let screenValue ="";

buttons.forEach(button =>{
button.addEventListener('click',(e)=>{
    let buttonText = e.target.innerText;
    console.log("Clicked:",buttonText);

if (buttonText === '÷') {
  buttonText = '/';
}
if (buttonText === 'x') {
  buttonText = '*';
}

    if(buttonText ==='AC'){
        screenValue = "";
        screen.value = screenValue;
    }

    else if(buttonText === '='){
        try{
            screen.value = eval(screenValue);
        } catch{
            screen.value ="Error";
        }
    }
    
    else if(buttonText === '⌫'|| buttonText=== 'DEL'|| buttonText === '←'){
    screenValue = screenValue.slice(0,-1);
    screen.value = screenValue;
    }

    else{
    screenValue += buttonText;
    screen.value = screenValue;
}
});
});
