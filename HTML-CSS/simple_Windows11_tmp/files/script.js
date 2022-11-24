let touch=document.getElementsByClassName("sidebar")[0];
let taskbar=document.querySelector(".taskbar img");
let startmenu=document.querySelector(".startmenu img");
console.log(startmenu);



touch.addEventListener("click",()=>{
    
   if(startmenu.hidden==false)
   {
    startmenu.hidden=true;
    
   }else{
    startmenu.hidden=false;
    
   }
});