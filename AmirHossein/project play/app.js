let number =5;
number.addEventListener("click", start);
function start(){
    if(number){
        let Decreas =
        document.getElementById("number");
        number --;
        Decreas.innerHTML =number;
    }else(
        alert("gameover")
    )
}

// Decrease
// Increase