const recipesContainer = document.querySelector(".recipes");
const loadmore = document.querySelector(".loadmore");
let currentPage = 0;


async function getRecipes(){
    currentPage++; 
    const url = `https://kingkitchen.pilusjin.site/wp-json/wp/v2/posts?per_page=10&page=${currentPage}`;
    try{
        const response = await fetch(url);
        const getRecipes = await response.json();
        console.log(getRecipes);
        const maxpages = response.headers.get("x-wp-totalpages");
        if (Number(maxpages) === currentPage) {
        loadmore.style.display = "none"; 
       
    }
 loading.style.display ="none";

        for (let i = 0; i < getRecipes.length; i++) {
            function createHTML(getRecipes){
            recipesContainer.innerHTML += `<div class="recipes-box"> 
                <img src="${getRecipes[i].better_featured_image.source_url}" class="image">
                <h2>${getRecipes[i].title.rendered}</h2>
                <a href="blogspecific.html?id=${getRecipes[i].id}"><button>Read more</button></a>
                </div>`;
}
createHTML(getRecipes);


}
} catch(error){
console.log(error);
recipesContainer.innerHTML = `<div class="error">Ups! An error has occured</div>`;
}
}

getRecipes();

loadmore.addEventListener("click", getRecipes);
const loading = document.querySelector(".loading")
