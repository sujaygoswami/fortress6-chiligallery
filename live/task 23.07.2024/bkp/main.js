jQuery(document).ready(function(){
    jQuery('.per_page').change(function() {
        //alert(jQuery(this).val());
        if(jQuery(this).val()!='0'){
            window.location = jQuery(this).val();
        }
    });
    jQuery('#resetFilter').click(function(){
        jQuery("[name='tx_chilisiteeventscloudgallery_cdetail[search_text]']").val('');
        jQuery("[name='tx_chilisiteeventscloudgallery_cdetail[search_land]']").val('');
        jQuery("[name='tx_chilisiteeventscloudgallery_cdetail[search_year]']").val('');
        jQuery("[name='tx_chilisiteeventscloudgallery_cdetail[search_month]']").val('');
        jQuery("[name='tx_chilisiteeventscloudgallery_cdetail[search_fotagraf]']").val('');
        jQuery('#submitFilter').click();
    });

    jQuery('#resetCollectionFilter').click(function(){
        var formdata = jQuery(this).data('form');
        jQuery("[name='"+formdata+"[search_category]']").val('');
        jQuery("[name='"+formdata+"[search_text]']").val('');
        jQuery("[name='"+formdata+"[search_land]']").val('');
        jQuery("[name='"+formdata+"[search_year]']").val('');
        jQuery("[name='"+formdata+"[search_month]']").val('');
        jQuery("[name='"+formdata+"[search_fotagraf]']").val('');
        jQuery('#submitFilter').click();
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
jQuery(window).on('load',function(){

    Fancybox.bind('[data-fancybox="event-gallery"]', {
        mainClass: "photoGallery",
        Toolbar: {
            display: {
              left: ["infobar"],
              middle: [],
              right: ["slideshow", "download", "close"],
            },
          },
          Thumbs: false,
      });
});

function deleteGalerie(id){
    if (confirm("Are you sure you want to remove this record!") == true) {
        jQuery('#gallery_blog_'+id).remove();
    }
}
