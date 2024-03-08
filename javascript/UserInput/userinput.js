let username;
document.getElementById("Submit").onclick = function(){ //null setting
    username = document.getElementById("Username").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`
}