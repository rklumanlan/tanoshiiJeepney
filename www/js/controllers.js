angular.module('starter.controllers', [])

.controller('NavBarCtrl', function($scope,$state, $ionicHistory) {
  $scope.tabSelected = function(tab) {
    $ionicHistory.clearHistory();
    // $ionicHistory.clearCache();
  };
})

.controller('JeepCtrl', function($scope, $timeout, Jeeps) {

  Jeeps.initDB();
  Jeeps.addDatas().then(function(docs) {

  });
  Jeeps.all('Angeles').then(function(docs) {
    $timeout(function () {
      $scope.ac_jeeps = docs;
    }, 0);
  });
  Jeeps.all('Clark').then(function(docs) {
    $timeout(function () {
      $scope.c_jeeps = docs;
    }, 0);
  });


})

.controller('JeepDetailCtrl', function($scope, $stateParams, Jeeps) {

  Jeeps.initDB();
  Jeeps.getJeepDetail($stateParams.jeepId).then(function(docs) {
    $scope.jeep = docs;
  });


})

.controller('MapsCtrl', function($scope, $stateParams, $cordovaGeolocation, $http, $ionicLoading, $cordovaNetwork, $window,$ionicHistory,$state, ConnectivityMonitor, Jeeps, GoogleMaps) {

    $scope.$on('$ionicView.beforeEnter', function(){ //This is fired twice in a row
        //    console.log("App view (menu) entered.");
        //    $state.go('$state.current', {}, {reload: true});
        Jeeps.initDB();


        var from = $stateParams.fromId;
        var to = $stateParams.toId;
        var options = {};

        var jeep1,jeep2,jeep1End,jeep2End;
        if(from!==undefined && to!==undefined){
          $scope.route = from+" - "+to;
          if(from == 'Angeles City Hall' && (to == 'Angeles Medical Center Inc.' || to == 'Dr. Amando L. Garcia Medical Center, Inc.') ){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'MARISOL-PAMPANG';
            jeep1End = '15.137799,120.588961';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,jeep1End,jeep2End,null,'back','back');
          }

          if(from == 'Angeles City Hall' && (to == 'Angeles University Foundation' || to == 'Angeles University Foundation Medical Center' || to == 'Diamond Subdivision' ||
          to == 'Fields Avenue' || to == 'Immaculate Concepcion Parish' || to == 'Main Gate Terminal' || to == 'SM City Clark' || to == 'Marisol' || to == 'Savers Mall' || to == 'Systems Plus College Foundation')){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.142913,120.596736';
            jeep2End = '15.142963,120.596637';
            getJeep(jeep1,jeep2,null,jeep1End,jeep2End,null,'back','forth');
            console.log('iffff');
          }

          if(from == 'Angeles City Hall' && to == 'Bancal'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.137799,120.588961';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,jeep1End,jeep2End,null,'back','back');
          }

          if(from == 'Angeles City Hall' && to == 'Citi Center'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'PANDAN-PAMPANG';
            jeep1End = '15.153694,120.604812';
            jeep2End = '15.15367,120.604794';
            getJeep(jeep1,jeep2,null,jeep1End,jeep2End,null,'forth','forth');
          }

          if(from == 'Angeles City Hall' && (to == 'Holy Angel University' || to == 'Holy Rosary Parish Church' || to == 'Jenra Mall' || to == 'Nepo Mall' || to == 'Sacred Heart Medical Center')){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'VILLA-PAMPANG';
            jeep1End = '15.137799,120.588961';
            jeep2End = '15.13786,120.58885';
            getJeep(jeep1,jeep2,null,jeep1End,jeep2End,null,'back','back');
          }
        //one way for undefined
          if(from == 'Angeles City Hall' && to == 'Holy Family Medical Center'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep1End = '15.13990,120.59450';
            getJeep(jeep1,null,null,jeep1End,null,null,'back',null);
          }

          if(from == 'Angeles City Hall' && to == 'Republic Central Colleges'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep1End = '15.13927,120.59037';
            getJeep(jeep1,null,null,jeep1End,null,null,'back',null);
          }

          if(from == 'Angeles City Hall' && to == 'The Medical City Angeles'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep1End = '15.13834,120.59335';
            getJeep(jeep1,null,null,jeep1End,null,null,'back');
          }

          if(from == 'Angeles City Hall' && to == 'Lourdes North West'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.137799,120.588961';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,jeep1End,jeep2End,null,'back','back');
          }

          if(from == 'Angeles City Hall' && to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PAMPANG-HOLY';
            jeep1End = '15.137799,120.588961';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,jeep3,jeep1End,jeep2End,jeep3End,'back','back','forth');
          }



          if(from == 'Angeles City Hall' &&
          (to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol' || to == 'Margot' || to == 'Sapang Bato' || to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.137799,120.588961';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,jeep1End,jeep2End,jeep3End,'back','back','forth');
          }

          if((from == 'Angeles Medical Center Inc.' || from == 'Dr. Amando L. Garcia Medical Center, Inc.')&& to == 'Angeles City Hall' ){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'PANDAN-PAMPANG';
            jeep1End = '15.143304,120.59643';
            jeep2End = '15.142838,120.596806';
            getJeep(jeep1,jeep2,null,jeep1End,jeep2End,null,'back','forth');
          }
        }
        else{
          console.log('eellss');

          options = {};
          console.log(options);


          var data = getJeepDocs($stateParams.jeepId)
            .then(function(result) {
              options.jeep_1 = result;
              console.log(result);
            });

          var pointMarker = getJeepMarkers($stateParams.jeepId).then(function(result) {
            options.marker_1 = result;
            console.log(result);
          });

          pointMarker.then(function(result) {
            console.log(result);
            GoogleMaps.init(options);
          });
        }
        function getJeep(jeep1,jeep2,jeep3,end1,end2,end3,ctr1,ctr2,ctr3){
          console.log(jeep3);
          console.log(jeep2);
          console.log(ctr1);
          console.log(ctr2);
          if (jeep2===null&&end2===null) {
              var from1 = $stateParams.fromId;

              options = {};

              var data1 = getJeepDocs(jeep1)
                .then(function(result) {
                  options.jeep_1 = result;
                  return options;
                });

              var pointMarker1 = getJeepMarkers(from1).then(function(result) {
                options.marker_1 = result[0];
                console.log(result);
                return options;
              });

              options.end1 = end1;
              options.ctr1 = '1ride';

              pointMarker1.then(function(result) {
                console.log(result);
                GoogleMaps.init(options);
              });
          }
          else if (jeep3!==null) {
            var from = $stateParams.fromId;
            var to = $stateParams.toId;
            console.log(to);

            options = {};

            var data = getJeepDocs(jeep1)
              .then(function(result) {
                options.jeep_1 = result;
                return getJeepDocs(jeep2);
              })
              .then(function(result) {
                options.jeep_2 = result;
                return getJeepDocs(jeep3);
              }).
              then(function(result) {
                options.jeep_3 = result;
                return options;
              });

            var pointMarker = getJeepMarkers(from).then(function(result) {
              options.marker_1 = result[0];
              console.log(result);
              var string = end3;
              array = string.split(",");

              // options.marker_2 = result2[0];
              options.marker_2 = {lat:array[0],lng:array[1]};
              console.log(options.marker_2);
              return getJeepMarkers(to);
            }).then(function(result2) {
              console.log(result2);
              options.marker_3 = result2[0];
              return options;
          });
            options.midPoint1 = end2;
            options.midPoint2 = end3;
            options.end1 = end1;
            options.end2 = end2;
            options.end3 = end3;
            options.ctr1=ctr1;
            options.ctr2=ctr2;
            options.ctr3=ctr3;

            pointMarker.then(function(result) {
              console.log(result);
              GoogleMaps.init(options,null,null);
            });
          }
          else{
              var from2 = $stateParams.fromId;
              var to2 = $stateParams.toId;
              console.log(to2);

              options = {};

              var data2 = getJeepDocs(jeep1)
                .then(function(result) {
                  options.jeep_1 = result;
                  return getJeepDocs(jeep2);
                })
                .then(function(result) {
                  options.jeep_2 = result;
                  return options;
                });

              var pointMarker2 = getJeepMarkers(from2).then(function(result) {
                options.marker_1 = result[0];
                console.log(result);
                return getJeepMarkers(to2);
              }).then(function(result2) {
                console.log(result2);
                options.marker_2 = result2[0];
                return options;
              });

              options.end1 = end1;
              options.end2 = end2;
              console.log(end2);
              options.ctr1 = ctr1;
              options.ctr2 = ctr2;

              pointMarker2.then(function(result) {
                console.log(result);
                GoogleMaps.init(options);
              });
          }


        }


        function getJeepDocs(jeep){
          return Jeeps.getJeepDetail(jeep).then(function(docs) {
            return docs;
          });
        }

        function getJeepMarkers(points){
          return Jeeps.getMarkers(points).then(function(markers) {
            return markers;
          });

        }
    });



})

.controller('FindRouteCtrl', function($scope,Jeeps,$ionicModal,$ionicPopup,$state, GoogleMaps, $window) {
  Jeeps.initDB();
  Jeeps.getMarkers().then(function(points) {
    var x;
    var a = [];
    for (x in points) {
        a.push(points[x].text);
        $scope.items = a;
    }
    console.log(a);

  });

   $scope.text_point_A = 'Choose starting point';
   $scope.text_point_B = 'Choose destination';
   $scope.val =  {single: null};

   $ionicModal.fromTemplateUrl(
       'custom_textbox.html', {
   scope: $scope,
   animation: 'slide-in-up'
   }
   ).then(function(modal) {
       $scope.modal = modal;
   });
  $scope.openModal = function(lbl) {

    $scope.modal.show();
    if(lbl=='to'){
      $scope.ctr = 'to';
      $scope.headerText  = 'To';
    }
    else if(lbl=='from'){
      $scope.ctr = 'from';
      $scope.headerText  = 'From';
    }
  };

  $scope.closeModal = function() {
    $scope.modal.search = "";
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    console.log('destroy');
    $scope.modal.remove();
  });

  // Execute action on remove modal
  $scope.$on('modal.removed', function() {

    console.log('hi');
    // Execute action
  });

  $scope.validateSingle = function (item,ctr) {
    if(ctr=='from'){
      $scope.text_point_A = item;
    }
    else if(ctr=='to'){
      $scope.text_point_B = item;

    }

    $scope.closeModal();
  };

  $scope.submit = function() {
    var from = document.getElementById('point_a').innerText;
    var to = document.getElementById('point_b').innerText;
    $scope.route = 'afdas';
    if(from == 'Choose starting point' || to == 'Choose destination'){
      $ionicPopup.alert({
        title: 'Alert',
        content: 'Empty Fields! Please select starting point or destination.'
      });
    }
    else if (from == to) {
      $ionicPopup.alert({
        title: 'Alert',
        content: 'Starting point and destination must not be the same.'
      });
    }
    else if (from ==="Angeles City Hall" && to == "Marquee Mall") {
      $ionicPopup.alert({
        title: 'Alert',
        content: 'You are just near to '+to+'. You don\'t need to ride a jeepney.'
      });
    }

    else{
      // $window.location = '/#/tab/findroute/'+from+'/'+to+'/maps';
      $state.go('tab.findroute-maps', { fromId: from, toId:to });
      // Jeeps.initDB();
      //
      // console.log("'Angeles City Hall'");
      // if(from == 'Angeles City Hall' && to == 'Angeles University Foundation'){
      //   console.log('enter if');
      //
      //   var jeep1 = 'PANDAN-PAMPANG';
      //   var jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
      //
      //   Jeeps.getJeepDetail(jeep1).then(function(docs1) {
      //     Jeeps.getJeepDetail(jeep2).then(function(docs2) {
      //       Jeeps.getMarkers(docs1.name).then(function(points1) {
      //         Jeeps.getMarkers(docs2.name).then(function(points2) {
      //           console.log('goolemaps init find');
      //           GoogleMaps.init(docs1,points1,docs2,points2);
      //         });
      //       });
      //     });
      //   });

      // }




    }
  };




  $scope.getFromTo = function (ctrFrom,ctrTo){

  };

}).controller('HowToCtrl', function($scope) {});
