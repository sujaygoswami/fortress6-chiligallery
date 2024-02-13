jQuery(document).ready(function(){

    Fancybox.bind('[data-fancybox="gallery"]', {
        mainClass: "photoGallery",
        Toolbar: {
            display: {
              left: ["infobar"],
              middle: [],
              right: ["slideshow", "download", "thumbs", "close"],
            },
          },
      });

});

