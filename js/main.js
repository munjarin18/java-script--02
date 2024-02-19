let one = document.querySelector(".one")
let start = document.querySelector(".start")
start.addEventListener("click",(e)=>{
if(one.type == "password"){
    one.type = "text"
    e.target.className = "fa-solid fa-eye" 
}else{
    one.type = "password"
    e.target.className = "fa-solid fa-eye-slash"
}
})
