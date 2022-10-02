const blogContainer = document.querySelector(".blogpost");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://kingkitchen.pilusjin.site/wp-json/wp/v2/posts/" + id;

console.log(url);


async function specific() {

    try {
        const response = await fetch(url); 
        const spe = await response.json();

        console.log(spe);

        loading.style.display ="none";

        newPageTitle = spe.title.rendered;
        document.title = newPageTitle;

        console.log(spe.id);

        blogContainer.innerHTML += "";

        blogContainer.innerHTML += `<div class="section"> 
            <h1>${spe.title.rendered}</h1>
            <div class="container1">
            <img src="${spe.better_featured_image.source_url}" style="max-width:100%;cursor:pointer"
            onclick="onClick(this)" class="modal-hover-opacity larger-image"></div>
            <div id="modal01" class="modal" onclick="this.style.display='none'">
            <span class="close">&times;&nbsp;&nbsp;&nbsp;</span>
            <div class="modal-content">
                    <img id="img01" style="max-width:100%">
                </div>
            </div>
            <p>${spe.content.rendered}</p>
                </div>`;

    } catch(error) {
        
        blogContainer.innerHTML = `<div class="error">Ups! An error has occured.</div>`;
}

}
specific();


/* Image modal */ 

function onClick(element) {
document.getElementById("img01").src = element.src;
document.getElementById("modal01").style.display = "block";
}
const loading = document.querySelector(".loading")