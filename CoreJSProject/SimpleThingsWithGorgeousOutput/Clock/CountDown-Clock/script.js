console.log("addes js");

function countdown()
{
    let now=new Date();
    let eventDate=new Date(2022,11,29);
    let currenTime=now.getTime();
    let eventTime=eventDate.getTime();
   // console.log(eventDate.getDate()+" " +eventDate.getDay());

    //console.log(now.getDate()+" " +now.getDay());
    let remainingTime=eventTime-currenTime;
   // console.log(remainingTime);

    let s=Math.floor(remainingTime/1000);
    let m=Math.floor(s/60);
    let h=Math.floor(m/60);
    let d=Math.floor(h/24);
    
    h%=24;
    m%=60;
    s%=60;

    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(m>10)? s:"0"+s;

    let day=document.getElementById("days");
    let hour=document.getElementById("hours");
    let minute=document.getElementById("minutes");
    let sec=document.getElementById("seconds");

    day.innerText=d;
    hour.innerText=h;
    minute.innerText=m;
    sec.innerText=s;   
}



setInterval(countdown,1000);