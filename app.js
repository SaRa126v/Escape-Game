// egg movement
let egg = document.querySelector("#egg");
let pace = 10;

// image loading before javascript
window.addEventListener("load", (e) => {
  egg.style.position = "absolute";
  egg.style.top = "20px";
  egg.style.left = "20px";
});


// move with arrows on the keyboard
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowDown":
      egg.style.top = parseInt(egg.style.top) + pace + "px";
      break;
    case "ArrowUp":
      egg.style.top = parseInt(egg.style.top) - pace + "px";
      break;
    case "ArrowLeft":
      egg.style.left = parseInt(egg.style.left) - pace + "px";
      break;
    case "ArrowRight":
      egg.style.left = parseInt(egg.style.left) + pace + "px";
      break;
  }

  // getting the egg position with each movement
  // const eggPosition = egg.getBoundingClientRect();
  // console.log(eggPosition);
  // return eggPosition;
});



// speed up with '+' button
document.querySelector("#addBtn").addEventListener("click", () => {
  if (pace < 100) {
    pace += 10;
  }
});

// speed down with '-' button
document.querySelector("#substractBtn").addEventListener("click", () => {
  if (pace > 10) {
    pace = pace - 10;
  }
});

// speeding up with shortcut
document.addEventListener("keydown", (e) => {
  // prevent default shortcut
  e.preventDefault();
  // upercase to lowercase if any
  if (e.key.toLowerCase() === "x") {
    if (pace < 100) {
      pace += 10;
    }
  }
});

//*Decrease The value Of Hearts and display
const livesValue = document.querySelector("#number");
const gameover = document.querySelector("#gameover");

let lives = 5;
egg.addEventListener("click", function () {
   
  lives--;
  livesValue.textContent = lives;

  // hurt sound
  let hurt_sound = new Audio(
    "assets/sounds/mixkit-failure-arcade-alert-notification-240.wav"
  );

  if (lives == 1) {
    document.getElementById("heart5").style.display = "block";
    document.body.style.overflow = "hidden";
    hurt_sound.play();
  } else if (lives == 2) {
    document.getElementById("heart4").style.display = "block";
    hurt_sound.play();
  } else if (lives == 3) {
    document.getElementById("heart3").style.display = "block";
    hurt_sound.play();
  } else if (lives == 4) {
    document.getElementById("heart2").style.display = "block";
    hurt_sound.play();
  } else {
    lives = 0;
    resets.style.display = "block";
    document.getElementById("playfire").src = "assets/firework.gif";
    // gameOver sound
    let gameOver_sound = new Audio("assets/sounds/egg.m4a");
    gameOver_sound.play();

    // reset
    document.getElementById("reset").reset();
  }
});



// الگوریتم:
// ١)ی ارایه باشه ک پوزیشن بمب رو بگیره و توش بندازه. هرجا از کانتینر کلیک کرد بمب بزاره و پوزیشنش رو بگیره.
// ٢)پوزیشن بمب به اخر ارایه اضافه میشه و از اول کم میشه
// ٣)با گذشتن ی تایم خاص از ارایه حذف بشن
// ۴)تعداد ایندکس ها محدود باشه . با هرکلیک اگ کمتر از ۵تا بود بهش اضاف کن
// ۵) فورایچ: پوزیشن پلیراول رو بگیره و با مقدارهای ارایه مقایسه کنه اگ یکی بود از جونش کم کنه
// ۶)از کنوس استفاده کن ک پلیر از صفحه نزنه بیرون.


// // adding up to 5 bombs in the page....................

// // bomb storage
// const bombStorage = [];

// const container = document.querySelector("#container");

// container.addEventListener("click", (e) => {

//   // limiting & storing the bomb
// if (bombStorage.length < 5) {
//   // creating a bomb
//     const bomb = document.createElement("img");
//     bomb.src = "assets/bomb.png";
//     bomb.className = "bomb";

//   // bomb position
//     bomb.style.position = "absolute";
//     bomb.style.top = e.offsetY + "px";
//     bomb.style.left = e.offsetX + "px";
  
//     // adding the bomb in the page
//     container.appendChild(bomb);
  
//    // adding the bomb in the storage 
//    const bombPosition = bomb.getBoundingClientRect();
//       bombStorage.push(bombPosition);

//     console.log(bombStorage);
//     console.log(bombPosition);
// }
// });

