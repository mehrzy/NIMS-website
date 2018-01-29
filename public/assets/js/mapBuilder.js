var mapMarkers;

function initMap() {
  var clemson = {lat: 34.6761, lng: -82.8364};
  var watt = {lat: 34.676071, lng: -82.837038};
  var makerspace = {lat: 34.676285, lng:-82.836909};
  var immersive = {lat: 34.676003, lng:-82.837025};
  var rhodes = {lat: 34.676997, lng: -82.837205};
  var tillman = {lat: 34.680067, lng: -82.837398};
  var lee = {lat: 34.674526, lng: -82.838369};
  var cook = {lat: 34.676536, lng: -82.837771};
  var fDaniel = {lat: 34.675490, lng: -82.839139};
  var library = {lat: 34.6761, lng: -82.8364};

  var map = new google.maps.Map(document.getElementById('mapBox'), {
    zoom: 17,
    center: watt,
    styles: [
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]
  });

  var prev_infowindow =false;

  //Makerspace
  var infoMakerspace =  '<div class="iw-container">'+
                          '<div class="row iw-row">'+
                            '<div class="col-12">' +
                              '<h2 class="infoHeader">Makerspace</h2>'+
                              '<h4 class="infoSubHeader">Watt 110</h4>'+
                            '</div>' +
                            '<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/3dprinting.svg">3D Printing</div>'+
                            '<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/3dscanning.svg">3D Scanning</div>'+
                            '<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/laserCutter.svg"><figcaption>Laser Cutting</div>'+
                            '<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/cnc.svg">CNC Milling</div>'+
                            '<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/tools.svg">Hand Tools</div>'+
                            '<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/vinylCutter.svg">Vinyl Cutting</div>'+
                            '<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/button.svg">Button Making</div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="iw-footer">'+
                          '<a class="btn btn-primary" role="button" href="http://cumaker.space/" target="_blank">More Info</a>'+
                        '</div>';

  var infoWindowMakerspace = new google.maps.InfoWindow({
          content: infoMakerspace
  });
  var mMakerspace = new google.maps.Marker({
    position: makerspace,
    map: map
  });
  mMakerspace.addListener('click', function() {
    if(prev_infowindow) prev_infowindow.close();
    infoWindowMakerspace.open(map, mMakerspace);
    prev_infowindow = infoWindowMakerspace;
  });

  //Makerspace
  var infoImmersive = '<div class="iw-container">'+
                        '<div class="row iw-row">'+
                          '<div class="col-12">' +
                            '<h2 class="infoHeader">Immersive Space</h2>'+
                            '<h4 class="infoSubHeader">Watt 308</h4>'+
                          '</div>' +
                          '<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/vr.svg">Virtual Reality</div>'+
                          '<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/3dscanning.svg">3D Scanning</div>'+
                          '<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/vrDev.svg">VR Dev Kit</div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="iw-footer">'+
                        '<a class="btn btn-primary" role="button" href="http://vrclub.people.clemson.edu/index.html" target="_blank">More Info</a>'+
                      '</div>';
  var infoWindowImmersive = new google.maps.InfoWindow({
          content: infoImmersive
  });
  var mImmersive = new google.maps.Marker({
    position: immersive,
    map: map
  });
  mImmersive.addListener('click', function() {
    if(prev_infowindow) prev_infowindow.close();
    infoWindowImmersive.open(map, mImmersive);
    prev_infowindow = infoWindowImmersive;
  });

  //Mech Engineering Student Shop
  var infoCook = '<div class="iw-container">'+
                    '<div class="row iw-row">'+
                      '<div class="col-12">'+
                        '<h2 class="infoHeader">ME Shop</h2>'+
                        '<h4 class="infoSubHeader">Cook Labs</h4>'+
                      '</div>' +
                      '<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/3dprinting.svg">3D Printing</div>'+
                      '<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/cnc.svg">CNC Milling</div>'+
                      '<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/electricTools.svg">Electric Tools</div>'+
                      '<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/tools.svg">Hand Tools</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="iw-footer">'+
                    '<a class="btn btn-primary" role="button" href="https://cecas.clemson.edu/mestudentshop/" target="_blank">More Info</a>'
                  '</div>';
  var infoWindowCook = new google.maps.InfoWindow({
    content: infoCook
  });
  var mCookLabs = new google.maps.Marker({
    position: cook,
    map: map
  });
  mCookLabs.addListener('click', function() {
    if(prev_infowindow) prev_infowindow.close();
    infoWindowCook.open(map, mCookLabs);
    prev_infowindow = infoWindowCook;
  });

  var infoGeo = "";
  var infoWindowGeo = new google.maps.InfoWindow({
    content: infoGeo
  });
  var mGeospatial = new google.maps.Marker({
    position: library,
    map: map
  });
  mGeospatial.addListener('click', function() {
    if(prev_infowindow) prev_infowindow.close();
    infoWindowGeo.open(map, mGeospatial);
    prev_infowindow = infoWindowGeo;
  });

	// Map filters
	mapMarkers = [
		[mMakerspace, infoMakerspace],
		[mImmersive, infoImmersive],
		[mCookLabs, infoCook],
		[mGeospatial, infoGeo]
	];

	var locationResources,
		mockInfoWindow,
		markerCol4Divs,
		filterIcons;

	for (mapMarker of mapMarkers) {
		mockInfoWindow = document.createElement('div');
		mockInfoWindow.innerHTML = mapMarker[1];
		markerCol4Divs = mockInfoWindow.querySelectorAll('div.col-4');
		locationResources = [];

		for (markerCol4Div of markerCol4Divs) {
			locationResources.push(markerCol4Div.innerText);
		}

		mapMarker[1] = locationResources;
	}

	filterIcons = document.querySelectorAll('.filter-icons div');

	for (filterIcon of filterIcons) {
		filterIcon.addEventListener('click', filterMap);
	}
}

function filterMap() {
	var filterText = this.innerText.trim(),
		unselectResource, locationHasResource, resourceText, showMarker;

  //filterIcons returns a nodeList, so convert to an array for easier push/deletes
  var filterIcons = [].slice.call(document.querySelectorAll('.filter-icons .selected'));
  unselectResource = false;
  //this loop determines if we are selecting an active filter, interpreted as clearing that filter
  filterIcons.every(function(arrVal){
    if(filterText === arrVal.innerText.trim()){
      unselectResource = true;
      return false; //used to exit Array.every
    }
    return true; //default to true so Array.every continues
  });
  if(unselectResource){
    //remove the selected class and update filter array
    this.classList.remove('selected');
    filterIcons.splice(filterIcons.indexOf(this),1);
  } else {
      //otherwise it's a new resource so show that in the DOM
      this.classList.add('selected');
      filterIcons.push(this);
    } 
  //now go through each marker and see if it matches all the filters
  for (mapMarker of mapMarkers) {
    showMarker = true; //master truth 
    filterIcons.every(function(arrVal){
      locationHasResource = false; //local truth per resource
      resourceText = arrVal.innerText.trim();
      for (resource of mapMarker[1]) {
        if (resource === resourceText) {
          locationHasResource = true;
          break;
        }
      }
      if(!locationHasResource){
        //if the marker is missing even 1 resource don't show it
        showMarker = false;
        return false; //break out of Array.every
      }
      return true; //return true to continue with Array.every
    });
    mapMarker[0].setVisible(showMarker);
  }
}
