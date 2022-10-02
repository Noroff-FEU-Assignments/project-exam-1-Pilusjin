const url = "https://kingkitchen.pilusjin.site/wp-json/wp/v2/posts?per_page=100";
const carouselContainer = document.querySelector(".slideshow-container");

    async function latestBlogs(){
      try{
      const response = await fetch(url);
      const latestBlogs = await response.json();
      console.log(latestBlogs);

      for (let i = 0; i < 5; i++) {
          function createHTML(posts) {
              carouselContainer.innerHTML += `<div class="mySlides fade">
              <img src="${latestBlogs[i].better_featured_image.source_url}" alt="" style="width:100%" class="car-image">
              </div> 
              <a class="prev" onclick="plussBlogs(-1)">&#10094;</a>
              <a class="next" onclick="plussBlogs(1)">&#10095;</a>`
            }

createHTML(latestBlogs);



}
loading.style.display = "none"; 
} catch(error){
  console.log(error);
  carouselContainer.innerHTML = `<div class="error">Ups! An error has occured</div>`;
  }

showLatestblogs(slideIndex);

}

latestBlogs();

function plussBlogs (n) {
    showLatestblogs((slideIndex += n));
}

let slideIndex = 1;

    function showLatestblogs(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");

      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      }

      slides[slideIndex-1].style.display = "block";

  }
  const loading = document.querySelector(".loading")