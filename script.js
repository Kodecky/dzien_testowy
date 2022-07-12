const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btnMain = document.querySelector(".btn");

const circ1 = document.querySelector(".circ1");
const circ2 = document.querySelector(".circ2");
const circ3 = document.querySelector(".circ3");
const circ4 = document.querySelector(".circ4");

const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");

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


let displayedLabel=[];

btnMain.addEventListener("click", (event)=>{
  event.preventDefault();
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

  checkboxes.forEach((checkboxes, index)=>{
    displayedLabel[index] = document.querySelector(`label[for='inp${index+1}'] span.upper`).textContent;
  })
  console.log(displayedLabel);

  // for(i=0; i<=checkboxes.length; i++) {
  //   console.log(displayedLabel[i]);
  // }



  // checkboxes.forEach((checkboxes,index)=>{ 
  //     // console.log(document.querySelector(`label[for='inp${i}'] span.upper).textContent`)); 
      
  //       displayedLabel = document.querySelector(`label[for='inp" + ${index} + "'] span.upper`).textContent;
  //       console.log(displayedLabel);
      
  // })
  // let displayedLabel = document.querySelector("label[for='" + zmienna + "'] span.upper").textContent;

})