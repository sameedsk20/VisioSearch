const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");
const searchResult = document.getElementById("searchResult");
const showMoreButton = document.getElementById("showMoreButton");
const accessKey = "62ygmv2uYrc_kh44oSTPNiUoDZnB7SLRDY8wGGSMJ-4";


let keyword = "" ;
let page = 1 ;

async function searchImages(){

    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=9`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1){
        searchResult.innerHTML = "";
    }
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;

        imageLink.target="_blank"; // to display image in new tab
    
        imageLink.appendChild(image); //the image willl be inside "a" tag
    
        searchResult.appendChild(imageLink); //immageLink will be displayed in search result
    })

    //to display showMore
    showMoreButton.style.display = "block";
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreButton.addEventListener("click" , () => {
    page++
    searchImages();
} )

const body = document.querySelector('body');
function changeBg(){
    body.classList.add('active');
}