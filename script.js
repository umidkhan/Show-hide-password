let show = document.querySelector('button');
let input = document.querySelector('input');

show.addEventListener('click', () => {
    
    if(input.type === 'password') {
        input.type = 'text';
        show.classList.add('active');
    } else {
        input.type = 'password';
        show.classList.remove('active');
    }
});

// var button = document.querySelector("button")
var oldVal = show.value
show.addEventListener('click', ()=>{
if(show.vulue == oldVal){
show.value = "Hide password"
}
else{
     show.value = oldVal
}
})


// let show = document.getElementsByClassName(".btn")
// let pwd = document.getElementsByClassName('.pass')

// show.addEventListener('click', (e) => {
//     e.alert("Show")
// })

// function Show () {
//     if (pwd = "password") {
//         pwd.type = "text"
//     }
//     else {
//         pwd.type = "password"
//     }
// }


// let loginPwdStatus = false;

// function changePwdView() {
//     let getLoginInput = document.getElementById("loginPwdChange");

//     if (getLoginInput === false) {
//         getLoginInput.setAttribute("type", "text")
//         loginPwdStatus = true;
//     } 
    
//     else if (getLoginInput === true) {
//         getLoginInput.setAttribute("type", "password")
//         loginPwdStatus = true;
//     }
// }