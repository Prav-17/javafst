let user ={
    Name:"",
    Email:"",
    Age:"",
    Phone:"",
    Gender:""
}
document.getElementById("submit").addEventListener("click", submit);
function submit(){
// let user ={
//     Name:"",
//     Email:"",
//     Age:"",
//     Phone:"",
//     Gender:""
// }

let username=document.getElementById("name");
let email=document.getElementById("email");
let age=document.getElementById("Age");
let userphone=document.getElementById("phone");
let usergender=document.querySelector('input[type="radio"]:checked');
let message=document.getElementById("message");
// let greet=document.getElementById("welcome");
let flag=0;

if (username.value===""){
    flag++
    document.getElementById("errorname").innerHTML="*Name is required";
}
else{
    user.Name=username.value;
}

if (email.value===""){
    flag++
    document.getElementById("erroremail").innerHTML="*Email is required";
}
else{
    user.Email=email.value;
}
if (age.value===""){
    flag++
    document.getElementById("errorage").innerHTML="*Age is required";
}
else{
    user.Age=age.value;
}
if (userphone.value===""){
    flag++
    document.getElementById("errorphone").innerHTML="*Phone is required";
}
else{
    user.Phone=userphone.value;
}
if (!usergender){
    flag++
    document.getElementById("errorgender").innerHTML="*Gender is required";
}
else{
    user.Gender=usergender.value;
}
if(flag===0){
    // console.log(message.innerHTML);
    message.innerHTML="Submitted sucessfully";
    localStorage.setItem("userdata",user);
    document.getElementById("welcome").innerHTML =`Welcome ${user.Name}`

}
}
document.getElementById("reset").addEventListener("click",reset);

function reset(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("Age").value="";
    document.getElementById("phone").value="";
    document.querySelector('input[type="radio"]:checked').checked=false;
    document.getElementById("welcome").innerHTML =`Welcome New User`;
}