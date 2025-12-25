(function($) {
    "use strict";
    $(".mobile-toggle").click(function(){
        $(".nav-menus").toggleClass("open");
    });
    $(".mobile-search").click(function(){
        $(".form-control-plaintext").toggleClass("open");
    });
    $(".form-control-plaintext").keyup(function(e){
        if(e.target.value) {
            $("body").addClass("offcanvas");
            } else {
            $("body").removeClass("offcanvas");
        }
    });
})(jQuery);

$('.loader-wrapper').fadeOut('slow', function() {
    $(this).remove();
});

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 600) {
        $('.tap-top').fadeIn();
        } else {
        $('.tap-top').fadeOut();
    }
});
$('.tap-top').click( function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

var counter = 1;
function next_slide() 
{ 
	$('.content').hide();
    counter++;
	$('#content-'+counter+'').show();
    $('#content-'+counter+'').addClass('slide_show');
	if(counter > 1) 
    {
		$('.back').show();
    };
	if(counter == 3) {
		$('.next').hide();
    };
    $.cookie('slide_id',counter);
    $('#page_no').val(counter);
	for(i=1;i<=15;i++)
	{
		$('#img-preview-parent-'+i).slick('slickUnfilter');
	}
};

function back_slide() 
{ 
    var ids = counter;   
    
    $('#content-'+ids+'').removeClass('slide_show');
    // alert(counter);
    counter--;
    $('.content').hide();
    var id = counter;    
	$('#content-'+id).show();
    $.cookie('slide_id',id);
    
    if(counter<2)
    {
        $('.back').hide();
    }
    else
    {
        $('.next').show();
    }
    $('#page_no').val(id);
	for(i=1;i<=15;i++)
	{
		$('#img-preview-parent-'+i).slick('slickUnfilter');
	}
}
document.getElementById('ctr').addEventListener('fullscreenchange', (event) => {
    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If not, the value
    // of the property is null.
    if (document.fullscreenElement) {
        var val = '1';
        $('#delay_times').hide();
        $('#title_color_ctr').hide();
        $('#label_color_ctr').hide();
        $('#price_color_ctr').hide();
        $('#heading_color_ctr').hide();
        $('#back_color_ctr').hide();
        responsive(val);
        showSlides();
    } 
    else 
    {
        $("#ctr").css('max-width', '');
        $("#ctr").css('max-height', '');
        var val = '0';
        $('#delay_times').show();
        $('#title_color_ctr').show();
        $('#label_color_ctr').show();
        $('#price_color_ctr').show();
        $('#heading_color_ctr').show();
        $('#back_color_ctr').show();
        responsive(val);
        myStopFunction();
        
    }
	
});

document.getElementById('viewfullscreen').addEventListener('click', (event) => {
    if (document.fullscreenElement) {
        // exitFullscreen is only available on the Document object.
        document.exitFullscreen();
        } else {
        document.getElementById('ctr').requestFullscreen();
    }
});

function responsive(val)
{
    
    if(val == '1')
    {
        if ((window.screen.width) >= '1820' && (window.screen.width) <= '1920') 
        {

            // **
            $(".bg_1").css({'width': '752px','height': '813px', 'top': '-97px', 'left': '-66px'});
            $(".heading").css({'width': '97%','margin-bottom': '20px'});
            $("#head_1").css({'margin-left': '70px'});
            $(".htilr").css({'font-size': '60px'});
            $(".menu_items_single input").css({'font-size': '25px'});
            $(".price-box-wapper").css({'gap': '30px'});
            $(".single-price").css({'font-size': '30px'});
            $(".combo").css({'width': '288px'});
            $(".combo_content_bold").css({'font-size': '26px'});
            $(".combo_content_color").css({'font-size': '17px'});
            $(".combo-price-main").css({'border-radius': '13px','width': ' 87%','height': '87%'});
            $(".combo-price-main input").css({'font-size': '22px'});
            $(".wings_Serve").css({'width': '76%'});
            $(".wings_Serve input").css({'font-size': '22px'});
            $(".logo").css({'width': '360px', 'margin-left': '200px'});
            $("#head_5").css({'font-size': '50px'});
            $("#head_6").css({'font-size': '85px', 'height': '70px'});
            $(".absoluteimg").css({'width': '566px','right': '7%'});
            $(".absoluteimg3").css({'width': '673px', 'height': '573px', 'top': '7px', 'right': '-720px'});
            $(".wings_flavors").css({'width': '78%', 'padding': '50px 0px'});
            $(".bg_3").css({'width': '1621px', 'height': '550px', 'top': '-15px', 'left': '-108px'});
            $(".wings_title").css({'margin-top': '0px'});
            $(".menu_items_wrapper").css({'gap': '60px', 'padding-top': '31px',});
            $(".menu_items_single").css({'gap': '25px'});
            $(".price-two-box-section").css({'margin-top': '0px'});
            $(".bg_2").css({'top': '-60px','left': '-25px','width': '520px', 'height': '594px'});
            $(".heading3").css({'margin-top': '0px', 'padding-top': '20px'});
            $(".heading3").css({'margin-top': '0px'});
            $("#head_4").css({'font-size': '46px'});
            $(".price-box1").css({'padding': '20px 20px'});
            $(".wings_title input").css({'font-size': '60px', 'height': '54px'});
        }
        else if ((window.screen.width) >= '1267' && (window.screen.width) <= '1367') 
        {

            $(".header-content").css({'width': '28%'});
            $(".single-price").css({'font-size': '20px'});
            $(".thirdItem").css({'margin-top': '0px !important'});
            $(".wings_flavors").css({'margin-top': '0px'});
            $(".price-two-box-section").attr('style','width : 24%; margin-left: 10px;');
            $("#head_4").attr('style','font-size : 38px; text-align: center;');
            $(".pc3").attr('style','width : 29% !important;');
            
            $(".lefmid.nefiwidht1").css({'width': '45%'});
            $(".lefmid.nefiwidht").attr('style', 'width: 52%');
            $(".innerbox").attr('style', 'paddint-top:25px');
            $(".howie3").attr('style', 'width: 155px;padding-top: 16px;');
            $(".lefmid1").attr('style', 'width: 36%;');
            $(".fontx2.jio").attr('style', 'top: 175px;');
            $(".htilr").attr('style', 'font-size: 48px;');
            $(".header_input_left").attr('style', 'width: 626px;margin-right: 187px;');
            $(".chicken_burger").attr('style', 'top: 15px; right: -175px;  width: 160px;');
            $(".pc_board").attr('style', 'width: 356px;');
            // $(".absoluteimg").attr('style', 'top: 120px; left: 284px;');
            // $(".absoluteimg2").attr('style', 'top: 130px; left: 465px;');
            // $(".absoluteimg3").attr('style', 'left: -358px; bottom: -181px;');
            $(".wings_1").attr('style', 'width: 240px;');
            $(".wings_3").attr('style', 'width: 500px;');
            $(".combo").attr('style', 'width: 225px;');
            $(".combo_content_bold").attr('style', 'font-size: 22px;');
            $(".pc").attr('style', 'font-size: 24px;');
            $(".wings_title input").attr('style', 'width: 233px; font-size:48px;');
            $(".wings_Serve input").attr('style', 'font-size: 20px;');
            $(".menu_items_single").attr('style', 'width: 210px;');
            $(".wings_flavors").attr('style', 'margin-top: 10px; height:200vh;');
            $(".menu_items_wrapper").attr('style', 'padding-top: 50px;');
            $(".wings_title").attr('style', 'padding-top: 5px;');
            

            $(".stage img").attr('style', 'height: 220px;');             // image
            $(".fontx").attr('style', 'font-size: 30px;height: auto;'); // Title
            $(".fontx1").attr('style', 'font-size: 20px;');            //  Description
            $("#back_display3").attr('style', 'display: none;');      //  Backgrount Image icon
            $(".fontx2").attr('style', 'font-size: 30px;');           // Price
            $(".inneboximg").attr('style', 'width: 300px;');          //  Images
            $(".topimgox").attr('style', 'width: 50%;');              //  Image Wrapper, Content Wrapper
            $(".fontx2.jio").attr('style', 'width: 147px;top: 130px;left: 191px;font-size: 28px;');  // absolute item 
            $(".lowerboxs").attr('style', 'margin-top: 20px;');  // lowerBoxs
            $(".topimgox.rti").attr('style', 'width: 222px;left: -46px;');  // 
        } 
        else
        {
            $(".bg_1").css({'width': '','height': '', 'top': '', 'left': ''});
            $(".heading").css({'width': '','margin-bottom': ''});
            $("#head_1").css({'margin-left': ''});
            $(".htilr").css({'font-size': ''});
            $(".menu_items_single input").css({'font-size': ''});
            $(".price-box-wapper").css({'gap': ''});
            $(".single-price").css({'font-size': ''});
            $(".combo").css({'width': ''});
            $(".combo_content_bold").css({'font-size': ''});
            $(".combo_content_color").css({'font-size': ''});
            $(".combo-price-main").css({'border-radius': '','width': '','height': ''});
            $(".combo-price-main input").css({'font-size': ''});
            $(".wings_Serve").css({'width': ''});
            $(".wings_Serve input").css({'font-size': ''});
            $(".logo").css({'width': '', 'margin-left': ''});
            $("#head_5").css({'font-size': ''});
            $("#head_6").css({'font-size': '', 'height': ''});
            $(".absoluteimg").css({'width': '','right': ''});
            $(".absoluteimg3").css({'width': '', 'height': '', 'top': '', 'right': ''});
            $(".wings_flavors").css({'width': '', 'padding': ''});
            $(".bg_3").css({'width': '', 'height': '', 'top': '', 'left': ''});
            $(".wings_title").css({'margin-top': ''});
            $(".menu_items_wrapper").css({'gap': '', 'padding-top': '',});
            $(".menu_items_single").css({'gap': ''});
            $(".price-two-box-section").css({'margin-top': ''});
            $(".bg_2").css({'top': '','left': '','width': '', 'height': ''});
            $(".heading3").css({'margin-top': '', 'padding-top': ''});
            $(".heading3").css({'margin-top': ''});
            $("#head_4").css({'font-size': ''});
            $(".price-box1").css({'padding': ''});
            $(".wings_title input").css({'font-size': '', 'height': ''});
        }
    }
    else
    {
        $(".bg_1").css({'width': '','height': '', 'top': '', 'left': ''});
            $(".heading").css({'width': '','margin-bottom': ''});
            $("#head_1").css({'margin-left': ''});
            $(".htilr").css({'font-size': ''});
            $(".menu_items_single input").css({'font-size': ''});
            $(".price-box-wapper").css({'gap': ''});
            $(".single-price").css({'font-size': ''});
            $(".combo").css({'width': ''});
            $(".combo_content_bold").css({'font-size': ''});
            $(".combo_content_color").css({'font-size': ''});
            $(".combo-price-main").css({'border-radius': '','width': '','height': ''});
            $(".combo-price-main input").css({'font-size': ''});
            $(".wings_Serve").css({'width': ''});
            $(".wings_Serve input").css({'font-size': ''});
            $(".logo").css({'width': '', 'margin-left': ''});
            $("#head_5").css({'font-size': ''});
            $("#head_6").css({'font-size': '', 'height': ''});
            $(".absoluteimg").css({'width': '','right': ''});
            $(".absoluteimg3").css({'width': '', 'height': '', 'top': '', 'right': ''});
            $(".wings_flavors").css({'width': '', 'padding': ''});
            $(".bg_3").css({'width': '', 'height': '', 'top': '', 'left': ''});
            $(".wings_title").css({'margin-top': ''});
            $(".menu_items_wrapper").css({'gap': '', 'padding-top': '',});
            $(".menu_items_single").css({'gap': ''});
            $(".price-two-box-section").css({'margin-top': ''});
            $(".bg_2").css({'top': '','left': '','width': '', 'height': ''});
            $(".heading3").css({'margin-top': '', 'padding-top': ''});
            $(".heading3").css({'margin-top': ''});
            $("#head_4").css({'font-size': ''});
            $(".price-box1").css({'padding': ''});
            $(".wings_title input").css({'font-size': '', 'height': ''});
    }
}
// var slideIndex = 0;
// var slidetime;
// function showSlides() {
    
//     var i;
//     var slides = document.getElementsByClassName("slide_show");
    
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
    
//     slides[slideIndex-1].style.display = "block";  
//     slidetime = setTimeout(showSlides, 10000); // Change image every 2 seconds
// 	for(i=1;i<=15;i++)
// 	{
// 		$('#img-preview-parent-'+i).slick('slickUnfilter');
// 	}
// } 
// function myStopFunction() {
//      $('.content').hide();
//     //alert($.cookie('slide_id'));
//     var slide_id = $.cookie('slide_id');
//     $('#content-'+slide_id).show();
//      if(slide_id == null)
//      {
//           $('#content-1').show();
//      }
//     clearTimeout(slidetime);
// }