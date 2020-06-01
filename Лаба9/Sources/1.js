new Vue({
    el: '#app',
    components: {
     VueGallerySlideshow
    },   
    data: {
      images: [
        'Resources/1.jpg',
        'Resources/2.jpg',
        'Resources/3.jpg',
        'Resources/4.jpg',
        'Resources/5.jpg',
        'Resources/6.jpg',
        'Resources/7.jpg',
        'Resources/8.jpg',
        'Resources/9.jpg',
        'Resources/10.jpg',
        'Resources/11.jpg',
        'Resources/12.jpg',
      ],
      index: null
    },
    methods: {
      add: function (event,t) {     
           
        this.images.splice(0,0,t.value)                               
      },
 
      remove: function (event,t) {      
        this.images.splice(0,1)
      },
    }    
  })

  var preload = document.createElement('div');

preload.className = "preloader";
preload.innerHTML = '<div class="b-ico-preloader"></div><div class="spinner"></div>';
document.body.appendChild(preload);

window.addEventListener('load', function() {
   preload.className +=  ' fade';
   setTimeout(function(){
     preload.style.display = 'none';
   },600);
})