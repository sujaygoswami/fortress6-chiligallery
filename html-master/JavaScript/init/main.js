jQuery(document).ready(function(){

    Fancybox.bind('[data-fancybox="gallery"]', {
        mainClass: "photoGallery",
        Toolbar: {
            display: {
              left: ["infobar"],
              middle: [],
              right: ["slideshow", "download", "thumbs", "close"],
            },
            items: {
                download: {
                    tpl: '<a class="f-button fancy-image-download-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
                  },
              },
          },
          on: {
            "*": (fancybox) => {
              // Current slide
            //   const slide = fancybox.getSlide();
        
              // The corresponding trigger element
              // (i.e. the link that is clicked to launch Fancybox)
            //   const triggerEl = slide.triggerEl;
        
              // Data from the trigger element
            //   const title = triggerEl.dataset.title;
        
            //   alert(title);
            
            var CONTENTWIDTH = jQuery('.fancybox__slide.is-selected .fancybox__content').width();
            console.log(CONTENTWIDTH);
            jQuery('.fancybox__toolbar').width(CONTENTWIDTH);


            },
          },
      });


    jQuery('.my-datepicker').each(function(){
        jQuery(this).datepicker({
            dateFormat: 'dd.mm.yy',
            monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
            dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag','Samstag'],
            dayNamesMin: ['So', 'Mo', 'Die', 'Mi', 'Do', 'Fre', 'Sa']
        });
    });

});

