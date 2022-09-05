
var x= document.getElementById("login");
var y=document.getElementById("register");
var z= document.getElementById("btn");
let userBtn =document.getElementById("user-btn");
let userIcon =document.getElementById("user-icon");
let modal =document.getElementById("myModal");
//login
let usernameLog =document.querySelector("#name-login");
let passwordLog = document.querySelector("#pass-login");
let login_btn =document.querySelector("#btn-login");
let getUser = localStorage.getItem("username");
let getpassword =localStorage.getItem("password");
//register
let usernameReg = document.querySelector("#name-reg")
let emailReg =document.querySelector("#email-reg")
let passwordReg = document.querySelector("#pass-reg")
let register_btn =document.querySelector("#btn-reg")


function registerSide(){

    x.style.left ="-400px";
    y.style.left = "50px";
    
    z.style.left ="110px";
}
function loginSide(){
    x.style.left ="50px";
    y.style.left = "450px";
    z.style.left ="0px";
}

//login
login_btn.addEventListener("click",function(e){
    e.preventDefault()
    if(usernameLog.value === "" || passwordLog.value === ""){
        alert("please enter data")
    }else{
        if(getUser&&getUser.trim() === usernameLog.value.trim()&&getpassword&&getpassword === passwordLog.value){
            console.log("hellllllllllllo")
             
            userIcon.style.display='none'
            userBtn.innerHTML= "Welcome "+ getUser
           
           setTimeout(function() {
            $('#myModal').modal('hide');
           },1500)
      
        }else{
            alert("username or password is wrong")
        }
    }

})

//register
register_btn.addEventListener("click",function(e){
    console.log("done");
    e.preventDefault();
    if(usernameReg.value ===""|| emailReg.value ===""|| passwordReg.value ===""){
        alert("please fill data")
    }else{
        localStorage.setItem("username",usernameReg.value)
        localStorage.setItem("email",emailReg.value)
        localStorage.setItem("password",passwordReg.value)
        setTimeout( () =>{
            loginSide();
        },1500)
    }

} )

/////////////////////////////////////////////////////////////////////////////
function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}




const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
    
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
// const clear = document.querySelector('.clearCart');
// clear.addEventListener('click', clearCart);
closeShopCart.addEventListener('click', closeCart);

overlay.addEventListener('click', closeCart);