$(function($) {
	$(function() {
		$("nav ul li a:not(:only-child)").click(function(e) {
			$(this).siblings('.nav-dropdown').toggle();        // Thêm/bớt vào sub menu nếu có dropdown
      $('.nav-dropdown').not($(this).siblings()).hide(); // Nếu bấm vào menu khác thì tắt cái vừa bấm đi
      e.stopPropagation();
		});
    // Nếu bấm vào bất cứ đây thì ẩn dropdown
    $('html').click(function() {
      $('.nav-dropdown').hide(); 
    });
    $('#nav-toggle').click(function() {
      $('#menu-top').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
	});
});
function slideSwitch() {
    var active = $('#slide .slide-wrap.active');
    var next = active.next();
 
    active.addClass('last-active');
    

    next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            active.removeClass('active last-active');
    });
    
}
function addFirst(){
    var firsts = $('#slide .slide-wrap').first();
    firsts.css({opacity: 0.0})
          .animate({opacity: 1.0}, 1000, function() {
            firsts.addClass('active');
          });
}

var time = 5000;
var timeReplay = time * 4;

$(function() {
    setInterval( "slideSwitch()", time );
    setInterval( "addFirst()", timeReplay );
});

$(document).ready(function() {
    var noidung = $('textarea');
    $("#submit").on('click', function() {
        if (!noidung.val()) {
            $(".errors").text("Bạn phải điền nội dung muốn liên hệ");
            return false;
        }
        if (noidung.val().length <= 50) {
            $(".errors").text("Nội dung liên hệ phải lớn hơn 50 ký tự");
            return false;
        }
        $(".errors").text();
    });
    noidung.keydown(function() {
        if (noidung.val().length <= 50) {
            $(".errors").text("Ký tự còn lại " + (50 - noidung.val().length));
        }
        if (noidung.val().length >= 500) {
            $(".errors").html("Viết gì mà nhiều thế??<br />Định viết văn tự sự à =))").removeClass('success');
            return false;
        }
        if (noidung.val().length > 50) {
            $(".errors").addClass('success').text('Bạn có thể gửi nội dung muốn liên hệ');
            return; 
        }
    });
});
jQuery(document).ready(function($) {
    $('.panel img').mouseover(function() {
        var sel = $(this).parent().find('.feature-expert');
        sel.show().animate({'top': '0', 'opacity': '1'}, 400);
    });
    var i = 1;
    $('.feature-expert').mouseout(function() {
        if (i == 1) {
            $(this).animate({'top': '100%', 'opacity': '0'}, 400);
            i++;
            return true;
        }
        if (i == 2) {
            $(this).animate({'top': '-100%', 'opacity': '0'}, 400);
            i--;
            return true;
        }
    });
});


/*var dir = "src/themes/base/images/";
var fileextension = ".png";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //Lsit all png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            $("body").append($("<img src=" + dir + filename + "></img>"));
        });
    }
});*/