const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btnMain = document.querySelector(".btn");

const circ1 = document.querySelector(".circ1");
const circ2 = document.querySelector(".circ2");
const circ3 = document.querySelector(".circ3");
const circ4 = document.querySelector(".circ4");

btn1.addEventListener("click", ()=>{
  circ1.classList.toggle("filled");
  circ4.classList.remove("filled");
})
btn2.addEventListener("click", ()=>{
  circ2.classList.toggle("filled");
  circ4.classList.remove("filled");
})
btn3.addEventListener("click", ()=>{
  circ3.classList.toggle("filled");
  circ4.classList.remove("filled");
})
btn4.addEventListener("click", ()=>{
  circ1.classList.remove("filled");
  circ2.classList.remove("filled");
  circ3.classList.remove("filled");
  circ4.classList.toggle("filled");
})

btnMain.addEventListener("click", ()=>{
  for(i=1; i<=4; i++){
    if(`circ${i}.className("filled")`) {
      console.log(`Wybrano pozycję: ${i}`);
    }
  }
})