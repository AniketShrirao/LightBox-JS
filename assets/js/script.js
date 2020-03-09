/* Author: Aniket*/

// Get Elements Required for LightBox
var html = document.querySelector('html');
var Posts = document.querySelectorAll('.posts li');
var Lightbox = document.querySelector('.LightBox');
var imageinsideLightbox = document.querySelector('.LightBox img');
var close = document.createElement('span');

// LightBox Function started
function LightBox(html,Posts,Lightbox,imageinsideLightbox,close) {
  // Hide LightBox At First
  var postarray = Array.from(Posts);
  Lightbox.classList.add('class','hidden');
  // Append Close Button to the LightBox Dynamically
  Lightbox.appendChild(close);
  close.classList.add('close');
  // Add click function to every post
  for (var post in postarray) {
    postarray[post].addEventListener('click',openlightbox);
  }

  // openlightbox Function started
  function openlightbox(){
    // Get Current image/Post & source on click
    var figcaption = Lightbox.children[0].children[1];
    var currentImg = this.children[0].children[0];
    var url = currentImg.src; 

    // stop background scroll
    html.classList.add('noscroll');
    Lightbox.classList.remove('hidden');
    // make Lightbox appear
    Lightbox.classList.add('visible');
    // add current image path to lightbox image 
    imageinsideLightbox.setAttribute('src',url);
    // replicate the figcation of clicked post
    figcaption.classList.add('figureText');
    figcaption.innerHTML = this.innerText;
  };
  // Close LightBox Function
  function closeLightbox(){
    Lightbox.classList.remove('visible');
    Lightbox.classList.add('hidden');
    html.classList.remove('noscroll');
  };
  // Calling close Lightbox function on close button click 
  close.addEventListener('click',closeLightbox);
  // Calling close Lightbox function on Background of lightbox click
  Lightbox.addEventListener('click',function(e){
    if (e.target.classList.contains("LightBox")) {
      Lightbox.classList.add('hidden');
      html.classList.remove('noscroll');
    }
  });
}
// Calling LightBox Function
LightBox(html,Posts,Lightbox,imageinsideLightbox,close);