(function (angular, mapboxgl, undefined) {
  'use strict';

  angular.module('app', ['mapboxgl-directive'])

  .run([function () {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmFpbWlrYW4iLCJhIjoiY2lraXJkOXFjMDA0OXdhbTYzNTE0b2NtbiJ9.O64XgZQHNHcV2gwNLN2a0Q';
  }])

  .directive('testDirective', [function () {
    var directive = {
      restrict: 'EA',
      scope: true,
      template: '<div>Hola</div>',
      link: function ($scope, $element, $attrs) {
        console.log($scope, $element, $attrs);
      }
    };

    return directive;
  }])

  .controller('IndexController', ['$scope', '$window', '$timeout', 'mapboxglMapsData', '$compile', function ($scope, $window, $timeout, mapboxglMapsData, $compile) {
    $scope.glHeight = $window.innerHeight;

    $window.onresize = function (event) {
      $scope.$apply(function () {
        $scope.glHeight = event.target.innerHeight;
      });
    };

    $scope.persistentGeojson = true;
    $scope.persistentImage = true;

    $scope.glStyle = 'mapbox://styles/mapbox/streets-v9';
    $scope.glStyle2 = 'mapbox://styles/mapbox/dark-v9'

    $scope.deleteButtonClick = function (event) {
      console.log(event);
    };

    var htmlButton = '<button class="btn btn-primary" ng-click="deleteButtonClick($event);">aasgioagg</button>';
    var compiledHtml = $compile(htmlButton)($scope);

    $scope.$on('mapboxglMap:load', function (event, mapboxglMapEvent) {
      console.log(event, mapboxglMapEvent);

      mapboxglMapEvent.target.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': {
            'type': 'identity',
            'property': 'height'
          },
          'fill-extrusion-base': {
            'type': 'identity',
            'property': 'min_height'
          },
          'fill-extrusion-opacity': .6
        }
      });
    });

    $scope.$on('mapboxglMap:styleChanged', function (event, mapboxglMapEvent) {
      console.log(event, mapboxglMapEvent);
    });

    $scope.$on('mapboxglDirections:route', function (event, mapboxglDirectionsEvent) {
      console.log(event, mapboxglDirectionsEvent);
    });

    $scope.$on('mapboxglGeolocate:geolocate', function (event, mapboxglGeolocateEvent) {
      console.log(event, mapboxglGeolocateEvent);
    });

    $scope.$on('mapboxglGeocoder:loading', function (event, mapboxglGeocoderEvent) {
      console.log(event, mapboxglGeocoderEvent);
    });

    $scope.$on('mapboxglGeocoder:results', function (event, mapboxglGeocoderEvent) {
      console.log(event, mapboxglGeocoderEvent);
    });

    $scope.$on('mapboxglGeocoder:result', function (event, mapboxglGeocoderEvent) {
      console.log(event, mapboxglGeocoderEvent);
    });

    $scope.$on('mapboxglGeocoder:error', function (event, mapboxglGeocoderEvent) {
      console.log(event, mapboxglGeocoderEvent);
    });

    $scope.$on('mapboxglDraw:draw.create', function (event, mapboxglDrawEvent) {
      console.log(event, mapboxglDrawEvent);
    });

    $scope.glCenter = {
      lat: 41,
      lng: -2
    };

    /*$timeout(function () {
      $scope.glStyle = 'mapbox://styles/mapbox/dark-v9';
      $scope.glStyle2 = 'mapbox://styles/mapbox/streets-v9';
    }, 6000, true);*/

    $scope.glZoom = 12;

    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(https://placekitten.com/g/60/60/)';
    el.style.width = '60px';
    el.style.height = '60px';

    var el2 = document.createElement('div');
    el2.className = 'marker';
    el2.style.backgroundImage = 'url(https://placekitten.com/g/50/50/)';
    el2.style.width = '50px';
    el2.style.height = '50px';

    $scope.glMarkers = [
      {
        coordinates: [-3, 45],
        element: el
      }, {
        coordinates: [-2, 37],
        element: el2
      }
    ];

    $scope.glControls = {
      navigation: {
        enabled: true,
        options: {
          position: 'top-left'
        }
      },
      scale: {
        enabled: true,
        options: {
          position: 'bottom-left'
        }
      },
      geolocate: {
        enabled: true
      },
      geocoder: {
        enabled: true,
        options: {
          position: 'top-right'
        }
      }
    };

    $scope.glHandlers = {
      scrollZoom: true
    };

    $scope.glVideo = [
      {
        urls: [
          'https://www.mapbox.com/drone/video/drone.mp4',
          'https://www.mapbox.com/drone/video/drone.webm'
        ],
        coordinates: [
          [-122.51596391201019, 37.56238816766053],
          [-122.51467645168304, 37.56410183312965],
          [-122.51309394836426, 37.563391708549425],
          [-122.51423120498657, 37.56161849366671]
        ]
      }
    ];

    $scope.glGeojson = {
      sources: [
        {
          id: 'circle1',
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates:  [-2, 41]
            }
          }
        }, {
          id: 'circle2',
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-4, 41]
            }
          }
        }, {
          id: 'polygon1',
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [-2, 40],
                  [-2.5, 41],
                  [-3, 42],
                  [-3.5, 39],
                  [-4, 38],
                  [-2, 40]
                ]
              ]
            }
          }
        }
      ],
      layers: [
        {
          id: 'circle1',
          type: 'circle',
          source: 'circle1',
          paint: {
            'circle-radius': 15,
            'circle-color': 'red',
            'circle-opacity': 0.6
          },
          popup: {
            enabled: true,
            message: htmlButton,
            getScope: function () {
              return $scope;
            }
          }
        }, {
          id: 'circle2',
          type: 'circle',
          source: 'circle2',
          paint: {
            'circle-radius': 10,
            'circle-color': 'blue',
            'circle-opacity': 0.7
          },
          'paint.tilted': {
            'circle-opacity': 0.2
          },
          popup: {
            enabled: true,
            message: 'Test popup'
          }
        }, {
          id: 'polygon1',
          type: 'fill-extrusion',
          source: 'polygon1',
          paint: {
            /*'fill-color': 'yellow',
            'fill-opacity': 0.8*/

            'fill-extrusion-base': 0,
            'fill-extrusion-height': 1250,
            'fill-extrusion-color': 'yellow',
            'fill-extrusion-opacity': 0.75
          },
          popup: {
            enabled: true,
            message: 'Test'
          }
        }
      ]
    };

    /*$scope.glGeojson = [
      {
        type: 'circle',
        coordinates: [-4, 41],
        layer: {
          paint: {
            "circle-radius": 12,
            "circle-color": "blue",
            "circle-opacity": 0.6
          }
        },
        popup: {
          enabled: true,
          message: 'xcmlxncbknxcbn'
        }
      }, {
        type: 'polygon',
        coordinates: [
          [
            [-2, 40],
            [-2.5, 41],
            [-3, 42],
            [-3.5, 39],
            [-4, 38],
            [-2, 40]
          ]
        ],
        layer: {
          paint: {
            "fill-color": "#FF0000",
            "fill-opacity": 0.75
          }
        }
      }, {
        type: 'line',
        coordinates: [
          [-2, 41],
          [-2.5, 41],
          [-3, 41],
          [-3.5, 41],
          [-4, 41]
        ],
        layer: {
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": "green",
            "line-width": 8
          }
        }
      }, {
        source: {
          data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
        }
      }
    ];*/
  }]);
})(window.angular, window.mapboxgl);
