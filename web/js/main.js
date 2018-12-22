
var map = "";
var image = "web/img/Pin.png";
var popupContent = "CREATIVE DIGITAL";
var marker = "";
var markerPosition = {lat: 50.45466, lng: 30.5238};
var mapCenter = {lat: 50.3166, lng: 30.5238};
var infowindow = "";
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 9, 
        center: mapCenter
    });

  marker = new google.maps.Marker({
      position: markerPosition, 
      map: map,
      icon: image
    });

  infowindow.open(map, marker);
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
//Center Map on resize
  google.maps.event.addDomListener(window, 'resize', function(){
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(mapCenter);
  });
};



$('.butScrol').click(() => {
    $('html, body').animate({
        scrollTop: $('#head').offset().top
    }, 1000);
});

