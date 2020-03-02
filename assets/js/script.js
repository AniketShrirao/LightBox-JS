/* Author: Aniket*/

var postUl = document.querySelector('.posts');
var Posts = document.querySelectorAll('.posts li');
var Lightbox = document.querySelector('.LightBox');
var imageinsideLightbox = document.querySelector('.LightBox img');
var close = document.createElement('span');
var postarray = Array.from(Posts);

Lightbox.appendChild(close);
close.classList.add('close');
var i = 0;
for (var post in postarray) {
  postarray[i].addEventListener('click',lightbox);
  i++;
}

function lightbox(){
  debugger;
  var figcaption = Lightbox.children[0].children[1];
  var currentImg = this.children[0].children[0];
  var url = currentImg.src; 

  Lightbox.classList.add('visible');
  imageinsideLightbox.setAttribute('src',url);
  figcaption.classList.add('class','figureText');
  figcaption.innerHTML = this.innerText;
};

close.addEventListener('click', function(){
  Lightbox.classList.add('class','hidden');
});