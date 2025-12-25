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
            $(".htilr").css({'font-size': '60px'});
            $("#head_1").css({'margin-left': '114px','font-size': '50px'});
            $("#head_2").css({'font-size': '50px'});
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
            $("#head_4").css({'font-size': '46px'});
            $(".price-box1").css({'padding': '20px 20px'});
            $(".wings_title input").css({'font-size': '60px', 'height': '54px'});
        }
        else if ((window.screen.width) >= '1267' && (window.screen.width) <= '1367') 
        {

            $(".bg_1").css({'width': '565px','height': '554px', 'top': '-97px', 'left': '-66px'});
            $(".heading").css({'width': '97%','margin-bottom': '0px'});
            $(".htilr").css({'font-size': '37px'});
            $("#head_1").css({'margin-left': '114px','font-size': '37px'});
            $("#head_2").css({'font-size': '37px'});
            $(".menu_items_single input").css({'font-size': '20px'});
            $(".price-box-wapper").css({'gap': '10px'});
            $(".single-price").css({'font-size': '16px'});
            $(".combo").css({'width': '218px'});
            $(".combo_content_bold").css({'font-size': '17px'});
            $(".combo_content_color").css({'font-size': '11px'});
            $(".combo-price-main").css({'border-radius': '13px','width': ' 87%','height': '87%'});
            $(".combo-price-main input").css({'font-size': '18px'});
            $(".wings_Serve").css({'width': '76%'});
            $(".wings_Serve input").css({'font-size': '12px'});
            $(".logo").css({'width': '360px', 'margin-left': '66px'});
            $("#head_5").css({'font-size': '30px'});
            $("#head_6").css({'font-size': '50px', 'height': 'fit-content'});
            $(".absoluteimg").css({'width': '300px','right': '30%'});
            $(".absoluteimg3").css({'width': '500px', 'height': '380px', 'top': '16px', 'right': '-450px'});
            $(".wings_flavors").css({'width': '78%', 'padding': '50px 0px'});
            $(".bg_3").css({'width': '1189px', 'height': '550px', 'top': '-15px', 'left': '-108px'});
            $(".wings_title").css({'margin-top': '0px'});
            $(".menu_items_wrapper").css({'gap': '60px', 'padding-top': '31px',});
            $(".menu_items_single").css({'gap': '16px'});
            $(".price-two-box-section").css({'margin-top': '0px'});
            $(".bg_2").css({'top': '10px','left': '-25px','width': '520px', 'height': '594px'});
            $(".heading3").css({'margin-top': '0px', 'padding-top': '115px'});
            $("#head_4").css({'font-size': '37px'});
            $(".price-box1").css({'padding': '20px'});
            $(".wings_title input").css({'font-size': '37px', 'height': '54px'});
        } 
        else
        {
            $(".bg_1").css({'width': '','height': '', 'top': '', 'left': ''});
            $(".heading").css({'width': '','margin-bottom': ''});
            $(".htilr").css({'font-size': ''});
            $("#head_1").css({'margin-left': '','font-size': ''});
            $("#head_2").css({'font-size': ''});
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
            $("#head_4").css({'font-size': ''});
            $(".price-box1").css({'padding': ''});
            $(".wings_title input").css({'font-size': '', 'height': ''});
        }
    }
    else
    {
            $(".bg_1").css({'width': '','height': '', 'top': '', 'left': ''});
            $(".heading").css({'width': '','margin-bottom': ''});
            $(".htilr").css({'font-size': ''});
            $("#head_1").css({'margin-left': '','font-size': ''});
            $("#head_2").css({'font-size': ''});
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