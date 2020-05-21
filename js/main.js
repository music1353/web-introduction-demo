//jq-strat
$(function () {
    
    // wow
    new WOW().init();

    // google map api
    function initMap() {
        var myLocation = {
            lat: 51.5195866,
            lng: -0.0892638
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLocation,
            scrollwheel: false,
            draggable: false,
            disableDefaultUI: true,
            zoom: 15,
            //snazzy maps的json
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": "-100"
            }
        ]
    },
                {
                    "featureType": "administrative.province",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
            },
                        {
                            "lightness": 65
            },
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
            },
                        {
                            "lightness": "50"
            },
                        {
                            "visibility": "simplified"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": "-100"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": "30"
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": "40"
            }
        ]
    },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
            },
                        {
                            "visibility": "simplified"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "hue": "#ffff00"
            },
                        {
                            "lightness": -25
            },
                        {
                            "saturation": -97
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "lightness": -25
            },
                        {
                            "saturation": -100
            }
        ]
    }
]
        });

        var marker = new google.maps.Marker({
            position: myLocation,
            map: map
        });
    }

    // 使用google map
    google.maps.event.addDomListener(window, 'load', initMap);

    // 超連結點擊後的滾動動畫設定
    $('.navbar-nav>li>a, #scrollTopBtn').bind('click', function (e) {
        var anchor = $(this);
        var navHeight = 50;
        var animationTime = 1500;
        var timingFunction = 'easeInOutCubic';
        var target = anchor.attr('href');
        console.log(target);

        $('html, body').stop().animate({
            scrollTop: ($(target).offset().top - navHeight)
        }, animationTime, timingFunction);

        //取消預設會直接飛過去的方法
        e.preventDefault();
    });
});
