setInterval(()=>{

    let time=new Date();
    let hourT=time.getHours();
    let minuteT=time.getMinutes();
    let secondT=time.getSeconds();
    let hourRotation=30*hourT+minuteT/2;
    let minuteRotation=6*minuteT;
    let secondRotation=6*secondT;

    let hourHand=document.querySelector('#hour');
    let minuteHand=document.querySelector('#minute');
    let secondHand =document.getElementById('#second');

    // hourHand.style.transform=`rotate(${hourRotation}deg)`;
    // minuteHand.style.transform=`rotate(${minuteRotation}deg)`;
    // secondHand.style.transform=`rotate(${secondRotation}deg)`;
    // console.log(hour+"-----"+minute+"----"+second);
    // console.log(hourRotation,minuteRotation,secondRotation);

    hour.style.transform=`rotate(${hourRotation}deg)`;
    minute.style.transform=`rotate(${minuteRotation}deg)`;
    second.style.transform=`rotate(${secondRotation}deg)`;


},1000);