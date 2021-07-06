   // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.75976435, 37.617098575218705],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13,
            controls:  ['smallMapDefaultSet']
        });
        // Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
          geometry: {
              type: "Point", // тип геометрии - точка
          }
        });

        var myPlacemark = new ymaps.Placemark([55.75848675, 37.60110517036456], {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/maps-icon.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [20, 20]
        });

        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myGeoObject);
        myMap.geoObjects.add(myPlacemark);
    }
    