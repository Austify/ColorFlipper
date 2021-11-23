const hexComponents = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector("#hexClick");
let randomIndex = 0;
function hexBgChange(){
    let hexColor = "#";
    for(let i = 0; i < 6 ; i++){
        randomIndex = Math.floor(Math.random()* hexComponents.length);
        hexColor += hexComponents[randomIndex];
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
}
hexBtn.addEventListener("click",hexBgChange);