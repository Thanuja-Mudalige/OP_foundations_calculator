let numberone;
let numberTwo;
let operator;
let result;


function add(num1,num2){
    return Number(num1)+Number(num2);
}
function subtract(num1,num2){
    return Number(num1)-Number(num2);
}
function multiply(num1,num2){
    return Number(num1)*Number(num2);
}
function divide(num1,num2){
    if (num2==0){
        return 'Invalid'
    }
    return Number(num1)/Number(num2);
}

function operate(num1,operator,num2){
    switch(operator){
        case '+':
           return add(num1,num2);
            break;
        case '-':
           return subtract(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
        case '*':
            return  multiply(num1,num2);
            break;
    }
}
let html=''
let currentinput='';

let buttons=document.querySelectorAll('button').forEach(
    (button)=>button.addEventListener('click',()=>{
        let display=document.querySelector('.display');
        if(button.id=='clear'){
            html='';
            numberone='';
            numberTwo='';
            operator='';
            display.innerText=html;
        } 
        else if (button.id=='+'||button.id=='-'||button.id=='/'||button.id=='*'){
            variableAssign(currentinput,button.id);
            currentinput='';
            html+=button.id;
             display.innerText=html;

        }
        else if(button.id=='='){
            if(numberone && currentinput && operator){
            let result=operate(numberone,operator,currentinput);
            numberone=result;
            currentinput=result;
            display.innerText=result;
             numberTwo='';
            operator='';
            html=numberone;
        
        }
            }

        else{
        html+=button.id;
        currentinput+=button.id;
        display.innerText=html;}
        
        
         






        
       
    }));


function variableAssign(input,newoperator){
    if(numberone && numberTwo && operator){
       let result= operate(numberone,newoperator,numberTwo);
       numberone=result;
       numberTwo=input;
       operator=newoperator;
    }
    else if(numberone && !numberTwo){
        numberTwo=input
        let currentoperator=newoperator;
        let result=operate(numberone,operator,numberTwo);
        numberone=result;
        operator=currentoperator;
    }
    else{
    operator=newoperator;
    numberone=input;
   }
  

}