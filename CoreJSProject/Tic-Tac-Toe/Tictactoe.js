console.log("Welcome to the tic tac toe");
let markAudio=new Audio("ting.mp3");

let putMark = 'X';
let winCheck=false;

// turn change function
function changeTurn() {

    return putMark === 'X' ? 'o' : 'X';
}

// Reset the board
function Reset()
{
   let xArea=document.querySelectorAll('.markingArea');
   Array.from(xArea).forEach((e)=>{
    e.innerText=' ';
   })
   winCheck=false;
   document.getElementById('announcementArea').innerText=' ';
   document.querySelector('.img').style.visibility="hidden";

}

//check win function

const checkWin = () => {
   winCond=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
   ];
   let xArea=document.getElementsByClassName('markingArea');
   winCond.forEach((indx)=>{
    if((xArea[indx[0]].innerText==xArea[indx[1]].innerText) && (xArea[indx[1]].innerText==xArea[indx[2]].innerText) && xArea[indx[1]].innerText!='')
    {
            winCheck=true;
            document.getElementById('announcementArea').innerText=putMark+" Won the game";
            // document.querySelector('.img').style.height="50px";
            // document.querySelector('.img').style.width="50px";
            document.querySelector('.img').style.visibility="visible";

            setTimeout(()=>{
                Reset();
            },3000);
            
    }

   });
}

//logic for the game

    let boxes = document.getElementsByClassName('box');
    Array.from(boxes).forEach((element) => {
        //console.log(element);

        let xArea = element.querySelector(".markingArea");

        //console.log(xArea);
        // //eikhne element gola ek ekta box represent krtece r element er 
        //  vitorer span select krte element.queryselector(".turnV") lika lagche

        element.addEventListener('click', () => {
           
            if (xArea.innerText === '') {
                xArea.innerText = putMark;
                markAudio.play();
                checkWin();
                putMark = changeTurn();
                if(!winCheck)
                {
                    document.getElementById("poster").innerText = "Turn for the "+putMark;

                }
                
            } 
        });




    });


//reset the game

let restBtn=document.getElementById("reset");
restBtn.addEventListener('click',()=>{
    markAudio.play();
    Reset();
});