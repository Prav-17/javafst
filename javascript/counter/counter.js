const inc=document.getElementById("inc");
const dec=document.getElementById("dec");
const reset=document.getElementById("reset");
const countdis= document.getElementById("countdis");

let count=0;
inc.onclick=function(){
    count++
    countdis.textContent=count;
}
console.log(inc.onclick);
dec.onclick=function(){
    count--
    countdis.textContent=count;
}
console.log(dec.onclick);
// reset.onclick=function(){
//     count=0;
//     countdis.textContent=count;
// }
dec.mouse
reset.addEventListener("click",function(event){
    count=0;
    countdis.textContent=count;
})
console.log(reset.click);