console.log("This is A good Boy");
//https://newsapi.org/v2/top-headlines?country=in&apiKey=3029d28048bb433f96d1c7aed2507230
//grab the news container
//margin-left: 10%; margin-right: 10%;  margin-bottom: 10%;

// sport news Api :  https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3029d28048bb433f96d1c7aed2507230

//business news Api:https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3029d28048bb433f96d1c7aed2507230

// Enter taiment api:https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3029d28048bb433f96d1c7aed2507230
//helth api:https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=3029d28048bb433f96d1c7aed2507230



let button =Array.from(document.getElementsByClassName('butt'));


let newsAccordian = document.getElementById('newsAccordian');





        

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3029d28048bb433f96d1c7aed2507230`, true);

xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newshtml = "";
        articles.forEach(function (element, index) {


            let news = `
               <div class="row justify-content-start"" id="card" style="margin:1% ">
               <div class="card" id="newsAccordian" style=" width: 25rem; ">
               <img src="${element.urlToImage}" class="card-img-top" alt="${element.title}">
               <div class="card-body " style=" width:20rem;">
              <h3 class="card-title"><h6>${element.title}</b></h6> </h3>
              <div class="accordion-body">
              ${element.content}.<a href="${element.url}" target="_blank">read more here</a>
              
           </div>
             
          </div>
          </div>
          </div>`;
            newshtml += news;
        });
        newsAccordian.innerHTML = newshtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send();

 button.forEach((element) => {
   
    element.addEventListener('click', () => {
        
        source = element.id;

        xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${source}&apiKey=3029d28048bb433f96d1c7aed2507230`, true);

        xhr.onload = function () {
            if (this.status === 200) {

                let json = JSON.parse(this.responseText);
                let articles = json.articles;
                let newshtml = "";
                articles.forEach(function (element, index) {


                    let news = `
                       <div class="row" id="card">
                       <div class="card  " id="newsAccordian" style="width: 18rem; margin:10% 10% 10% 10% ">
                       <img src="${element.urlToImage}" class="card-img-top" alt="...">
                       <div class="card-body">
                      <h3 class="card-title"><h6>${element.title}</b></h6> </h3>
                      <div class="accordion-body">
                      ${element.content}.<a href="${element.url}" target="_blank">read more here</a>
                   </div>
                     
                  </div>
                  </div>
                  </div>`;
                    newshtml += news;
                });
                newsAccordian.innerHTML = newshtml;
            }
            else {
                console.log("Some error occured")
            }
        }
        xhr.send();
    })
})

