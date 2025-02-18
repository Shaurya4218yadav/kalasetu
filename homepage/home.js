const loginbtn = document.getElementById("loginbtn");
const signupbtn = document.getElementById("signupbtn");
const optionBox = document.getElementById("optionBox");
const optionBoxClosebtn = document.getElementById("optionBoxClosebtn");
const sellerOptionButton=document.getElementById("sellerOptionButton");
const buyerOptionButton=document.getElementById("buyerOptionButton");

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
    sellerOptionButton.addEventListener("click",()=>{
        window.location.href='../SellerLoginPage/sellerLogin.html';
    });
    buyerOptionButton.addEventListener("click",()=>{
        window.location.href='../BuyerLoginPage/buyerLogin.html';
    });
})
signupbtn.addEventListener("click",()=>{
    optionBoxOpen();
    sellerOptionButton.addEventListener("click",()=>{
        window.location.href='../SellerSignupPage/sellerSignup.html';
    });
    buyerOptionButton.addEventListener("click",()=>{
        window.location.href='../BuyerSignupPage/buyerSignup.html';
    });
})
