/**
 * Created by Arsen Aleksanyan on 6/29/2016.
 */

var videoCount = 0;
var videoNumbers = [];

$(document).ready(function () {

    navPanelToggle();
    var $imageContainer = $('.image-container');
    hrefClick();

    $("#nav > ul > li > a ,#navPanel > div > nav > a").click(function (e) {

        e.preventDefault();
        $(".videos").hide();
        var value = $(this).text();
        var imageUrl;
        if (value != "Դասընթացներ") {
            $(".hrefs").hide();
        }
        $(".aboutUs").hide();

        if (value == "Գլխավոր") {
            if (!$("#navPanel").is(":hidden")) {
                $("#navPanel").hide()
                $("#fixedWrapper, #banner").css({
                    'transform': 'translate(0px, 0px)'
                })
            }

            $(".active").removeClass("active");
            $(".main").addClass("active");

            var imageCount = 1;
            var imageExist = true;
            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                $.get("images/glxavor/glxavor" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    imageExist = false;
                }).success(function () {
                    paging(imageCount, "glxavor", 0);
                })
                if (!imageExist) {
                    break;
                }
            }

            if (imageCount == 1) {
                $(".bootpag").remove();
            }
            imageUrl = "images/glxavor/glxavor1.png";
            $imageContainer.css("background-image", 'url(' + imageUrl + ')');

        }

        else if (value == "Ծառայություններ") {
            if (!$("#navPanel").is(":hidden")) {
                $("#navPanel").hide()
                $("#fixedWrapper, #banner").css({
                    // 'z-index': '10001',
                    'transform': 'translate(0px, 0px)'
                })
            }

            $(".active").removeClass("active");
            $(".services").addClass("active");

            var imageCount = 1;
            var imageExist = true;
            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                $.get("images/carayutyunner/carayutyunner" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    imageExist = false;
                }).success(function () {
                    paging(imageCount, "carayutyunner", 0);
                })
                if (!imageExist) {
                    break;
                }
            }

            if (imageCount == 1) {
                $(".bootpag").remove();
            }

            imageUrl = "images/carayutyunner/carayutyunner1.png";
            $imageContainer.css("background-image", 'url(' + imageUrl + ')');

        }

        else if (value == "Դասընթացներ") {
            $(".hrefs_list:first").css({'border-bottom': '1px solid black'})
            $(".hrefs_list").not(":first").css({'border-bottom': '0px'})

            if (!$("#navPanel").is(":hidden")) {
                $("#navPanel").hide()
                $("#fixedWrapper, #banner").css({
                    // 'z-index': '10001',
                    'transform': 'translate(0px, 0px)'
                });
            }

            $(".active").removeClass("active");
            $(".courses").addClass("active");

            var imageCount = 1;
            var imageExist = true;
            $(".hrefs").hide();
            var videoExists = false;
            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                $.get("images/dasntacner/arandznahatkutyunner/arandznahatkutyunner" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    $.get("images/dasntacner/arandznahatkutyunner/arandznahatkutyunner" + i + ".mp4")
                        .done(function () {
                            imageCount++;
                        }).fail(function () {
                        imageExist = false;
                    }).success(function () {
                        paging(imageCount, "dasntacner/arandznahatkutyunner", i);
                    })
                }).success(function () {
                    if(i == 1){
                        videoExists = true;
                    }
                    paging(imageCount, "dasntacner/arandznahatkutyunner", 0);
                })

                if (!imageExist) {
                    break;
                }
            }
            if (imageCount == 1) {
                $(".bootpag").remove();
            }
            if (videoExists){
                videoUrl = "mages/dasntacner/arandznahatkutyunner/arandznahatkutyunner1.mp4";
                var video = $('<video />', {
                    id: 'video',
                    src: videoUrl,
                    type: 'video/mp4',
                    controls: true
                });
                $(".videos").empty();
                video.appendTo($(".videos"));
                $(".videos").show();
                $(".hrefs").hide();
                $('.image-container').css("background-image", 'url()');
            }
            else if(!videoExists){
                imageUrl = "images/dasntacner/arandznahatkutyunner/arandznahatkutyunner1.png";
                $('.image-container').css("background-image", 'url(' + imageUrl + ')');
            }

            $(".hrefs").fadeIn(100);
        }

        else if (value == "Մեր մասին") {
            if (!$("#navPanel").is(":hidden")) {
                $("#navPanel").hide()
                $("#fixedWrapper, #banner").css({
                    // 'z-index': '10001',
                    'transform': 'translate(0px, 0px)'
                })
            }

            $(".active").removeClass("active");
            $(".about").addClass("active");

            var imageCount = 1;
            var imageExist = true;
            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                $.get("images/mer_masin/mer_masin" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    imageExist = false;
                }).success(function () {
                    paging(imageCount, "mer_masin", 0);
                })
                if (!imageExist) {
                    break;
                }
            }

            if (imageCount == 1) {
                $(".bootpag").remove();
            }

            imageUrl = "images/mer_masin/mer_masin1.png";
            $imageContainer.css("background-image", 'url(' + imageUrl + ')');
        }

        else if (value == "Կապ") {
            if (!$("#navPanel").is(":hidden")) {
                $("#navPanel").hide()
                $("#fixedWrapper, #banner").css({
                    // 'z-index': '10001',
                    'transform': 'translate(0px, 0px)'
                })
            }

            if($(".aboutUs").is(":hidden")){
                $(".aboutUs").show(100);
            }

            $(".active").removeClass("active");
            $(".contacts").addClass("active");

            var imageCount = 1;
            var imageExist = true;
            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                $.get("images/kap/kap" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    imageExist = false;
                }).success(function () {
                    paging(imageCount, "kap", 0);
                }).error(function () {
                })
                if (!imageExist) {
                    break;
                }
            }

            if (imageCount == 1) {
                $(".bootpag").remove();
            }

            imageUrl = "images/kap/kap1.png";
            $imageContainer.css("background-image", 'url(' + imageUrl + ')');
        }
    });

    $(window).resize(function () {
        zoomPageSelection();
        if ($(window).width() < 1000) {
            $("#navPanel").hide()
            $("#fixedWrapper, #banner").css({
                'transform': 'translate(0px, 0px)'
            })
        }

        fixedWrapperDisplay();
    });

    jQuery(window).load(zoomPageSelection());

    $(".main > a").trigger('click');
});

function paging(imageCount, navigation, videoIndex) {
    var navChild = navigation;
    if (navigation.indexOf("/") != -1) {
        navChild = navigation.substring(navigation.lastIndexOf("/") + 1, navigation.length);
    }

    $('#page-selection').bootpag({
        total: imageCount,
        page: 1,
        maxVisible: 3
    }).on("page", function (event, /* page number here */ num) {
        var arrayList = ["arandznahatkutyunner","grancvir_dasntacin_hima","@ndhanur","inchu_hashvapahutyun","mer_aroryan","norararutyunner","puler"];
        var indexOfList;
        $(".hrefs_list").each(function(index) {
            var clickedHref = $(this).css("border-bottom").split(" ")[0];
            if(clickedHref == "1px"){
                indexOfList = $(this).index();
            }
        });
        //var checkIfUnderlined = $(".hrefs_list:nth-child("+indexOfList+")").css("border-bottom").split(" ")[0];
        if (videoIndex == num && $(".courses").hasClass("active") && navChild == arrayList[indexOfList]) {
            if ($.inArray(num, videoNumbers) == -1) {
                videoNumbers[videoCount++] = num;
            }
            videoUrl = "images/" + navigation + "/" + navChild + num + ".mp4";
            var video = $('<video />', {
                id: 'video',
                src: videoUrl,
                type: 'video/mp4',
                controls: true
            });
            $(".videos").empty();
            video.appendTo($(".videos"));
            $(".videos").show();
            $(".hrefs").hide();
            $('.image-container').css("background-image", 'url()');
        }
        else {
            $(".hrefs").hide();
            if ($.inArray(num, videoNumbers) == -1) {
                $(".videos").hide();
                $(".hrefs").show();
            }

            imageUrl = "images/" + navigation + "/" + navChild + num + ".png";
            $('.image-container').css("background-image", 'url(' + imageUrl + ')');
            //$("#content").html("Insert content"); // some ajax content loading...
            if ($(".services").hasClass("active")) {
                $(".hrefs").show(100);
            }
        }
    });
}

function zoom() {
    if ($(window).width() < 1000) {
        var zoom = $(window).width() * 14.8 / 100 / 146;
        //142
        $("#navPanel").hide()
        $("#fixedWrapper, #banner").css({
            // 'z-index': '10001',
            'transform': 'translate(0px, 0px)'
        })
    }
    else {
        var zoom = 0.8;
    }
    fixedWrapperDisplay();
    $('body:not(' + '#fixedWrapper' + ')').each(function (index, el) {
        if (zoom < 0.3) {
            zoom = 0.3;
        }
        $(el).css({
            'zoom': zoom
        });
    });
}

function zoomPageSelection() {
    if ($(window).width() < 800) {
        var zoom = $(window).width() * 14.8 / 100 / 146;
    }
    else {
        var zoom = 0.8;
    }
    //countImageHeight();
    $('#page-selection').each(function (index, el) {
        //if (zoom < 0.3) {
        //    zoom = 0.3;
        //}
        $(el).css({
            'zoom': zoom
        });
    });
}

function navPanelToggle() {

    $("#fixedWrapperIcon").click(function () {
            if ($("#navPanel").is(":hidden")) {
                $("#navPanel").show()
                var width = $("#navPanel").width();
                $("#fixedWrapper, #banner").css({
                    // 'z-index': '10001',
                    'transform': 'translate(' + width + 'px, 0px)'
                })
            }
            else {
                $("#navPanel").hide()
                $("#fixedWrapper, #banner").css({
                    // 'z-index': '10001',
                    'transform': 'translate(0px, 0px)'
                })
            }
        }
    )
}

function fixedWrapperDisplay() {

    if ($(window).width() <= 500) {
        $(".container").css({
            'display': 'none'
        })
        $("#fixedWrapper").css({
            "display": "block"
        })
        $('body').css({
            'background-size': 'inherit'
        })
    }
    else {
        $(".container").css({
            'display': 'block'
        })
        $("#fixedWrapper").css({
            "display": "none"
        })
        $('body').css({
            'background-size': 'cover'
        })
    }
}

function hrefClick() {
    $(".hrefs_list").click(function () {
        $(this).css({
            "border-bottom": "1px solid"
        })
        $(".hrefs_list").not(this).css({
            "border-bottom": "0px"
        })

        videoNumbers = [];
        var indexOfHref = $('.hrefs_list').index(this);
        var imageExist = true;
        var imageCount = 1;

        if (indexOfHref == 0) {
            $(".hrefs").hide();
            var videoExists = false;
            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                $.get("images/dasntacner/arandznahatkutyunner/arandznahatkutyunner" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    $.get("images/dasntacner/arandznahatkutyunner/arandznahatkutyunner" + i + ".mp4")
                        .done(function () {
                            imageCount++;
                        }).fail(function () {
                        imageExist = false;
                    }).success(function () {
                        paging(imageCount, "dasntacner/arandznahatkutyunner", i);
                    })
                }).success(function () {
                    if(i == 1){
                        videoExists = true;
                    }
                    paging(imageCount, "dasntacner/arandznahatkutyunner", 0);
                })

                if (!imageExist) {
                    break;
                }
            }
            if (imageCount == 1) {
                $(".bootpag").remove();
            }
            if (videoExists){
                videoUrl = "mages/dasntacner/arandznahatkutyunner/arandznahatkutyunner1.mp4";
                var video = $('<video />', {
                    id: 'video',
                    src: videoUrl,
                    type: 'video/mp4',
                    controls: true
                });
                $(".videos").empty();
                video.appendTo($(".videos"));
                $(".videos").show();
                $(".hrefs").hide();
                $('.image-container').css("background-image", 'url()');
            }
            else if(!videoExists){

                imageUrl = "images/dasntacner/arandznahatkutyunner/arandznahatkutyunner1.png";
                $('.image-container').css("background-image", 'url(' + imageUrl + ')');
            }

            $(".hrefs").fadeIn(100);
        }

        else if (indexOfHref == 1) {
            $(".hrefs").hide();
            var videoExists = false;
            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                $.get("images/dasntacner/grancvir_dasntacin_hima/grancvir_dasntacin_hima" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    $.get("images/dasntacner/grancvir_dasntacin_hima/grancvir_dasntacin_hima" + i + ".mp4")
                        .done(function () {
                            imageCount++;
                        }).fail(function () {
                        imageExist = false;
                    }).success(function () {
                        if(i == 1){
                            videoExists = true;
                        }
                        paging(imageCount, "dasntacner/grancvir_dasntacin_hima", i);
                    })
                }).success(function () {
                    paging(imageCount, "dasntacner/grancvir_dasntacin_hima", 0);
                })
                if (!imageExist) {
                    break;
                }
            }
            if (imageCount == 1) {
                $(".bootpag").remove();
            }
            if (videoExists){
                videoUrl = "images/dasntacner/grancvir_dasntacin_hima/grancvir_dasntacin_hima1.mp4";
                var video = $('<video />', {
                    id: 'video',
                    src: videoUrl,
                    type: 'video/mp4',
                    controls: true
                });
                $(".videos").empty();
                video.appendTo($(".videos"));
                $(".videos").show();
                $(".hrefs").hide();
                $('.image-container').css("background-image", 'url()');
            }
            else if(!videoExists){
                imageUrl = "images/dasntacner/grancvir_dasntacin_hima/grancvir_dasntacin_hima1.png";
                $('.image-container').css("background-image", 'url(' + imageUrl + ')');
            }
            $(".hrefs").fadeIn(100);

        }
        else if (indexOfHref == 2) {
            $(".hrefs").hide();
            var videoExists = false;
            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                $.get("images/dasntacner/@ndhanur/@ndhanur" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    $.get("images/dasntacner/@ndhanur/@ndhanur" + i + ".mp4")
                        .done(function () {
                            imageCount++;
                        }).fail(function () {
                        imageExist = false;
                    }).success(function () {
                        if(i == 1){
                            videoExists = true;
                        }
                        paging(imageCount, "dasntacner/@ndhanur", i);
                    })
                }).success(function () {
                    paging(imageCount, "dasntacner/@ndhanur", 0);
                })
                if (!imageExist) {
                    break;
                }
            }
            if (imageCount == 1) {
                $(".bootpag").remove();
            }

            if (videoExists){
                videoUrl = "images/dasntacner/@ndhanur/@ndhanur1.mp4";
                var video = $('<video />', {
                    id: 'video',
                    src: videoUrl,
                    type: 'video/mp4',
                    controls: true
                });
                $(".videos").empty();
                video.appendTo($(".videos"));
                $(".videos").show();
                $(".hrefs").hide();
                $('.image-container').css("background-image", 'url()');
            }
            else if(!videoExists){
                imageUrl = "images/dasntacner/@ndhanur/@ndhanur1.png";
                $('.image-container').css("background-image", 'url(' + imageUrl + ')');
            }

            $(".hrefs").fadeIn(100);
        }
        else if (indexOfHref == 3) {
            $(".hrefs").hide();
            var videoExists = false;

            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                var videoExists = false;
                $.get("images/dasntacner/inchu_hashvapahutyun/inchu_hashvapahutyun" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    $.get("images/dasntacner/inchu_hashvapahutyun/inchu_hashvapahutyun" + i + ".mp4")
                        .done(function () {
                            imageCount++;
                        }).fail(function () {
                        imageExist = false;
                    }).success(function () {
                        if(i == 1){
                            videoExists = true;
                        }
                        paging(imageCount, "dasntacner/inchu_hashvapahutyun", i);
                    })
                }).success(function () {
                    paging(imageCount, "dasntacner/inchu_hashvapahutyun", 0);
                })
                if (!imageExist) {
                    break;
                }
            }
            if (imageCount == 1) {
                $(".bootpag").remove();
            }

            if (videoExists){
                videoUrl = "images/dasntacner/inchu_hashvapahutyun/inchu_hashvapahutyun1.mp4";
                var video = $('<video />', {
                    id: 'video',
                    src: videoUrl,
                    type: 'video/mp4',
                    controls: true
                });
                $(".videos").empty();
                video.appendTo($(".videos"));
                $(".videos").show();
                $(".hrefs").hide();
                $('.image-container').css("background-image", 'url()');
            }
            else if(!videoExists){
                imageUrl = "images/dasntacner/inchu_hashvapahutyun/inchu_hashvapahutyun1.png";
                $('.image-container').css("background-image", 'url(' + imageUrl + ')');
            }

            $(".hrefs").fadeIn(100);
        }
        else if (indexOfHref == 4) {
            $(".hrefs").hide();
            var videoExists = false;
            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                $.get("images/dasntacner/mer_aroryan/mer_aroryan" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    $.get("images/dasntacner/mer_aroryan/mer_aroryan" + i + ".mp4")
                        .done(function () {
                            imageCount++;
                        }).fail(function () {
                        imageExist = false;
                    }).success(function () {
                        paging(imageCount, "dasntacner/mer_aroryan", i);
                    })
                }).success(function () {
                    if(i == 1){
                        videoExists = true;
                    }
                    paging(imageCount, "dasntacner/mer_aroryan", 0);
                })
                if (!imageExist) {
                    break;
                }
            }
            if (imageCount == 1) {
                $(".bootpag").remove();
            }

            if (videoExists){
                videoUrl = "images/dasntacner/mer_aroryan/mer_aroryan1.mp4";
                var video = $('<video />', {
                    id: 'video',
                    src: videoUrl,
                    type: 'video/mp4',
                    controls: true
                });
                $(".videos").empty();
                video.appendTo($(".videos"));
                $(".videos").show();
                $(".hrefs").hide();
                $('.image-container').css("background-image", 'url()');
            }
            else if(!videoExists){
                imageUrl = "images/dasntacner/mer_aroryan/mer_aroryan1.png";
                $('.image-container').css("background-image", 'url(' + imageUrl + ')');
            }

            $(".hrefs").fadeIn(100);
        }

        else if (indexOfHref == 5) {
            $(".hrefs").hide();
            var videoExists = false;
            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                $.get("images/dasntacner/norararutyunner/norararutyunner" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    $.get("images/dasntacner/norararutyunner/norararutyunner" + i + ".mp4")
                        .done(function () {
                            imageCount++;
                        }).fail(function () {
                        imageExist = false;
                    }).success(function () {
                        if(i == 1){
                            videoExists = true;
                        }
                        paging(imageCount, "dasntacner/norararutyunner", i);
                    })
                }).success(function () {
                    paging(imageCount, "dasntacner/norararutyunner", 0);
                })
                if (!imageExist) {
                    break;
                }
            }
            if (imageCount == 1) {
                $(".bootpag").remove();
            }

            if (videoExists){
                videoUrl = "images/dasntacner/norararutyunner/norararutyunner1.mp4";
                var video = $('<video />', {
                    id: 'video',
                    src: videoUrl,
                    type: 'video/mp4',
                    controls: true
                });
                $(".videos").empty();
                video.appendTo($(".videos"));
                $(".videos").show();
                $(".hrefs").hide();
                $('.image-container').css("background-image", 'url()');
            }
            else if(!videoExists){
                imageUrl = "images/dasntacner/norararutyunner/norararutyunner1.png";
                $('.image-container').css("background-image", 'url(' + imageUrl + ')');
            }

            $(".hrefs").fadeIn(100);
        }

        else if (indexOfHref == 6) {
            $(".hrefs").hide();
            var videoExists = false;
            for (var i = 2; i <= 50; i++) {
                jQuery.ajaxSetup({async: false});
                $.get("images/dasntacner/puler/puler" + i + ".png")
                    .done(function () {
                        imageCount++;
                    }).fail(function () {
                    $.get("images/dasntacner/puler/puler" + i + ".mp4")
                        .done(function () {
                            imageCount++;
                        }).fail(function () {
                        imageExist = false;
                    }).success(function () {
                        if(i == 1){
                            videoExists = true;
                        }
                        paging(imageCount, "dasntacner/puler", i);
                    })
                }).success(function () {
                    paging(imageCount, "dasntacner/puler", 0);
                })
                if (!imageExist) {
                    break;
                }
            }
            if (imageCount == 1) {
                $(".bootpag").remove();
            }

            if (videoExists){
                videoUrl = "images/dasntacner/puler/puler1.mp4";
                var video = $('<video />', {
                    id: 'video',
                    src: videoUrl,
                    type: 'video/mp4',
                    controls: true
                });
                $(".videos").empty();
                video.appendTo($(".videos"));
                $(".videos").show();
                $(".hrefs").hide();
                $('.image-container').css("background-image", 'url()');
            }
            else if(!videoExists){
                imageUrl = "images/dasntacner/puler/puler1.png";
                $('.image-container').css("background-image", 'url(' + imageUrl + ')');
            }

            $(".hrefs").fadeIn(100);
        }

    })
}

function updateWidth() {
    viewport = document.querySelector("meta[name=viewport]");
    if (window.orientation == 90 || window.orientation == -90) {
        viewport.setAttribute('content', 'width=1401, initial-scale=0.34, maximum-scale=1.0, user-scalable=1');
    }
    else {
        viewport.setAttribute('content', 'width=640, initial-scale=0.47, maximum-scale=1.0, user-scalable=1');
    }
}

function countImageHeight() {
    if ($(".image-container").outerHeight() > $(window).height() - $(".container").outerHeight()) {
        var parentWidth = $(".image-container").offsetParent().width();
        var childWidth = parseInt($(".image-container").css("padding-top"));
        var calculateNewHeight = childWidth * 100 / parentWidth - 5;

        $(".image-container").css({
            "padding-top": calculateNewHeight + "%"
        })
    }
}