"use strict";
const ancors = document.links;

const ancorHandler = (e) =>{
e.preventDefault();
console.log(e.target.dataset.port)
};

for (const ancor of ancors) {
  ancor.addEventListener('click', ancorHandler)
}

const btnColors = document.getElementsByTagName('button');
const root = document.getElementById('root');

const setColorHandler =(e)=>{
root.style.backgroundColor = e.target.dataset.color
}

for (const btnColor of btnColors) {
  btnColor.addEventListener('click',setColorHandler)}


  const [openBtn, closeBtn] =document.querySelectorAll('.btn');

  const btnHandler = (e)=>{
    let buffer = openBtn.textContent;             //buffer=a
    openBtn.textContent = closeBtn.textContent;  //a=b
    closeBtn.textContent = buffer;                //b=buffer
  }

  openBtn.addEventListener('click',btnHandler);
  closeBtn.addEventListener('click',btnHandler)