function mapInit() {
    var myGeocoder = ymaps.geocode(shops[shopIndex].shopInfo.located, { results: 1 }).then(
        function (res) {
            var firstGeoObject = res.geoObjects.get(0);
            var cords = firstGeoObject.geometry.getCoordinates();
            var myMap = new ymaps.Map("maping-plus", {
                center: [cords[0] , cords[1]],
                zoom: 16
            });
            myMap.geoObjects.add(new ymaps.Placemark([cords[0], cords[1]], {
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6'
            }))
        },
        function (err) {
            alert('Яндекс карты не прогрузились. Должна помочь перезагрузка страницы!');
        }
    );
}

 function getMyMap() {
    var myMap = document.querySelector("#maping-plus");
    var mapTitle = document.getElementById("maping-title");
    if (myMap != null) {
        myMap.id = "maping";
    }
    if (mapTitle != null) {
        mapTitle.id = "maping-title-hidden";
    }
    var myMap = document.querySelector("#maping");
    var mapTitle = document.getElementById("maping-title-hidden");
    myMap.id = "maping-plus";
    mapTitle.id = "maping-title";
    mapInit();
}


export {mapInit,getMyMap}