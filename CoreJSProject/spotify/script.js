console.log("Welcome to the soptify");
let songIndex;

//selecting the icons
let playIcons=document.querySelectorAll(".icons img");
let playButton=playIcons[1];
let forwardButton=playIcons[2];
let backwardButton=playIcons[0];
let gif=document.getElementById("gif");
let songItemGif=document.getElementsByClassName('songItemgif');
let progressBar=document.getElementById("progressBar");
let songItems=document.getElementsByClassName('songItem');
let allSongPlayButton=document.getElementsByClassName('songPlayImg');
let songTitleName=document.getElementById('songTitleName');




//Variables

let audioElement=new Audio('songs/1.mp3');

//audioElement.play();
let songList=[
    {songName:"Song-1",filePath:"songs/1.mp3",cover:"covers/1.jpg"},
    {songName:"Song-2",filePath:"songs/2.mp3",cover:"covers/2.jpg"},
    {songName:"Song-3",filePath:"songs/3.mp3",cover:"covers/3.jpg"},
    {songName:"Song-4",filePath:"songs/4.mp3",cover:"covers/4.jpg"},
    {songName:"Song-5",filePath:"songs/5.mp3",cover:"covers/5.jpg"},
    {songName:"Song-6",filePath:"songs/6.mp3",cover:"covers/6.jpg"},
    {songName:"Song-7",filePath:"songs/7.mp3",cover:"covers/7.jpg"},
    {songName:"Song-8",filePath:"songs/8.mp3",cover:"covers/8.jpg"},
    {songName:"Song-9",filePath:"songs/9.mp3",cover:"covers/9.jpg"},
    {songName:"Song-10",filePath:"songs/10.mp3",cover:"covers/10.jpg"}
]

songTitleName.innerHTML='';

Array.from(songItems).forEach((Element,i)=>{
    let Elimg=Element.getElementsByTagName('img');
    let Elsngtxt=Element.getElementsByTagName('span');

   

    Elimg[0].src=songList[i].cover;
    Elsngtxt[0].innerText=songList[i].songName;


    plySong(i);


   // console.log(Elimg[2]);

    
});

// [ eikne ekta note ache amra kono kico select kre oitar vitorer kico jodi classname diye select kori thole hoi na . karn ei classname diye
// sudu ei element er kono item selected na onno element er item o thake eijono]


function plySong(indx)
{
    
    songItems[indx].getElementsByTagName('img')[1].addEventListener('click',(icons)=>{
       // console.log(songItems[indx]);
        audioElement.src=songList[indx].filePath;
        audioElement.currentTime=0;
        songTitleName.innerHTML=songList[indx].songName;
        audioElement.play();
        
       
        songItems[indx].getElementsByTagName('img')[2].style.opacity=1;
        //console.log(songItems[indx].getElementsByTagName('span')[2].innerText);
        let x=parseInt(audioElement.currentTime);
        console.log(x);
       // songItems[indx].getElementsByTagName('span')[2].innerText=x;

        songIndex=indx;
    })

    //console.log(songItems[indx].getElementsByTagName('span')[2].innerText);

}

function songListedGif2(sIndx){
    songItems[sIndx].getElementsByTagName('img')[2].style.opacity=0;
}

function songListedGif1(sIndx){
    songItems[sIndx].getElementsByTagName('img')[2].style.opacity=1;
}

//[joknoi amra html collection niye kaj krbo tkni amder array.from() function use kra lgbo but sudu ekta html collection use hole 
// array.from() use kra lge na.]

//Listening Event
playButton.addEventListener('click',()=>{
   // console.log("playbutton");
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
        songListedGif1(songIndex);
    }else{
        audioElement.pause();
        Array.from(songItemGif).forEach((item)=>{
                item.style.opacity=0;
        })
        gif.style.opacity=0;
        songListedGif2(songIndex);

    }
    
})


audioElement.addEventListener('timeupdate',()=>{
   // console.log("timing ");
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;

});

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=parseInt((progressBar.value*audioElement.duration)/100);

})




 forwardButton.addEventListener('click',()=>{
    songIndex++;
    plySong(songIndex);


 })  
 
 backwardButton.addEventListener('click',()=>{
    console.log('pre');
 })  
 