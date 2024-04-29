let msg=document.getElementById("msg");
let warn=document.getElementById("warning");
let count=0;
document.getElementById("dec").addEventListener("click",()=>{
if(count==1){
    document.getElementById("clear").style.display="none";
}
if(count==0){
warn.innerHTML=`Error: Cannot go below 0`;
}
else{
    count--;
msg.innerHTML=`Your Current Count is:<b>${count}</b>`;}
});
document.getElementById("inc").addEventListener("click",()=>{
    count++;
    warn.innerHTML=``;
msg.innerHTML=`Your Current Count is:<b>${count}</b>`;
document.getElementById("clear").style.display="block";
});
document.getElementById("clear").addEventListener("click",()=>{
    count=0;
    document.getElementById("clear").style.display="none";
    msg.innerHTML=`Your Current Count is:<b>${count}</b>`;
});
