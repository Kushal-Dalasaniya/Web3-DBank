import { dbank } from "../../declarations/dbank";

window.addEventListener("load",checkAmount)

async function checkAmount(){
  dbank.compoundInterest();
  const amount=await dbank.getAmount();
  console.log(amount);
  document.getElementById("value").innerHTML=amount.toFixed(2);
}


document.querySelector("form").addEventListener("submit",async (event)=>{
  event.preventDefault();

  const button=event.target.querySelector("#submit-btn");

  const increes=parseFloat(document.getElementById("input-amount").value);
  const decrss=parseFloat(document.getElementById("withdrawal-amount").value);


  button.setAttribute("disabled",true);
  if(increes){
    console.log("clicked");
    await dbank.topUp(increes);
    checkAmount();
    document.getElementById("input-amount").value="";
  }
  
  if(decrss){
    console.log("clicked decress");
    await dbank.topDown(decrss);
    checkAmount();
    document.getElementById("withdrawal-amount").value=""; 
  }
  button.removeAttribute("disabled");

  console.log(increes);
  console.log(decrss);
})