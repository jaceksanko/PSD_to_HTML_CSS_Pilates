const iconsMenu = document.getElementById('menu-icon');
const iconOpenClose = document.getElementById('js-menu-icon-open-close');
const menuList = document.querySelectorAll('nav ul');
iconOpenClose.addEventListener('click', function(){

    if (this.classList.contains('line-menu-icon-move') == false) {
        menuList[0].classList.remove('fadeOutUp');
        menuList[1].classList.remove('fadeOutUp');
        this.classList.toggle('line-menu-icon-move');
        menuList[0].classList.toggle('fadeInDown');
        menuList[1].classList.toggle('fadeInDown');
    }
    else {
        menuList[0].classList.remove('fadeInDown');
        menuList[1].classList.remove('fadeInDown');
        menuList[0].classList.toggle('fadeOutUp');
        menuList[1].classList.toggle('fadeOutUp');
        this.classList.remove('line-menu-icon-move');
    }
});

const activitiesMap = document.querySelectorAll('.map');

let gpsPilates1 = {lat: 52.2181243, lng: 21.004395};
let gpsPilates2 = {lat: 52.2181243, lng: 21.004395};
let gpsPilates3 = {lat: 52.2181243, lng: 21.004395};

let places1Text = 'Pilates1';
let places2Text = 'Pilates2';
let places3Text = 'Pilates3';

function initMap() {
    let styledMapType = new google.maps.StyledMapType(
        [
          {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{color: '#c9b2a6'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{color: '#dcd2be'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ae9e90'}]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#93817c'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{color: '#a5b076'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#447530'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#f5f1e6'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#fdfcf8'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#f8c967'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#e9bc62'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{color: '#e98d58'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{color: '#db8555'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#806b63'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#8f7d77'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#ebe3cd'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#b9d3c2'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#92998d'}]
          }
        ],
        {name: 'Styled Map'}); 

        let marker;
        function putTheMap(gpsPilates, divMap, placesText) {
            let map = new google.maps.Map(divMap, {
                center: gpsPilates,
                zoom: 15,
                mapTypeControlOptions: {
                mapTypeIds: []
                }
            });
        
            let marker = new google.maps.Marker({
                    position: gpsPilates,
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    title: placesText
            });

            marker.addListener('click', toggleBounce);
            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                  marker.setAnimation(null);
                } else {
                  marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }
        
            //Associate the styled map with the MapTypeId and set it to display.
            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');
        };

        putTheMap(gpsPilates1, activitiesMap[0], places1Text);
        putTheMap(gpsPilates2, activitiesMap[1], places2Text);
        putTheMap(gpsPilates3, activitiesMap[2], places3Text);
}
