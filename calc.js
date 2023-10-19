let x=document.getElementById('num1').value;
let y=document.getElementById('num2').value;
console.log(x+y);
function sum()
{
    let x=document.getElementById('num1').value;
    let y=document.getElementById('num2').value;
    let a = parseInt(x);
    let b=parseInt(y)
    let k=a+b
    document.getElementById("demo").innerHTML ="Result :-"+k;
    console.log(k);
}
function sub()
{
    let x=document.getElementById('num1').value;
    let y=document.getElementById('num2').value;
    let a = parseInt(x);
    let b=parseInt(y)
    let k=a-b
    document.getElementById("demo").innerHTML ="Result :-"+k;
    console.log(k);
}
function mul()
{
    let x=document.getElementById('num1').value;
    let y=document.getElementById('num2').value;
    let a = parseInt(x);
    let b=parseInt(y)
    let k=a*b
    document.getElementById("demo").innerHTML ="Result :-"+k;
    console.log(k);   
}
function div()
{
    let x=document.getElementById('num1').value;
    let y=document.getElementById('num2').value;
    let a = parseInt(x);
    let b=parseInt(y)
    let k=a/b
    document.getElementById("demo").innerHTML ="Result :-"+k;
    console.log(k);   
}
