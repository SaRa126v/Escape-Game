// egg movement 
let egg = document.querySelector("#egg");
let pace = 10;

// image loading before javascript 
window.addEventListener('load', (e) =>{
   egg.style.position = 'absolute';
   egg.style.top = 0 ;
   egg.style.left = 0 ;
})

// move with arrows on the keyboard
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

// speed up with '+' button
document.querySelector('#addBtn').addEventListener('click', ()=> {
   if (pace < 100 ) {
      pace += 10;     
   }
   
})

// speed down with '-' button
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

//*Decrease The value Of Hearts and display
const livesValue = document.querySelector('#number');
const gameover = document.querySelector('#gameover');

let lives = 5;
egg.addEventListener('click',function(){
   lives--;
      livesValue.textContent = lives;
   if(lives ==1){
      document.getElementById('heart5').style.display = "block";
      document.body.style.overflow = 'hidden';
   }else if(lives ==2){
      document.getElementById('heart4').style.display = "block";
   }else if(lives == 3){
      document.getElementById('heart3').style.display = "block";
   }else if(lives == 4){
      document.getElementById('heart2').style.display = "block";
   }else{
      gameover.style.display = 'block';
      lives =1;
      document.getElementById("reset").reset();
   }
});