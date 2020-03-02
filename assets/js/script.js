/* Author: Aniket*/

function LightBoxfunc() {

  var postUl = document.querySelector('.posts');
  var Posts = document.querySelectorAll('.posts li');
  var Lightbox = document.querySelector('.LightBox');
  var imageinsideLightbox = document.querySelector('.LightBox img');
  var close = document.createElement('span');
  var postarray = Array.from(Posts);
  var i = 0;

  Lightbox.classList.add('class','hidden');
  Lightbox.appendChild(close);
  close.classList.add('close');
  for (var post in postarray) {
    postarray[i].addEventListener('click',lightbox);
    i++;
  }

  function lightbox(){
    var html = document.querySelector('html');
    var figcaption = Lightbox.children[0].children[1];
    var currentImg = this.children[0].children[0];
    var url = currentImg.src; 

    html.add('class','noscroll');
    Lightbox.classList.remove('class','hidden');
    Lightbox.classList.add('class','visible');

    imageinsideLightbox.setAttribute('src',url);
    figcaption.classList.add('class','figureText');
    figcaption.innerHTML = this.innerText;
  };

  close.addEventListener('click', function(){
    Lightbox.classList.remove('class','visible');
    Lightbox.classList.add('class','hidden');
  });
}

LightBoxfunc();