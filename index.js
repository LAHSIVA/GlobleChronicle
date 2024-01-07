
function getNews(country,category)
{

    document.getElementById("news").innerHTML="";

    // Display loading spinner while fetching news
    const loadingSpinner = document.createElement("div");
    loadingSpinner.classList.add("loading-spinner");
    document.getElementById("news").appendChild(loadingSpinner);


    fetch("https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=81eef6da248b40e586b9dc0ed44e7533")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        
        let news=data.articles;
        console.log(news);

         // Remove loading spinner once news data is fetched
         document.getElementById("news").removeChild(loadingSpinner);
    
        news.forEach((n,index)=>{

            // news card div 
            let newsCard=document.createElement("div");
            newsCard.classList.add("news_card");

            // news img div 
            let newsImg=document.createElement("div");
            newsImg.classList.add("news_img")

            // article img 
            let img=document.createElement("img");
            img.setAttribute("src",n.urlToImage);

            // adding img in news img div 
            newsImg.appendChild(img);

            // news details div 
            let newsDetails=document.createElement("div");
            newsDetails.classList.add("news_details");

            // title h1 
            let title=document.createElement("h1");
            title.classList.add("title");
            title.append(n.title);

            // author p 
            let author=document.createElement("p");
            author.classList.add("author");
            author.append(n.author);

            // content p 
            let content=document.createElement("p");
            content.classList.add("content");
            content.append(n.description);

            let link=document.createElement("a");
            link.setAttribute("href",n.url);
            link.setAttribute("target","blank");

            // button read 
            let button=document.createElement("button");
            button.classList.add("btn");
            button.append("Read Full Article")

            // adding button in link 
            link.appendChild(button);

            // adding content in news details 
            newsDetails.appendChild(title);
            newsDetails.appendChild(author);
            newsDetails.appendChild(content);
            newsDetails.appendChild(link);

            // addind news img and news details to card 

            newsCard.appendChild(newsImg);
            newsCard.appendChild(newsDetails);


            document.getElementById("news").appendChild(newsCard);


        })


    })
    .catch((err)=>{
        console.log(err);
        // Remove loading spinner in case of an error
        document.getElementById("news").removeChild(loadingSpinner);
    })

    // Fetch weather data after fetching news
    getWeather(country);


}


getNews("in","business");

function search()
{

    let country=document.getElementById("country").value;
    let category=document.getElementById("category").value;

    getNews(country,category);
    

}