var imageList=['Resources/1.jpg' ,'Resources/2.jpg','Resources/3.jpg','Resources/4.jpg',
'Resources/5.jpg','Resources/6.jpg','Resources/7.jpg','Resources/8.jpg','Resources/9.jpg','Resources/10.jpg','Resources/12.jpg','Resources/11.jpg'];
var  bigImage =document.createElement('img');
var  pic =document.getElementById("list");


window.onload = function() {
  var largePicture = document.querySelector('.image-container')
  
  // Load large image
  var imgLarge = new Image();
  imgLarge.src = largePicture.dataset.large; 
  imgLarge.onload = function () {
    imgLarge.classList.add('loaded');  
  };
    imgLarge.classList.add('picture');
  largePicture.appendChild(imgLarge);
}

function MakeImg(){  
    for(let i=0;i<imageList.length;i++)
    {
        let img =document.createElement('img');
        img.className='rot';
        img.src=imageList[0];
        conteiner.append(img);
        setTimeout(function(){img.src=imageList[i];
        img.className='';
        img.style.width='300px';
        img.style.height='400px';
    
    });
}}
MakeImg();
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

