let number =5;
window.addEventListener("onclick",start);
function start(){
    if(number){
        let Decreas =
        document.getElementById("number");
        number --;
        Decreas.innerHTML =number;
    }else if(number ==0){
        let message =
        document.getElementById("messagebox");
        message.style.display ="block"
    }else if(number ==0){
        document.getElementById("resets<").reset();
    }
}
// Decrease
// Increase