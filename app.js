// egg movement 

let egg = document.querySelector("#egg");
let pace = 10;

// img loading before script
window.addEventListener('load', (e) =>{
 egg.style.position = 'absolute';
 egg.style.top = 0 ;
 egg.style.left = 0 ;
 })

// move with keyboard
window.addEventListener('keydown', (e) =>{
switch (e.key) {
 case 'ArrowDown':
 egg.style.top = parseInt(egg.style.top) + pace + 'px';
 console.log(egg.style.top);
 console.log(pace);
  break;
  case 'ArrowUp':
   egg.style.top = parseInt(egg.style.top) - pace + 'px';
  break;
  case 'ArrowLeft':
   egg.style.left = parseInt(egg.style.left) - pace + 'px';
  break;
  case 'ArrowRight':
   egg.style.left = parseInt(egg.style.left) + pace + 'px';
   break;
}
})

// speed up with limitation
document.querySelector('#addBtn').addEventListener('click', ()=> {
   if (pace < 100 ) {
      pace += 10;     
   }
  
})

// speed down with limitation
document.querySelector('#substractBtn').addEventListener('click', ()=> {
   if (pace > 10 ) {
      pace = pace - 10;    
   }
   
})

// speeding up with shortcut 
document.addEventListener('keydown', (e)=> {
   // prevent default shortcut 
   e.preventDefault();
   // upercase to lowercase if any
   if (e.key.toLowerCase() === "x") {

      if (pace < 100 ) {
         pace += 10;           
      }    
      
   }
})

//*Decreas In The Number Of Heart and Message

let number =5;
window.addEventListener("onclick",Decrea);
function Decrea(){
   if(number){
      let decrea =
      document.getElementById("number");
      number--;
      decrea.innerHTML =number;
   }else if(number ==0){
      document.getElementById("messagebox").style.display ="block";
   }else if(number ==0){
      
      document.getElementById("resets").reset();
   }
}