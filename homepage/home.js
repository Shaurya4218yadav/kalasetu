const loginbtn = document.getElementById("loginbtn");
const signupbtn = document.getElementById("signupbtn");
const optionBox = document.getElementById("optionBox");
const optionBoxClosebtn = document.getElementById("optionBoxClosebtn");


function optionBoxOpen() {
    optionBox.style.display = 'block';
}
function optionBoxClose() {
    optionBox.style.display = 'none';
}
optionBoxClosebtn.addEventListener("click",() => {
    optionBoxClose();
})
loginbtn.addEventListener("click",()=>{
    optionBoxOpen();
})
signupbtn.addEventListener("click",()=>{
    optionBoxOpen();
})