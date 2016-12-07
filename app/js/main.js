$(document).ready(function() {
	$("#nav1").click(function(e){
	 	e.preventDefault();
        $("html, body").animate({
            scrollTop: $("section.about").offset().top -96
        }, {
            duration: 500
        });
    });
    $("#nav2").click(function(e){
	 	e.preventDefault();
        $("html, body").animate({
            scrollTop: $("section.vacancies").offset().top -96
        }, {
            duration: 500
        });
    });
    $("#nav3").click(function(e){
	 	e.preventDefault();
        $("html, body").animate({
            scrollTop: $("footer").offset().top -96
        }, {
            duration: 500
        });
    });
    $("#nav5").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("section.vacancies").offset().top -96
        }, {
            duration: 800
        });
    });


    var tabsArray = $(".about-tabs .tab");
    // console.log(tabsArray.length);

    $(".tab .tab-title").on("click", function(e) {
    	tabs(e.target);
    });

    var tabs = function (target) {
    	if ($(target).parent(".tab").hasClass('active') == false) {
    		var clickedTab = $(target).parent(".tab"),
    		innerContent = clickedTab.children('.tab-content');

	    	for (var i = 0; i <= tabsArray.length; i++) {
	    		$(tabsArray[i]).removeClass('active');
	    		$(tabsArray[i]).children('.tab-content').slideUp(300);
	    	};

	    	clickedTab.addClass('active');
			innerContent.slideDown(300);
    	}
    };


    $("section.about").parallax({
        "y":{
            "to": '-3%',
            "duration":"1000%"
        }
    });

    $(".about-photo1").parallax({
        "top":{
            "to": '250px',
            "duration":"500%"
        }
    });
    $(".about-photo2").parallax({
        "top":{
            "to": '-20px',
            "duration":"700%"
        }
    });

    $(".about-container").parallax({
        "top":{
            "to": '70px',
            "duration":"300%"
        }
    });

});

$(window).on("load", function() {
    if ($(window).width() < 768) {
        var techCount = $('.tech-wrap > div');
        console.log(techCount);
        console.log(techCount.length);
        for (var i = 6; i < techCount.length; i++) {
            $(techCount[i]).css('display', 'none');
        }

        $(".more-tech a").on("click", function (e) {
            e.preventDefault();
            for (var i = 6; i < techCount.length; i++) {
                $(techCount[i]).css('display', 'inline-block');
            }
            $(this).css('display', 'none')
        });
    };

})


