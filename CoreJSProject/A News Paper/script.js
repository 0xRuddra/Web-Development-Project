console.log("hellow")

// Api key :6e6b1712078a42d79beb27687cbc8148 (website:https://newsapi.org/) you have to create your own api key
let apiKey = "6e6b1712078a42d79beb27687cbc8148";
let source = "in";



let url = `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`
let newsPortal = document.getElementById("newsPortal");
let newsContainer = "";


let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function () {
    if (this.status == 200) {
        
        let responseNews = JSON.parse(this.responseText);
        // console.log(responseNews);
        responseNews["articles"].forEach(function (element,index) {
            let news = ` 
            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
              <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
               <b>News-${index+1}</b>:&nbsp;${element.title}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              ${element.content}&nbsp<strong><a href="${element.url}" target='blank'>Read More</strong> </a>
              </div>
            </div>
          </div>
          </div>`;
            
            newsContainer+=news;
            //console.log(newsContainer);
        })
        newsPortal.innerHTML=newsContainer;
      
        
 


    } else {
        console.log("Error occured");
    }
   
}

xhr.send();







