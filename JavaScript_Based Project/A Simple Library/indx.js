Bookcounter=0;
function BookFormat(name,author,type)
{
    this.name=name;
    this.author=author;
    this.type=type;
}

function BookTable(){};

BookTable.prototype.ADD=function(book)
{
    //Bookcounter++;
 //   localStorage.setItem(Bookcounter,JSON.stringify(book));
   // let lbook=JSON.parse(localStorage.getItem(Bookcounter));
   
    tableBody=document.getElementById('tbody');
    console.log("Adding the book");
    
       
        let  template=`
        <tr>
                <th scope="row">1</th>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
            </tr>

`;

tableBody.innerHTML+=template;


    
    
   
    

}
BookTable.prototype.clr=function()
{
    let BookForm=document.getElementById("bookForm");
    BookForm.reset();
}
function validate(book)
{
    if((book.name.length<2)||(book.author.length<2)||(book.type.length<2))
    {return false;
    }else{
        return true;
    }
}
BookTable.prototype.show=function(x)
{
    if(x==1)
    {
        let msg=document.getElementById('msg1');
        msg.hidden=false;
        setTimeout(function()
        {
            msg.hidden=true;
        },2000);

    }else{
        let msg=document.getElementById('msg2');
        msg.hidden=false;
        setTimeout(()=>{
            msg.hidden=true;
        },2000);
    }
 
}







//Adding book to the table
let BookForm=document.getElementById("bookForm");
BookForm.addEventListener("submit",BookSubmit);

function BookSubmit(e)
{
    e.preventDefault();
    console.log("you have submitted");
    let BookName=document.getElementById('bookName').value;
    let BookAuthor=document.getElementById('bookAuthor').value;
    let BookType='';
    let ScienceFiction=document.getElementById('scienceFiction');
    let Programming =document.getElementById('programming');
    let Hacking=document.getElementById('hacking');
    if(ScienceFiction.checked){
        BookType=ScienceFiction.value;
    }else if(Programming.checked)
    {
        BookType=Programming.value;
    }else{
        BookType=Hacking.value;
    }

    let Book=new BookFormat(BookName,BookAuthor,BookType);
    console.log(Book);
   
    if(validate(Book)){

        BookTable.prototype.ADD(Book);
        BookTable.prototype.show(1);
        
    }else{
        BookTable.prototype.show(2);
    }
   

   

}