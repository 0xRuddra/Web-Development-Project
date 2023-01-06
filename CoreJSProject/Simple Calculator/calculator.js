console.log("welcome to the calculator");
let buttons=document.querySelectorAll('.btn');
let screen=document.getElementById('screen');
function clearBg()
{
    Array.from(buttons).forEach((btn)=>{
        btn.style.backgroundColor=null;
        btn.style.color=null;
    })
}



let output=' ';


Array.from(buttons).forEach((btnn)=>{
    btnn.addEventListener('click',(e)=>{
       
        
        
        if(e.target.value=='='){
            
             let x=eval(output);
            screen.value=x;
            output='';
        }else if(e.target.value=='C')
        {
            output=' ';
            screen.value=output;
            e.target.style.backgroundColor="black";
            e.target.style.color="white";

        }else{
            e.target.style.backgroundColor="black";
            e.target.style.color="white";
             output+=e.target.value;
            screen.value=output;
            
        }
        setTimeout(clearBg,600);
        
       
        
        

    })
})