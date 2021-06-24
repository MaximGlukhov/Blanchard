   // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("myMap1", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.75, 37.60],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15,
            controls:  ['smallMapDefaultSet']
        });
        // Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
          geometry: {
              type: "Point", // тип геометрии - точка
          }
        });

        var myPlacemark = new ymaps.Placemark([55.75, 37.60], {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/maps-icon.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [20, 20]
        });

        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myGeoObject);
        myMap.geoObjects.add(myPlacemark);
    }
    