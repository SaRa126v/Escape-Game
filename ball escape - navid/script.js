const ball = document.querySelector('.ball');
const speedController = document.querySelector('.speed-controller input');
const speedValue = document.querySelector('.speed-value');
const livesValue = document.querySelector('.lives-value');
const gameover = document.querySelector('.gameover');

let x = 0;
let y = 0;
let speed = 1;
let lives = 5;

speedController.addEventListener('input', function(event) {
  speed = event.target.value;
  speedValue.textContent = speed;
});

document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowUp') {
    y -= 50 * speed;
  } else if (event.code === 'ArrowDown') {
    y += 50 * speed;
  } else if (event.code === 'ArrowLeft') {
    x -= 50 * speed;
  } else if (event.code === 'ArrowRight') {
    x += 50 * speed;
  }
  ball.style.transform = `translate(${x}px, ${y}px)`;
});

ball.addEventListener('click', function() {
  lives--;
  livesValue.textContent = lives;
  if (lives === 0) {
    gameover.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
});

document.addEventListener('click', function(event) {
  if (event.target === ball) {
    // Show gun shot
    alert(lives);
  // } else {
  //   // Show error message
  //   alert('You missed the ball!');
  }
});