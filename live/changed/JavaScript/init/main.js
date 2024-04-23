jQuery(document).ready(function(){
    jQuery('.per_page').change(function() {
        //alert(jQuery(this).val());
        if(jQuery(this).val()!='0'){
            window.location = jQuery(this).val();
        }
    });
    
    jQuery('#galleryForm').submit(function(e) {
        jQuery('#galleryForm .form-control').removeClass('border-danger');
        jQuery('#galleryForm .required-error').remove();
        var submit_form = true;
        jQuery('#galleryForm .chili_required').each(function(){
			if(jQuery(this).val() == ''){
                jQuery(this).addClass('border-danger');
                jQuery(this).parent().after('<div class="alert alert-danger p-1 fs-6 required-error" role="alert">'+jQuery(this).data('required')+'</div>')
				submit_form = false;
			}
		});
        if(!submit_form){
            e.preventDefault();
        }
});




// jQuery(".fancybox-gallary").fancybox({
//     closeExisting: false,
//     keyboard    : true,
//     loop        : true,
//     gutter: 50,
//     margin : [44,0,22,0],
//     buttons: [
//       "zoom",
//       "fullScreen",
//       "download",
//       "thumbs",
//       "close"
//     ],
//     thumbs: { autoStart: true, hideOnClose: true, axis: 'x'}
//   });


    // jQuery('[data-fancybox="gallery"]').fancybox({
    //     baseClass: "photoGallery",
    // });

    // Fancybox.bind('[data-fancybox="gallery"]', {
    //     baseClass: "photoGallery",
    //     Toolbar: {
    //         display: {
    //           left: ["infobar"],
    //           middle: [],
    //           right: ["slideshow", "download", "thumbs", "close"],
    //         },
    //       },
    //   });

      jQuery('#newGalleryBtn button').click(function(){
        var urlAjax = jQuery('#newGaleryForm').attr('action');
        jQuery.ajax({
            url: urlAjax,
            type: 'post',
            data:{},
            beforeSend: function() {},
            success: function(data){
                jQuery('#newGalleryBtn').before(data.html);

                jQuery('.my-datepicker').each(function(){
                    jQuery(this).datepicker({
                        dateFormat: 'dd.mm.yy',
                        monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
                        dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag','Samstag'],
                        dayNamesMin: ['So', 'Mo', 'Die', 'Mi', 'Do', 'Fre', 'Sa']
                    });
                });

            },
            complete:function(data){}
        });

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
function deleteGalerie(id){
    if (confirm("Are you sure you want to remove this record!") == true) {
        jQuery('#gallery_blog_'+id).remove();
    }
}
