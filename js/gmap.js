function initialize() {
	var map_canvas = document.getElementById('map_canvas');
	var loc = new google.maps.LatLng(48.146632, 17.162910);
	var map_options = {
		disableDefaultUI: true,
		center: loc,
		zoom: 13,
		minZoom:7,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel:false,
		styles:[{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":30},{"gamma":0.5},{"hue":"#435158"}]}]
	}
	var map = new google.maps.Map(map_canvas, map_options)
	// centering
	var center;
		function calculateCenter() {
	  center = map.getCenter();
	}
	google.maps.event.addDomListener(map, 'idle', function() {
	  calculateCenter();
	});
	google.maps.event.addDomListener(window, 'resize', function() {
	  map.setCenter(center);
	});
	// map label
	var infobox = new InfoBox({
		content: document.getElementById("maplabel"),
		disableAutoPan: false,
		position:loc,
		pixelOffset: new google.maps.Size(-50,-140)
	});
	infobox.open(map);
}