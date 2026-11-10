let temp;
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



let html={firstnum:null,
    secondnum:null ,
    operate: null
};
document.querySelectorAll('button').forEach(e=> e.addEventListener('click',(e)=>{assigner(e.target.id)}))

function assigner(element){
if ((element=='+'||element=='-'||element=='*'||element=='/') && html.operate===null )
    html.operate=element;


else if(element!=='=' ){
    if (html.firstnum===null )
        html.firstnum=element;
    else if(html.operate==null)
        html.firstnum+=element;
    else if(html.secondnum===null)
        html.secondnum=element;
    else
        html.secondnum+=element;
}
else if(element=='=' && html.firstnum && html.secondnum ){
    operator(html);
    
}

}



function operator(object){
if(object.operate=='+'){
    result=add(object.firstnum,object.secondnum);
    html.firstnum=result;
    html.secondnum=null;
    html.operate=null;

}
else if(object.operate=='-'){
    result=subtract(object.firstnum,object.secondnum);
    html.firstnum=result;
    html.secondnum=null;
    html.operate=null;
}
else if(object.operate=='/'){
    result=divide(object.firstnum,object.secondnum);
    html.firstnum=result;
    html.secondnum=null;
    html.operate=null;
}
else if(object.operate=='*'){
    result=multiply(object.firstnum,object.secondnum);
    html.firstnum=result;
    html.secondnum=null;
    html.operate=null;
}



}