const recipesContainer = document.querySelector(".blogs");
const loadmore = document.querySelector(".loadmore");
let currentPage = 0;


async function getBlogs(){
    currentPage++; 
    const url = `https://kingkitchen.pilusjin.site/wp-json/wp/v2/posts?per_page=10&page=${currentPage}`;
    try{
        const response = await fetch(url);
        const getBlogs = await response.json();
        console.log(getBlogs);
        const maxpages = response.headers.get("x-wp-totalpages");
        if (Number(maxpages) === currentPage) {
        loadmore.style.display = "none"; 
       
    }
 loading.style.display ="none";

        for (let i = 0; i < getBlogs.length; i++) {
            function createHTML(getBlogs){
            recipesContainer.innerHTML += `<div class="blogs-box"> 
            <img src="${getBlogs[i].better_featured_image.source_url}" class="image">
            <h2>${getBlogs[i].title.rendered}</h2>
            <a href="blogspecific.html?id=${getBlogs[i].id}"><button>Read more</button></a>
            </div>`;
}
createHTML(getBlogs);


    }

    loading.style.display = "none"; 

} catch(error){
console.log(error);
recipesContainer.innerHTML = `<div class="error">Ups! An error has occured</div>`;
}
}

getBlogs();

loadmore.addEventListener("click", getBlogs);
const loading = document.querySelector(".loading")
