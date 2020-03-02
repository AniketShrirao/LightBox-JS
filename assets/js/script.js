/* Author: Aniket*/

function LightBoxfunc() {

  var html = document.querySelector('html');
  var Posts = document.querySelectorAll('.posts li');
  var Lightbox = document.querySelector('.LightBox');
  var imageinsideLightbox = document.querySelector('.LightBox img');
  var close = document.createElement('span');
  var postarray = Array.from(Posts);

  Lightbox.classList.add('class','hidden');
  Lightbox.appendChild(close);
  close.classList.add('close');
  for (var post in postarray) {
    postarray[post].addEventListener('click',lightbox);
  }

  function lightbox(){
    var figcaption = Lightbox.children[0].children[1];
    var currentImg = this.children[0].children[0];
    var url = currentImg.src; 

    html.classList.add('class','noscroll');
    Lightbox.classList.remove('class','hidden');
    Lightbox.classList.add('class','visible');

    imageinsideLightbox.setAttribute('src',url);
    figcaption.classList.add('class','figureText');
    figcaption.innerHTML = this.innerText;
  };

  close.addEventListener('click', function(){
    Lightbox.classList.remove('class','visible');
    Lightbox.classList.add('class','hidden');
    html.classList.remove('class','noscroll');
  });
}

LightBoxfunc();