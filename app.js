// egg movement with keyboard

let egg = document.querySelector("#egg");
let pace = 10;

window.addEventListener('load', (e) =>{
 egg.style.position = 'absolute';
 egg.style.top = 5 ;
 egg.style.left = 5 ;
 })

window.addEventListener('keydown', (e) =>{
switch (e.key) {
 case 'ArrowDown':
 egg.style.top = parseInt(egg.style.top) + pace + 'px';
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


