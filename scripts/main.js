const textCounter = document.getElementById('text-counter');
const btRemove = document.getElementById('bt-remove');
const btAdd = document.getElementById('bt-add');

let count=0;
btAdd.onclick = function(){
    count++;
    textCounter.innerHTML="GDSC's member counter:" + count;

}

btRemove.onclick = function(){
    count == 0 ? count = 0 : count--;

    textCounter.innerHTML="GDSC's member counter:"+count;
};
 const calcDisplay = document.getElementById("display");
 const calcKeyboard = document.getElementById("keyboard");
  
 let calcDisplayValue="";
 keys=[
    ["C","CE","%","/"] ,
    ["7","8","9","*"] ,
    ["4","5","6","-"] ,
    ["1","2","3","+"] ,
    ["0",".","="] ,
 ];

 function createKeyboard(){
    for(let i=0;i< keys.length;i++){
        const row = document.createElement("div");
        row.className="row";
        for(let j=0; j < keys[i].length;j++){
            const key=document.createElement("button");
            key.className="key";
            key.innerHTML= keys[i][j];
            key.addEventListener("click",function(){onkeyPress(keys[i][j]);});
            row.appendChild(key);
        }
        calcKeyboard.appendChild(row);
    }
 }
 createKeyboard();

 //alcDisplay.innerHTML="Hello world"
 let resetDisplay=false;
 function onkeyPress(key){
    if( key in ["%","/","*","-","+"]){
    calcDisplayValue = calcDisplay.innerHTML;
    resetDisplay=true;}
    if (key=="C"){calcDisplayValue="";
}
    if(key=="CE") {
        calcDisplayValue=calcDisplayValue.slice(0,-1);
        calcDisplay.innerHTML=calcDisplayValue;
    }
    if(key=="="){
       num1 = parseFloat(calcDisplayValue)
       num2 = parseFloat(calcDisplay.innerHTML)
       if(op=="+"){
        calcDisplayValue = num1 + num2;}
        if(op=="-"){
        calcDisplayValue = num1 - num2;}
        if(op=="*"){
        calcDisplayValue = num1 * num2;}
        if(op=="/"){
        calcDisplayValue = num1 / num2;}
       
       calcDisplay.innerHTML=calcDisplayValue;}
     else {
        if (resetDisplay){
            calcDisplayValue="";
            resetDisplay=false;
        }
    calcDisplayValue += key;
    calcDisplay.innerHTML=calcDisplayValue;}
 }
 
