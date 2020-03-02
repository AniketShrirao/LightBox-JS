/* Author: Aniket*/

var postUl = document.querySelector('.posts');
var Posts = document.querySelectorAll('.posts li');
var Lightbox = document.querySelector('.LightBox');
var imageinsideLightbox = document.querySelector('.LightBox img');
var close = document.createElement('span');
var postarray = Array.from(Posts);

Lightbox.appendChild(close);
close.classList.add('close');

for (var post in postarray) {
  postarray[post].addEventListener('click',lightbox);
}

function lightbox(){
  debugger;
  var figcaption = Lightbox.children[0].children[1];
  var currentImg = this.children[0].children[0];
  var url = currentImg.src; 

  Lightbox.classList.add('display');
  imageinsideLightbox.setAttribute('src',url);
  figcaption.classList.add('figureText');
  figcaption.innerHTML = this.innerText;
};

close.addEventListener('click', function(){
  Lightbox.classList.add('none');
});