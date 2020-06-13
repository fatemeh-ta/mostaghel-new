/*TOGGLE MENU*/
$(document).ready(function(){
    $(".menu-icon").click(function(){
      $(".menu-list").slideToggle();
    });
/*------------------START SUBMENU-------------------------------- */
    if (window.matchMedia('(max-width: 900px)').matches) {
      $(".political-submenu").click(function(){
        $(".sub-menu-political").slideToggle("slow");
      });
    
      $(".social-submenu").click(function(){
        $(".sub-menu-social").slideToggle("slow");
      });
    
      $(".economic-submenu").click(function(){
        $(".sub-menu-economic").slideToggle("slow");
      });
    
      $(".sport-submenu").click(function(){
        $(".sub-menu-sport").slideToggle("slow");
      });
    
      $(".culture-submenu").click(function(){
        $(".sub-menu-culture").slideToggle("slow");
      });
    
      $(".mutinews-submenu").click(function(){
        $(".sub-menu-mutinews").slideToggle("slow");
      });
    }
/*------------------END SUBMENU-------------------------------- */
    if ($('#slide-pic').length> 0) {
        $("#slide-pic").lightSlider({
            item: 1,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 10,
            useCSS: true,
            speed: 400, //ms'
            auto: false,
            loop: false,
            pause: 2000,
            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            rtl:false,
            pager: true,
            enableTouch:true,
            enableDrag:true,
        });
    };

    if ($('#photo-slide').length> 0) {
        $("#photo-slide").lightSlider({
            item: 1,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 10,
            useCSS: true,
            speed: 400, //ms'
            auto: false,
            loop: false,
            pause: 2000,
            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            rtl:false,
            pager: true,
            enableTouch:true,
            enableDrag:true,
        });
    };

    if ($('#slide-video').length> 0) {

        $("#slide-video").lightSlider({
            item: 1,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 10,
            useCSS: true,
            speed: 400, //ms'
            auto: false,
            loop: false,
            pause: 2000,
            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            rtl:false,
            pager: true,
            enableTouch:true,
            enableDrag:true,
        });
    };

    $ ('.tab-container:first').show();
        $ ('.tab-nevigation li:first').addClass('active');

        $ ('.tab-nevigation li').click(function(event) {
            index = $(this).index();
            $ ('.tab-nevigation li').removeClass('active');
            $ (this).addClass('active');
            $ ('.tab-container').hide();
            $ ('.tab-container').eq(index).show();
            });
});