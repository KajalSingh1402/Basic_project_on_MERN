let h1=document.querySelector('h1');
let btn=document.querySelector('button');
let div=document.querySelector('div');

btn.addEventListener('click',function(){
    let randomColor=getRandomColor();
    h1.innerText=randomColor;

    div.style.backgroundColor=randomColor;
    
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}

let btn1=document.createElement('button');
btn1.innerText="button";
div.append(btn1);
btn1.addEventListener("click",function(){
    btn1.style.color="white";
    btn1.style.backgroundColor="black";
})