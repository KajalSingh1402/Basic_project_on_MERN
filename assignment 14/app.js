let btn=document.createElement('button');
btn.innerText="Click me";
let input=document.createElement('input');

document.querySelector('body').append(btn);
document.querySelector('body').append(input);

btn.setAttribute('id','btn');
input.setAttribute('placeholder','username');

let btn1=document.querySelector('#btn');
btn1.classList.add("btnStyle");

let h1=document.createElement('h1');
h1.innerHTML="<u> DOM Practice </u>";
document.querySelector('body').append(h1);

let para=document.createElement('p');
para.innerHTML="<b>Apna College Delta Practice</b>";
document.querySelector('body').append(para);

