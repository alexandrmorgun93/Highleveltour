/*MAP*/

function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: new google.maps.LatLng(50.4422870, 30.5338000),
    });

    let location = [
        {
            position: new google.maps.LatLng(50.442610, 30.530780)
        }
    ];

    location.forEach(function (locations) {
        let marker = new google.maps.Marker({
            position: locations.position,
            icon: 'img/map-marker.png',
            map: map
        });
    });
}

/*END MAP*/