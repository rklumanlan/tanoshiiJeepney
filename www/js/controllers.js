angular.module('starter.controllers', [])

.controller('NavBarCtrl', function($scope,$state, $ionicHistory) {
  $scope.tabSelected = function(tab) {
    $ionicHistory.clearHistory();
  };
})

.controller('JeepCtrl', function($scope, $timeout, Jeeps) {

  Jeeps.initDB();
  Jeeps.addDatas();
  // Jeeps.addDatas().then(function(docs) {});
    Jeeps.all('Angeles').then(function(docs) {
    $timeout(function () {

      $scope.ac_jeeps = docs;
      console.log($scope.ac_jeeps);
    }, 0);
    });
    Jeeps.all('Clark').then(function(docs) {
    $timeout(function () {
      $scope.c_jeeps = docs;
      console.log($scope.c_jeeps);
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


    $scope.$on('$ionicView.beforeEnter', function(){
        Jeeps.initDB();
        var from = $stateParams.fromId;
        var to = $stateParams.toId;
        var options = {};

        var jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End;
        if(from!==undefined && to!==undefined){
          $scope.route = from+" - "+to;
          if((from == 'Angeles City Hall'||from=='Citi Center'||from=='Marquee Mall') && (to == 'Angeles Medical Center Inc.' || to == 'Dr. Amando L. Garcia Medical Center, Inc.') ){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'MARISOL-PAMPANG';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }
          else if((from == 'Angeles City Hall'||from=='Citi Center'||from=='Marquee Mall') && (to == 'Angeles University Foundation' || to == 'Angeles University Foundation Medical Center' || to == 'Diamond Subdivision' ||
          to == 'Fields Avenue' || to == 'Immaculate Concepcion Parish' || to == 'Main Gate Terminal' || to == 'SM City Clark' || to == 'Marisol' || to == 'Savers Mall' || to == 'Systems Plus College Foundation')){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.142913,120.596736';
            jeep2End = '15.142963,120.596637';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
            console.log('iffff');
          }
          else if((from == 'Angeles City Hall'||from=='Citi Center'||from=='Marquee Mall') && to == 'Bancal'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }
          else if((from == 'Angeles City Hall'||from=='Marquee Mall') && to == 'Citi Center'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'PANDAN-PAMPANG';
            jeep1End = '15.153783,120.604851';
            jeep2End = '15.15372,120.60482';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }
          else if((from == 'Angeles City Hall'||from=='Citi Center'||from=='Marquee Mall')&& (to == 'Holy Angel University' || to == 'Holy Rosary Parish Church' || to == 'Jenra Mall' || to == 'Nepo Mall' || to == 'Sacred Heart Medical Center')){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'VILLA-PAMPANG';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }
          else if((from == 'Angeles City Hall'||from=='Citi Center'||from=='Marquee Mall') && to == 'Holy Family Medical Center'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep1End = '15.13990,120.59450';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from == 'Angeles City Hall'||from=='Citi Center'||from=='Marquee Mall') && to == 'Republic Central Colleges'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep1End = '15.13927,120.59037';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from == 'Angeles City Hall'||from=='Citi Center'||from=='Holy Family Medical Center'||from=='Marquee Mall') && to == 'The Medical City Angeles'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep1End = '15.13834,120.59335';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from == 'Angeles City Hall'||from=='Citi Center'||from=='Marquee Mall') && to == 'Lourdes North West'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if((from == 'Angeles City Hall'||from=='Citi Center'||from=='Marquee Mall') && to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PAMPANG-HOLY';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
          }

          else if((from == 'Angeles City Hall'||from=='Citi Center'||from=='Marquee Mall') &&
          (to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth',null);
          }

          else if ((from=='Angeles City Hall'||from=='Citi Center'||from=='Marquee Mall')&&(to=='Margot' || to == 'Sapang Bato')) {
            jeep1 = 'PANDAN-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep4 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.14186,120.58799';
            jeep4End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'back','back','forth','forth');

          }

          else if((from == 'Angeles Medical Center Inc.'||from=='Dr. Amando L. Garcia Medical Center, Inc.' )&& to == 'Angeles University Foundation' ){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.14544,120.59530';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from == 'Angeles Medical Center Inc.'||from=='Dr. Amando L. Garcia Medical Center, Inc.' )&& to == 'Angeles University Foundation Medical Center'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.14527,120.59539';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from == 'Angeles Medical Center Inc.'||from=='Dr. Amando L. Garcia Medical Center, Inc.' )&& to == 'Bancal' ){
            jeep1 = 'MARISOL-PAMPANG-Walking';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.14131,120.58783';
            jeep2End = '15.14131,120.58783';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if((from == 'Angeles Medical Center Inc.'||from=='Dr. Amando L. Garcia Medical Center, Inc.' )&& (to == 'Immaculate Concepcion Parish'||to == 'Marisol'||to == 'Main Gate Terminal'||to == 'Fields Avenue'||to == 'SM City Clark'||to == 'Systems Plus College Foundation'||to == 'Diamond Subdivision'||to == 'Savers Mall')){
            jeep1 = 'MARISOL-PAMPANG-Walking';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.14131,120.58783';
            jeep2End = '15.14131,120.58783';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }
          else if ((from == 'Angeles Medical Center Inc.'||from=='Dr. Amando L. Garcia Medical Center, Inc.' ) && to==='Lourdes North West') {
            jeep1 = 'MARISOL-PAMPANG-Walking';
            jeep1End = '15.14186,120.58799';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);

          }
          else if((from == 'Angeles Medical Center Inc.'||from=='Dr. Amando L. Garcia Medical Center, Inc.' ) && (to == 'Holy Rosary Parish Church'||to == 'Jenra Mall'||to == 'Nepo Mall'||to == 'Holy Angel University'||to == 'The Medical City Angeles'||to == 'Holy Family Medical Center')){
            jeep1 = 'MARISOL-PAMPANG-Walking';
            jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.14131,120.58783';
            jeep2End = '15.141278,120.587804';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from == 'Angeles Medical Center Inc.'||from == 'Dr. Amando L. Garcia Medical Center, Inc.' )&& (to == 'Marquee Mall'||to == 'Citi Center'||to == 'Republic Central Colleges'||to == 'Angeles City Hall')){
            jeep1 = 'MARISOL-PAMPANG-Walking';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PANDAN-PAMPANG';
            jeep1End = '15.14131,120.58783';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');
          }

          else if((from == 'Angeles Medical Center Inc.'||from == 'Dr. Amando L. Garcia Medical Center, Inc.' )&& to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'MARISOL-PAMPANG-Walking';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PAMPANG-HOLY';
            jeep1End = '15.14131,120.58783';
            jeep2End = '15.13914,120.58746';
            jeep3End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');
          }

          else if((from == 'Angeles Medical Center Inc.'||from == 'Dr. Amando L. Garcia Medical Center, Inc.' )&& to == 'Sacred Heart Medical Center'){
            jeep1 = 'MARISOL-PAMPANG-Walking';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'VILLA-PAMPANG';
            jeep1End = '15.14131,120.58783';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','back');
          }

          else if(from == 'Angeles Medical Center Inc.' && to == 'Dr. Amando L. Garcia Medical Center, Inc.'){
            jeep1 = 'MARISOL-PAMPANG-Walking';
            jeep1End = '15.14254,120.58971';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from == 'Dr. Amando L. Garcia Medical Center, Inc.' && to == 'Angeles Medical Center Inc.'){
            jeep1 = 'MARISOL-PAMPANG-Walking';
            jeep1End = '15.14124,120.58907';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from == 'Angeles Medical Center Inc.'||from=='Dr. Amando L. Garcia Medical Center, Inc.' )&& (to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'MARISOL-PAMPANG-Walking';
            jeep2 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if ((from == 'Angeles Medical Center Inc.'||from=='Dr. Amando L. Garcia Medical Center, Inc.' )&&(to=='Margot' || to == 'Sapang Bato')) {
            jeep1 = 'MARISOL-PAMPANG-Walking';
            jeep2 = 'SAPANG BATO-ANGELES';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.16258,120.55349';
            jeep3End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','forth','forth');
          }

          else if ((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center')&&(to==='Angeles City Hall'||to==='Citi Center'||to==='Marquee Mall')) {
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'PANDAN-PAMPANG';
            jeep1End = '15.143088,120.596546';
            jeep2End = '15.142905,120.596838';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth');
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center')&& to == 'Angeles Medical Center Inc.' ){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.14124,120.58907';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles') &&
          (to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol' || to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles') &&
          to == 'Lourdes North West'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }


          else if ((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='Holy Family Medical Center'||from=='The Medical City Angeles')&&(to=='Margot' || to == 'Sapang Bato')) {
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep4 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.14186,120.58799';
            jeep4End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','back','forth','forth');

          }

          else if ((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles')&&to==='Bancal') {
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='Marisol'||from=='The Medical City Angeles') && to == 'Diamond Subdivision' ){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16253,120.59107';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles') && to == 'Dr. Amando L. Garcia Medical Center, Inc.' ){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.14254,120.58971';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='Marisol'||from=='The Medical City Angeles') && to == 'Fields Avenue' ){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16749,120.58981';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles') && to == 'Holy Angel University'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'VILLA-PAMPANG-Walking';
            jeep1End = '15.13483,120.59063';
            jeep2End = '15.13483,120.59063';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from==='Holy Family Medical Center'||from=='The Medical City Angeles') && to == 'Holy Rosary Parish Church'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.13483,120.59063';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center') && to == 'Holy Family Medical Center'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.13990,120.59450';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles') && to == 'Immaculate Concepcion Parish' ){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.15900,120.59201';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles') && to == 'Jenra Mall' ){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.13622,120.58805';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles') && to == 'Main Gate Terminal' ){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16840,120.58442';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles') && to == 'Marisol' ){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.15293,120.59217';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles') && to == 'Nepo Mall' ){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.13567,120.58914';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='Holy Family Medical Center'||from=='The Medical City Angeles') && to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PAMPANG-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
          }

          else if ((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center')&&to==='Republic Central Colleges') {
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'PANDAN-PAMPANG';
            jeep1End = '15.137851,120.588826';
            jeep2End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='Marisol'||from=='The Medical City Angeles')&& to == 'SM City Clark' ){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16834,120.58275';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if ((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='Holy Family Medical Center'||from=='Marisol'||from=='The Medical City Angeles')&&to==='Sacred Heart Medical Center') {
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'VILLA-PAMPANG';
            jeep1End = '15.13483,120.59063';
            jeep2End = '15.13483,120.59063';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles') && to == 'Savers Mall' ){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16242,120.59110';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center'||from=='The Medical City Angeles') && to == 'Systems Plus College Foundation' ){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.15828,120.59222';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Angeles University Foundation'||from==='Angeles University Foundation Medical Center')&& to == 'The Medical City Angeles' ){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.13834,120.59335';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Margot'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol')&& (to == 'Angeles City Hall'||to == 'Citi Center'||to=='Marquee Mall'||to == 'Republic Central Colleges')){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PANDAN-PAMPANG';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.14186,120.58799';
            jeep3End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','forth','forth');
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Margot'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol')&& to == 'Angeles Medical Center Inc.'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep2 = 'MARISOL-PAMPANG-Walking';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Margot'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol') && (to == 'Angeles University Foundation'||to == 'Angeles University Foundation Medical Center')){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'MARISOL-PAMPANG';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.14186,120.58799';
            jeep3End = '15.13892,120.58768';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','forth','back');
          }

          else if ((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Margot'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol')&&to==='Bancal') {
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.14988,120.58427';
            jeep2End = '15.14988,120.58427';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if((from==='Anunas'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Sapang Bato'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Villa Sol')&& to == 'Carmenville' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14539,120.56643';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Villa Sol')&& to == 'City College of Angeles' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14917,120.57793';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Anunas'||from=='Friendship'||from=='Friendship Plaza'||from=='Sapang Bato'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Villa Sol')&& to == 'Cuayan' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14449,120.55945';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Villa Sol')&& to == 'Friendship' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16304,120.55475';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Friendship'||from=='Sapang Bato'||from=='Villa Sol')&& to == 'Friendship Plaza' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15091,120.55946';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Friendship Plaza'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2')&& to == 'Friendship' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16304,120.55475';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from=='Timog Park Gate 1'||from=='Timog Park Gate 2')&& to == 'Friendship Plaza' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15091,120.55946';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Anunas'||from=='Sapang Bato')&& to == 'Friendship Plaza' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15091,120.55946';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Villa Sol')&& to == 'Lourdes North West' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14186,120.58799';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }
          //plaza
          else if((from==='Cuayan'||from==='Carmenville'||from=='City College of Angeles')&& to == 'Friendship Plaza' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15091,120.55946';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Anunas'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Sapang Bato'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol')&& to == 'Timog Park Gate 1' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14505,120.56465';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Anunas'||from=='Friendship'||from=='Friendship Plaza'||from=='Sapang Bato'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol')&& to == 'Timog Park Gate 2' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14776,120.559465';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }
          else if((from==='Cuayan'||from=='Timog Park Gate 1')&& to == 'Timog Park Gate 2' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14776,120.559465';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from==='Timog Park Gate 1'&& to == 'Cuayan' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14449,120.55945';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Anunas'||from=='Friendship'||from=='Sapang Bato'||from=='Transfer'||from=='Villa Sol')&& to == 'Timog Park Gate 3' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15069,120.55945';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Cuayan'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2')&& to == 'Timog Park Gate 3' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15069,120.55945';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Villa Sol')&& to == 'Transfer' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16258,120.55349';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='Cuayan'||from=='Friendship Plaza'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3')&& to == 'Villa Sol' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15803,120.55970';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from=='Friendship'||from=='Transfer')&& to == 'Villa Sol' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15803,120.55970';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Villa Sol')&& (to == 'Margot'||to == 'Sapang Bato') ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep2 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16258,120.55349';
            jeep2End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Margot'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol') && (to == 'Diamond Subdivision'||to == 'Fields Avenue' || to == 'Immaculate Concepcion Parish'||to == 'Main Gate Terminal'||to=='Marisol'||to=='SM City Clark'||to=='Savers Mall'||to=='Systems Plus College Foundation')){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.14502,120.58873';
            jeep2End = '15.14502,120.58873';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Margot'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol') && to == 'Dr. Amando L. Garcia Medical Center, Inc.'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep2 = 'MARISOL-PAMPANG-Walking';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Margot'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol') && (to == 'Holy Angel University'||to == 'Holy Family Medical Center'||to == 'Holy Rosary Parish Church' || to == 'Jenra Mall' || to == 'Nepo Mall'||to=='The Medical City Angeles')){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth',null);
          }

          else if((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Margot'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol') && to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PAMPANG-HOLY';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.14186,120.58799';
            jeep3End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','forth','forth');
          }


          else if((from==='Anunas'||from==='Carmenville'||from==='City College of Angeles'||from==='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Margot'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol')&& to == 'Sacred Heart Medical Center'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'VILLA-PAMPANG';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.14186,120.58799';
            jeep3End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','back');
          }

          else if(from==='Bancal' && (to == 'Angeles City Hall'||to == 'Citi Center'||to=='Marquee Mall'||to == 'Republic Central Colleges')){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'PANDAN-PAMPANG';
            jeep1End = '15.137851,120.588826';
            jeep2End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Bancal' && (to == 'Angeles Medical Center Inc.'||to == 'Angeles University Foundation'||to == 'Angeles University Foundation Medical Center'||to=='Dr. Amando L. Garcia Medical Center, Inc.')){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'MARISOL-PAMPANG';
            jeep1End = '15.13884,120.58757';
            jeep2End = '15.1388493,120.58765070000001';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if(from==='Bancal' && (to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if (from==='Bancal' &&(to=='Margot' || to == 'Sapang Bato')) {
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'SAPANG BATO-ANGELES';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.16258,120.55349';
            jeep3End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');

          }

          else if(from==='Bancal' && (to == 'Diamond Subdivision'||to == 'Fields Avenue' || to == 'Immaculate Concepcion Parish'||to=='Marisol'||to=='Savers Mall'||to=='Systems Plus College Foundation')){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.14502,120.58873';
            jeep2End = '15.14502,120.58873';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if(from==='Bancal' && (to == 'Holy Angel University'||to == 'Holy Rosary Parish Church')){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'VILLA-PAMPANG';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Bancal' && to == 'Holy Family Medical Center'){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Bancal' && to == 'Immaculate Concepcion Parish'){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.14502,120.58873';
            jeep2End = '15.14502,120.58873';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if(from==='Bancal' && (to == 'Jenra Mall'||to == 'Nepo Mall')){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'CHECK-POINT-HOLY-Walking';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if(from==='Bancal'&& to == 'Lourdes North West' ){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.14186,120.58799';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from==='Bancal'&& to == 'Main Gate Terminal' ){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'CHECK-POINT-HOLY-Walking2';
            jeep1End = '15.166388,120.582832';
            jeep2End = '15.166388,120.582832';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth');
          }

          else if(from==='Bancal' && to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'PAMPANG-HOLY';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Bancal'&& to == 'SM City Clark' ){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'CHECK-POINT-HOLY-Walking3';
            jeep1End = '15.166388,120.582832';
            jeep2End = '15.166388,120.582832';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth');
          }

          else if(from==='Bancal' && to == 'Sacred Heart Medical Center'){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'VILLA-PAMPANG';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if(from==='Bancal' && to == 'The Medical City Angeles'){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if((from==='Carmenville'||from==='Cuayan'||from==='City College of Angeles'||from==='Timog Park Gate 1'||from==='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Friendship Plaza')&& to == 'Anunas' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.153712,120.560274';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Carmenville'||from==='City College of Angeles')&& to == 'Cuayan' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14449,120.55945';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from==='Carmenville'&& to == 'Timog Park Gate 2' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14776,120.559465';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from==='Carmenville'&& to == 'Timog Park Gate 3' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15069,120.55945';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from==='City College of Angeles'&& to == 'Carmenville' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14539,120.56643';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }


          else if(from==='Citi Center'&& to == 'Angeles City Hall' ){
            jeep1 = 'PANDAN-PAMPANG';
            jeep1End = '15.16451,120.60811';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
            console.log('ac citi');
          }

          else if(from==='Citi Center'&& to == 'Marquee Mall' ){
            jeep1 = 'PANDAN-PAMPANG';
            jeep1End = '15.162432,120.608675';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from==='City College of Angeles'&& to == 'Timog Park Gate 1' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14505,120.56465';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from==='City College of Angeles'&& to == 'Timog Park Gate 2' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14776,120.559465';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from==='City College of Angeles'&& to == 'Timog Park Gate 3' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15069,120.55945';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from==='City College of Angeles'&& to == 'Transfer' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16258,120.55349';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from==='City College of Angeles'&& to == 'Villa Sol' ){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15803,120.55970';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Main Gate Terminal'||from=='SM City Clark'||from=='Savers Mall'||from=='Systems Plus College Foundation')&& (to == 'Angeles Medical Center Inc.'||to=='Dr. Amando L. Garcia Medical Center, Inc.')){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'MARISOL-PAMPANG';
            jeep1End = '15.138817,120.587592';
            jeep2End = '15.1388493,120.58765070000001';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }


          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Main Gate Terminal'||from=='SM City Clark'||from=='Savers Mall'||from=='Systems Plus College Foundation')&& (to == 'Angeles University Foundation'||to == 'Angeles University Foundation Medical Center'||to == 'Holy Family Medical Center')){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'MARISOL-PAMPANG';
            jeep1End = '15.15259,120.59180';
            jeep2End = '15.15259,120.59180';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }


          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='SM City Clark'||from=='Savers Mall'||from=='Systems Plus College Foundation')&& (to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Savers Mall'||from=='Systems Plus College Foundation')&& to == 'Bancal'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.14502,120.58873';
            jeep2End = '15.14502,120.58873';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Main Gate Terminal'||from=='Lourdes North West'||from=='SM City Clark'||from=='Savers Mall'||from=='Systems Plus College Foundation')&& (to == 'Marquee Mall'||to == 'Citi Center'||to == 'Republic Central Colleges'||to == 'Angeles City Hall')){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'PANDAN-PAMPANG';
            jeep1End = '15.137851,120.588826';
            jeep2End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from == 'Diamond Subdivision'||from==='Immaculate Concepcion Parish'||from=='Savers Mall'||from=='Systems Plus College Foundation')&& to == 'Fields Avenue'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16749,120.58981';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from == 'Fields Avenue'||from=='Main Gate Terminal')&&to == 'Diamond Subdivision'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16253,120.59107';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from == 'Immaculate Concepcion Parish'||from=='Systems Plus College Foundation')&&to == 'Diamond Subdivision'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16253,120.59107';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Savers Mall'||from==='Lourdes North West'||from=='Systems Plus College Foundation') && to == 'Holy Angel University'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13417,120.59130';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Savers Mall'||from==='Lourdes North West'||from=='Systems Plus College Foundation') && to == 'Holy Rosary Parish Church'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13483,120.59063';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from=='SM City Clark'||from=='Savers Mall') && to == 'Immaculate Concepcion Parish' ){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.15900,120.59201';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Savers Mall'||from=='Systems Plus College Foundation') && to == 'Jenra Mall'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13622,120.58805';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Savers Mall'||from=='Systems Plus College Foundation') && to == 'Nepo Mall'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13567,120.58914';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='SM City Clark'||from=='Savers Mall'||from=='Systems Plus College Foundation') && to == 'Lourdes North West'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.14186,120.58799';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from=='Savers Mall') && to == 'Systems Plus College Foundation'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.15828,120.59222';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Marisol'||from=='Savers Mall'||from=='Systems Plus College Foundation') && to == 'Main Gate Terminal'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16840,120.58442';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Main Gate Terminal'||from=='Savers Mall'||from=='Systems Plus College Foundation') && to == 'Marisol'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.152765,120.591903';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Savers Mall'||from=='Systems Plus College Foundation') && to == 'SM City Clark'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16834,120.58275';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if(from==='Fields Avenue' && to == 'Savers Mall'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16242,120.59110';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if((from==='Immaculate Concepcion Parish'||from=='Marisol'||from=='Systems Plus College Foundation') && to == 'Savers Mall'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16242,120.59110';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
          }

          else if ((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Main Gate Terminal'||from=='SM City Clark'||from=='Savers Mall'||from=='Systems Plus College Foundation') &&(to=='Margot' || to == 'Sapang Bato')) {
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep2 = 'SAPANG BATO-ANGELES';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.16258,120.55349';
            jeep3End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Lourdes North West'||from=='Main Gate Terminal'||from=='SM City Clark'||from=='Savers Mall'||from=='Systems Plus College Foundation') && to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'PAMPANG-HOLY';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Main Gate Terminal'||from=='Savers Mall'||from=='Systems Plus College Foundation') && to == 'Sacred Heart Medical Center'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep2 = 'VILLA-PAMPANG';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if((from==='Diamond Subdivision'||from==='Fields Avenue'||from==='Immaculate Concepcion Parish'||from=='Savers Mall'||from=='Systems Plus College Foundation'||from=='Main Gate Terminal') && to == 'The Medical City Angeles'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13834,120.59335';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Holy Angel University' && (to=='Angeles City Hall'||to=='Citi Center'||to=='Marquee Mall'||to=='Republic Central Colleges')){
            jeep1 = 'MARISOL-PAMPANG-Walking2';
            jeep2  = 'MARISOL-PAMPANG';
            jeep3 = 'PANDAN-PAMPANG';
            jeep1End = '15.13483,120.59063';
            jeep2End = '15.13483,120.59063';
            jeep3End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');
          }

          else if(from==='Holy Angel University' && to == 'Bancal'){
            jeep1 = 'MARISOL-PAMPANG-Walking2';
            jeep2  = 'MARISOL-PAMPANG';
            jeep3 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.13483,120.59063';
            jeep2End = '15.13483,120.59063';
            jeep3End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','back');
          }

          else if (from=='Holy Angel University'&&(to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')) {
            jeep1 = 'MARISOL-PAMPANG-Walking2';
            jeep2 = 'MARISOL-PAMPANG';
            jeep3 = 'CHECK-POINT-HOLY';
            jeep4 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13483,120.59063';
            jeep2End = '15.13483,120.59063';
            jeep3End = '15.13642,120.58772';
            jeep4End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','forth','back','forth');
          }

          else if((from == 'Holy Angel University') && to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'MARISOL-PAMPANG-Walking3';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PAMPANG-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
          }

          else if (from=='Holy Angel University'&&(to == 'Margot'||to == 'Sapang Bato')) {
            jeep1 = 'MARISOL-PAMPANG-Walking3';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep4 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.14186,120.58799';
            jeep4End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','back','forth','forth');
          }

          else if(from==='Holy Angel University' && (to == 'Angeles Medical Center Inc.'||to=='Dr. Amando L. Garcia Medical Center, Inc.'||to == 'Jenra Mall' ||to == 'Nepo Mall' )){
            console.log('holi2');
            jeep1 = 'MARISOL-PAMPANG-Walking2';
            jeep2  = 'MARISOL-PAMPANG';
            jeep1End = '15.13483,120.59063';
            jeep2End = '15.13483,120.59063';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from==='Holy Angel University'||from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to == 'Angeles University Foundation'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.14544,120.59530';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from==='Holy Angel University'||from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to == 'Angeles University Foundation Medical Center'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.14527,120.59539';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from==='Holy Angel University'||from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to == 'Diamond Subdivision'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16253,120.59107';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Holy Angel University'||from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to == 'Fields Avenue'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16749,120.58981';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Holy Angel University'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to == 'Holy Family Medical Center'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13990,120.59450';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Holy Angel University'||from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Marisol'||from=='Nepo Mall') && to == 'Immaculate Concepcion Parish'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.15900,120.59201';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Holy Angel University'||from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to == 'Main Gate Terminal'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16840,120.58442';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Holy Angel University'||from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to == 'Marisol'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.15293,120.59217';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Holy Angel University'||from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to == 'SM City Clark'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16834,120.58275';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Holy Angel University'||from=='Holy Rosary Parish Church'||from=='Nepo Mall') && to == 'Sacred Heart Medical Center'){
            jeep1  = 'VILLA-PAMPANG';
            jeep1End = '15.12493,120.59831';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Holy Angel University'||from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to == 'Savers Mall'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16242,120.59110';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Holy Angel University'||from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Marisol'||from=='Nepo Mall')&& to == 'Systems Plus College Foundation'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.15828,120.59222';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Holy Angel University'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to == 'The Medical City Angeles'){
            jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13834,120.59335';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Holy Angel University'&& to == 'Lourdes North West'){
            jeep1 = 'MARISOL-PAMPANG-Walking2';
            jeep2 = 'MARISOL-PAMPANG';
            jeep3 = 'CHECK-POINT-HOLY';
            jeep1End = '15.13483,120.59063';
            jeep2End = '15.13483,120.59063';
            jeep3End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','back');
          }

          else if((from==='Holy Family Medical Center')&&(to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
          }

          else if(from==='Holy Family Medical Center' && to=='Bancal'){
            jeep1  = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if((from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to=='Angeles Medical Center Inc.'){
            jeep1  = 'MARISOL-PAMPANG';
            jeep1End = '15.14124,120.58907';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church'||from=='Jenra Mall'||from=='Nepo Mall') && to=='Dr. Amando L. Garcia Medical Center, Inc.'){
            jeep1  = 'MARISOL-PAMPANG';
            jeep1End = '15.14254,120.58971';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church') && to=='Jenra Mall'){
            jeep1  = 'MARISOL-PAMPANG';
            jeep1End = '15.13622,120.58805';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from==='Holy Family Medical Center'||from=='Holy Rosary Parish Church') && to=='Nepo Mall'){
            jeep1  = 'MARISOL-PAMPANG';
            jeep1End = '15.13567,120.58914';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Holy Family Medical Center' && to=='Republic Central Colleges'){
            jeep1  = 'PANDAN-PAMPANG';
            jeep1End = '15.13927,120.59037';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Holy Family Medical Center') && to=='Holy Angel University'){
            jeep1  = 'MARISOL-PAMPANG';
            jeep2  = 'MARISOL-PAMPANG-Walking4';
            jeep1End = '15.13483,120.59063';
            jeep2End = '15.13483,120.59063';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Holy Family Medical Center'&& to == 'Lourdes North West'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if(from==='Holy Rosary Parish Church' && (to=='Angeles City Hall'||to=='Citi Center'||to=='Marquee Mall'||to=='Republic Central Colleges')){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2  = 'PANDAN-PAMPANG';
            jeep1End = '15.137851,120.588826';
            jeep2End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if (from==='Holy Rosary Parish Church'&&(to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')) {
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
          }

          else if(from==='Holy Rosary Parish Church'&& to == 'Bancal'){
            jeep1  = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if(from==='Holy Rosary Parish Church'&& to == 'Holy Family Medical Center'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13990,120.59450';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Holy Rosary Parish Church'&& to == 'Lourdes North West'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if (from=='Holy Rosary Parish Church'&&(to == 'Margot'||to == 'Sapang Bato')) {
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep4 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.14186,120.58799';
            jeep4End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','back','forth','forth');
          }

          else if((from == 'Holy Rosary Parish Church') && to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PAMPANG-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
          }

          else if(from==='Immaculate Concepcion Parish' && (to=='Angeles City Hall'||to=='Citi Center'||to=='Marquee Mall')){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2  = 'PANDAN-PAMPANG';
            jeep1End = '15.137851,120.588826';
            jeep2End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from==='Jenra Mall'||from=='Nepo Mall') && (to=='Angeles City Hall'||to=='Citi Center'||to=='Marquee Mall'||to=='Republic Central Colleges')){
            jeep1 = 'PANDAN-PAMPANG-Walking';
            jeep2  = 'PANDAN-PAMPANG';
            jeep1End = '15.137851,120.588826';
            jeep2End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from==='Jenra Mall'||from=='Nepo Mall')&&(to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'MARISOL-PAMPANG-Walking5';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
          }

          else if((from==='Jenra Mall'||from=='Nepo Mall') && to=='Bancal'){
            jeep1  = 'MARISOL-PAMPANG-Walking5';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if(from==='Jenra Mall' && to=='Holy Angel University'){
            jeep1  = 'VILLA-PAMPANG';
            jeep1End = '15.13417,120.59130';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Jenra Mall' && to=='Holy Rosary Parish Church'){
            jeep1  = 'VILLA-PAMPANG';
            jeep1End = '15.13483,120.59063';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Jenra Mall' && to=='Sacred Heart Medical Center'){
            jeep1  = 'VILLA-PAMPANG';
            jeep1End = '15.12493,120.59831';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Jenra Mall'||from=='Nepo Mall') && to=='Lourdes North West'){
            jeep1  = 'MARISOL-PAMPANG-Walking5';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if ((from=='Jenra Mall'||from=='Nepo Mall')&&(to == 'Margot'||to == 'Sapang Bato')) {
            jeep1 = 'MARISOL-PAMPANG-Walking5';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep4 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.14186,120.58799';
            jeep4End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','back','forth','forth');
          }

          else if((from=='Jenra Mall'||from=='Nepo Mall')&& to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'MARISOL-PAMPANG-Walking5';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PAMPANG-HOLY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            jeep3End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
          }

          else if(from==='Lourdes North West' && (to == 'Angeles Medical Center Inc.'||to == 'Angeles University Foundation'||to == 'Angeles University Foundation Medical Center'||to=='Dr. Amando L. Garcia Medical Center, Inc.')){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'MARISOL-PAMPANG';
            jeep1End = '15.138817,120.587592';
            jeep2End = '15.1388493,120.58765070000001';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if(from==='Lourdes North West' && to == 'Anunas'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.153712,120.560274';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'Carmenville'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14539,120.56643';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'Cuayan'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14449,120.55945';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'City College of Angeles'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14917,120.57793';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'Friendship'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16304,120.55475';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'Friendship Plaza'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15091,120.55946';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && (to == 'Margot'||to == 'Sapang Bato')){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep2 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16258,120.55349';
            jeep2End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }
          //
          // else if(from==='Lourdes North West' && ){
          //   jeep1 = 'SAPANG BATO-ANGELES';
          //   jeep1End = '15.16966,120.51317';
          //   getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          // }

          else if(from==='Lourdes North West' && to == 'Timog Park Gate 1'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14505,120.56465';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'Timog Park Gate 2'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14776,120.559465';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'Timog Park Gate 3'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15069,120.55945';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'Transfer'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16258,120.55349';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'Villa Sol'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15803,120.55970';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'Bancal'){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.15346,120.58335';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Lourdes North West' && to == 'Diamond Subdivision'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.16253,120.59107';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Lourdes North West' && to == 'Fields Avenue'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.16749,120.58981';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Lourdes North West' && to == 'Immaculate Concepcion Parish'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.15900,120.59201';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Lourdes North West' && to == 'Main Gate Terminal'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.16840,120.58442';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Lourdes North West' && to == 'Marisol'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.15293,120.59217';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Lourdes North West' && to == 'SM City Clark'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.16834,120.58275';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Lourdes North West' && to == 'Savers Mall'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.16242,120.59110';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Lourdes North West' && to == 'Systems Plus College Foundation'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.15828,120.59222';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Lourdes North West' && to == 'Holy Family Medical Center'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13990,120.59450';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'Jenra Mall'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13622,120.58805';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'Nepo Mall'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13567,120.58914';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && to == 'The Medical City Angeles'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13834,120.59335';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Lourdes North West' && (to=='Citi Center'||to=='Marquee Mall'||to=='Republic Central Colleges')){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2  = 'PANDAN-PAMPANG';
            jeep1End = '15.137851,120.588826';
            jeep2End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Lourdes North West' && to == 'Sacred Heart Medical Center'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'VILLA-PAMPANG';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if(from==='Main Gate Terminal' && to == 'Fields Avenue'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.16749,120.58981';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Main Gate Terminal' && to == 'Holy Angel University'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13417,120.59130';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Main Gate Terminal' && to == 'Holy Rosary Parish Church'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13483,120.59063';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Main Gate Terminal' && to == 'Jenra Mall'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13622,120.58805';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Main Gate Terminal' && to == 'Nepo Mall'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13567,120.58914';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Main Gate Terminal' && to == 'Immaculate Concepcion Parish'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.15900,120.59201';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Main Gate Terminal' && to == 'Lourdes North West'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.14186,120.58799';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }



          else if(from=='Main Gate Terminal'&& (to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan'|| to == 'Friendship Plaza')){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14186,120.58799';
            jeep2End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Main Gate Terminal' && to == 'Friendship'){
            jeep1 = 'MAINGATE-FRIENDSHIP-Walking';
            jeep2 = 'MAINGATE-FRIENDSHIP';
            jeep1End = '15.166427,120.583066';
            jeep2End = '15.166427,120.583066';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from==='Margot'||from=='Sapang Bato'||from=='Transfer'||from=='Villa Sol'||from=='Friendship') && to == 'Anunas'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.153712,120.560274';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Margot'||from=='Transfer') && to == 'Carmenville'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14539,120.56643';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Margot'||from=='Transfer') && to == 'City College of Angeles'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14917,120.57793';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Margot'||from=='Transfer') && to == 'Cuayan'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14449,120.55945';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Margot'||from=='Sapang Bato'||from=='Transfer') && to == 'Friendship'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16304,120.55475';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Margot'||from=='Sapang Bato'||from=='Transfer') && to == 'Friendship Plaza'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15091,120.55946';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Margot'||from=='Sapang Bato'||from=='Transfer') && to == 'Lourdes North West'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14186,120.58799';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Margot' && to == 'Sapang Bato'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16966,120.51317';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from == 'Sapang Bato'&&to==='Margot'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.17078,120.53471';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Margot' && to == 'Timog Park Gate 1'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14505,120.56465';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Margot' && to == 'Timog Park Gate 2'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.14776,120.559465';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Margot' && to == 'Timog Park Gate 3'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15069,120.55945';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Margot'||from=='Sapang Bato') && to == 'Transfer'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16258,120.55349';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if((from==='Margot'||from=='Sapang Bato') && to == 'Villa Sol'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15803,120.55970';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='Transfer' && to == 'Margot'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.17078,120.53471';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Transfer' && to == 'Sapang Bato'){
            jeep1 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.16966,120.51317';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Marisol' &&(to=='Angeles City Hall'||to=='Citi Center'||to=='Marquee Mall')){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'PANDAN-PAMPANG';
            jeep1End = '15.143088,120.596546';
            jeep2End = '15.142838,120.596806';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Marisol' &&to=='Republic Central Colleges'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'PANDAN-PAMPANG';
            jeep1End = '15.137851,120.588826';
            jeep2End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if(from==='Marisol' &&to=='Angeles Medical Center Inc.'){
            console.log('mrii');
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.14124,120.58907';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Marisol' &&to=='Angeles University Foundation Medical Center'){
            console.log('mrii');
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.14527,120.59539';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Marisol' &&to=='Angeles University Foundation'){
            console.log('mrii');
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.14544,120.59530';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Marisol' &&to=='Dr. Amando L. Garcia Medical Center, Inc.'){
            console.log('mrii');
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.14254,120.58971';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Marisol' &&(to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'CHECK-POINT-HOLY-Walking4';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15259,120.59180';
            jeep2End = '15.15259,120.59180';
            jeep3End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');
          }

          else if(from==='Marisol' &&(to == 'Margot'||to=='Sapang Bato')){
            console.log('marimarg');
            jeep1 = 'CHECK-POINT-HOLY-Walking4';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep4 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.15259,120.59180';
            jeep2End = '15.15259,120.59180';
            jeep3End = '15.14186,120.58799';
            jeep4End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','forth','forth','forth');
          }


          else if(from==='Marisol' &&to=='Bancal'){
            jeep1 = 'CHECK-POINT-HOLY-Walking4';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.15259,120.59180';
            jeep2End = '15.15259,120.59180';
            jeep3End = '15.14502,120.58873';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','back');
          }

          else if(from==='Marisol' && to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'PAMPANG-HOLY';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Marisol' && to == 'Holy Angel University'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13417,120.59130';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Marisol' && to == 'Holy Family Medical Center'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.13990,120.59450';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Marisol' && to == 'Holy Rosary Parish Church'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.13483,120.59063';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Marisol' && to == 'Jenra Mall'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.13622,120.58805';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Marisol' && to == 'Nepo Mall'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.13567,120.58914';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Marisol' && to == 'Lourdes North West'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.14186,120.58799';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Marisol' && to == 'The Medical City Angeles'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.13834,120.59335';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Nepo Mall' && to == 'Holy Angel University'){
            jeep1 = 'VILLA-PAMPANG';
            jeep1End = '15.13417,120.59130';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Nepo Mall' && to == 'Holy Rosary Parish Church'){
            jeep1 = 'VILLA-PAMPANG';
            jeep1End = '15.13483,120.59063';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Rafael Lazatin Memorial Medical Center' &&(to=='Angeles City Hall'||to=='Citi Center'||to=='Marquee Mall'||to=='Republic Central Colleges')){

            jeep1 = 'PAMPANG-HOLY';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PANDAN-PAMPANG';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.13784,120.58891';

            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','forth','forth');
          }

          else if(from==='Rafael Lazatin Memorial Medical Center' &&(to == 'Angeles Medical Center Inc.'||to=='Dr. Amando L. Garcia Medical Center, Inc.' )){
            jeep1 = 'PAMPANG-HOLY';
            jeep2 = 'MARISOL-PAMPANG';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.1388493,120.58765070000001';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth');
          }

          else if(from==='Rafael Lazatin Memorial Medical Center' &&(to=='Angeles University Foundation'||to=='Angeles University Foundation Medical Center')){
            jeep1 = 'PAMPANG-HOLY';
            jeep2 = 'MARISOL-PAMPANG';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.1388493,120.58765070000001';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if(from==='Rafael Lazatin Memorial Medical Center' &&(to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'PAMPANG-HOLY';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.13914,120.58746';
            jeep3End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
          }

          else if(from==='Rafael Lazatin Memorial Medical Center' &&to=='Bancal'){
            jeep1 = 'PAMPANG-HOLY';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if(from==='Rafael Lazatin Memorial Medical Center' &&(to == 'Immaculate Concepcion Parish'||to == 'Marisol'||to == 'Main Gate Terminal'||to == 'Fields Avenue'||to == 'SM City Clark'||to == 'Systems Plus College Foundation'||to == 'Diamond Subdivision'||to == 'Savers Mall'||to=='Lourdes North West')){
            jeep1 = 'PAMPANG-HOLY';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if(from==='Rafael Lazatin Memorial Medical Center' &&(to == 'Holy Rosary Parish Church'||to == 'Jenra Mall'||to == 'Nepo Mall'||to == 'Holy Angel University'||to == 'The Medical City Angeles'||to == 'Holy Family Medical Center')){
            jeep1 = 'PAMPANG-HOLY';
            jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if(from==='Rafael Lazatin Memorial Medical Center' &&(to == 'Margot'||to=='Sapang Bato')){
            jeep1 = 'PAMPANG-HOLY';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep4 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.13914,120.58746';
            jeep3End = '15.14186,120.58799';
            jeep4End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'back','back','forth','forth');
          }

          else if(from==='Rafael Lazatin Memorial Medical Center' &&to == 'Sacred Heart Medical Center'){
            jeep1 = 'PAMPANG-HOLY';
            jeep2 = 'VILLA-PAMPANG';
            jeep1End = '15.13914,120.58746';
            jeep2End = '15.138799,120.587541';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if((from==='Republic Central Colleges'||from=='Holy Family Medical Center') &&to=='Angeles City Hall'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep1End = '15.16451,120.60811';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from==='Republic Central Colleges'||from=='Holy Family Medical Center') &&to=='Citi Center'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep1End = '15.15181,120.60971';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from==='Republic Central Colleges'||from=='Holy Family Medical Center') &&to=='Marquee Mall'){
            jeep1 = 'PANDAN-PAMPANG';
            jeep1End = '15.162432,120.608675';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Republic Central Colleges' &&(to == 'Angeles Medical Center Inc.'||to=='Dr. Amando L. Garcia Medical Center, Inc.')){
            jeep1 = 'PANDAN-PAMPANG-Walking2';
            jeep2 = 'MARISOL-PAMPANG';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth');
          }

          else if(from==='Republic Central Colleges' &&(to=='Angeles University Foundation'||to=='Angeles University Foundation Medical Center')){
            jeep1 = 'PANDAN-PAMPANG-Walking2';
            jeep2 = 'MARISOL-PAMPANG';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','backp');
          }

          else if(from==='Republic Central Colleges'&&to=='Bancal'){
            jeep1 = 'PANDAN-PAMPANG-Walking2';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if(from==='Republic Central Colleges' &&(to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'PANDAN-PAMPANG-Walking2';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
          }

          else if(from==='Republic Central Colleges' &&(to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'PANDAN-PAMPANG-Walking2';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
          }

          else if(from==='Republic Central Colleges' &&(to == 'Margot'||to=='Sapang Bato')){
            jeep1 = 'PANDAN-PAMPANG-Walking2';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep4 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.14186,120.58799';
            jeep4End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'back','back','forth','forth');
          }

          else if(from==='Republic Central Colleges' &&(to == 'Diamond Subdivision'||to == 'Fields Avenue' || to == 'Immaculate Concepcion Parish'||to == 'Main Gate Terminal'||to=='Marisol'||to=='SM City Clark'||to=='Savers Mall'||to=='Systems Plus College Foundation'||to=='Lourdes North West')){
            jeep1 = 'PANDAN-PAMPANG-Walking2';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }

          else if(from==='Republic Central Colleges' &&(to == 'Holy Rosary Parish Church'||to == 'Jenra Mall'||to == 'Nepo Mall'||to == 'Holy Angel University'||to=='Sacred Heart Medical Center')){
            jeep1 = 'PANDAN-PAMPANG-Walking2';
            jeep2 = 'VILLA-PAMPANG';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.13784,120.58891';
            console.log('pp');
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
          }
          else if(from==='Republic Central Colleges' &&(to == 'The Medical City Angeles'||to == 'Holy Family Medical Center')){
            jeep1 = 'PANDAN-PAMPANG-Walking2';
            jeep2 = 'VILLA-PAMPANG';
            jeep3 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.13784,120.58891';
            jeep3End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','back');
          }

          else if(from == 'Republic Central Colleges' && to == 'Rafael Lazatin Memorial Medical Center'){
            jeep1 = 'PANDAN-PAMPANG-Walking2';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'PAMPANG-HOLY';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
          }

          else if(from == 'SM City Clark' && to == 'Bancal'){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY-Walking';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.166388,120.582832';
            jeep2End = '15.166388,120.582832';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,jeep3End,null,'back','forth');
          }

          else if(from == 'Main Gate Terminal' && to == 'Bancal'){
            jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY-Walking2';
            jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.166388,120.582832';
            jeep2End = '15.166388,120.582832';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,jeep3End,null,'back','forth');
          }

          else if(from == 'SM City Clark'&&to == 'Diamond Subdivision'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.16253,120.59107';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from == 'SM City Clark'&&to == 'Fields Avenue'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.16749,120.58981';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from == 'SM City Clark'||from=='Main Gate Terminal')&&to == 'Savers Mall'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.16242,120.59110';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if((from == 'SM City Clark'||from=='Main Gate Terminal')&&to == 'Systems Plus College Foundation'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.15828,120.59222';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from == 'SM City Clark'&&(to=='Holy Angel University'||to=='Holy Rosary Parish Church'||to=='Sacred Heart Medical Center')){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'VILLA-PAMPANG';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from == 'SM City Clark'&&(to=='Jenra Mall'||to=='Nepo Mall')){
            console.log('walking5');
            jeep1 = 'CHECK-POINT-HOLY';
            jeep2 = 'CHECK-POINT-HOLY-Walking5';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if((from==='SM City Clark') && to == 'Marisol'){
            jeep1 = 'CHECK-POINT-HOLY';
            jeep1End = '15.152765,120.591903';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
          }

          else if(from==='SM City Clark' && to == 'The Medical City Angeles'){
            jeep1  = 'CHECK-POINT-HOLY';
            jeep2  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13642,120.58772';
            jeep2End = '15.13642,120.58772';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Sacred Heart Medical Center' &&(to == 'Marquee Mall'||to == 'Citi Center'||to == 'Republic Central Colleges'||to == 'Angeles City Hall')){
            jeep1  = 'VILLA-PAMPANG';
            jeep2  = 'PANDAN-PAMPANG';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Sacred Heart Medical Center' &&(to == 'Angeles Medical Center Inc.'||to=='Dr. Amando L. Garcia Medical Center, Inc.')){
            jeep1  = 'VILLA-PAMPANG';
            jeep2  = 'MARISOL-PAMPANG';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='Sacred Heart Medical Center' &&(to=='Angeles University Foundation Medical Center'||to=='Angeles University Foundation'||to=='Holy Family Medical Center'||to=='The Medical City Angeles')){
            jeep1  = 'VILLA-PAMPANG';
            jeep2  = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13357,120.59185';
            jeep2End = '15.13357,120.59185';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if(from==='Sacred Heart Medical Center' &&
          (to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol' || to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')){
            jeep1 = 'VILLA-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.14186,120.58799';
            getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
          }

          else if(from==='Sacred Heart Medical Center' &&
          (to == 'Margot'||to=='Sapang Bato')){
            jeep1 = 'VILLA-PAMPANG';
            jeep2 = 'CHECK-POINT-HOLY';
            jeep3 = 'SAPANG BATO-ANGELES';
            jeep4 = 'SAPANG BATO-ANGELES';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            jeep3End = '15.14186,120.58799';
            jeep4End = '15.16258,120.55349';
            getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','back','forth','forth');
          }
          else if(from==='Sacred Heart Medical Center' &&to == 'Bancal'){
            jeep1  = 'VILLA-PAMPANG';
            jeep2  = 'CHECK-POINT-HENSONVILLE-HOLY';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }
          else if(from==='Sacred Heart Medical Center' &&(to == 'Immaculate Concepcion Parish'||to == 'Marisol'||to == 'Main Gate Terminal'||to == 'Fields Avenue'||to == 'SM City Clark'||to == 'Systems Plus College Foundation'||to == 'Diamond Subdivision'||to == 'Savers Mall'||to=='Lourdes North West')){
            jeep1  = 'VILLA-PAMPANG';
            jeep2  = 'CHECK-POINT-HOLY';
            jeep1End = '15.13784,120.58891';
            jeep2End = '15.137851,120.588826';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
          }

          else if(from==='Sacred Heart Medical Center' &&(to == 'Holy Angel University')){
            jeep1  = 'VILLA-PAMPANG';
            jeep1End = '15.13417,120.59130';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Sacred Heart Medical Center' &&(to == 'Holy Rosary Parish Church')){
            jeep1  = 'VILLA-PAMPANG';
            jeep1End = '15.13483,120.59063';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Sacred Heart Medical Center' &&(to == 'Jenra Mall')){
            jeep1  = 'VILLA-PAMPANG';
            jeep1End = '15.13622,120.58805';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Sacred Heart Medical Center' &&(to == 'Nepo Mall')){
            jeep1  = 'VILLA-PAMPANG';
            jeep1End = '15.13567,120.58914';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='Sacred Heart Medical Center' &&(to == 'Rafael Lazatin Memorial Medical Center')){
            jeep1  = 'VILLA-PAMPANG';
            jeep2  = 'PAMPANG-HOLY';
            jeep1End = '15.138799,120.587541';
            jeep2End = '15.13914,120.58746';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='The Medical City Angeles'&&(to=='Angeles City Hall'||to=='Citi Center'||to=='Marquee Mall'||to=='Republic Central Colleges')){
            jeep1 = 'MARISOL-PAMPANG';
            jeep2 = 'PANDAN-PAMPANG';
            jeep1End = '15.137851,120.588826';
            jeep2End = '15.13784,120.58891';
            getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
          }

          else if(from==='The Medical City Angeles'&&to=='Angeles Medical Center Inc.'){
            jeep1 = 'MARISOL-PAMPANG';
            jeep1End = '15.14124,120.58907';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
          }

          else if(from==='The Medical City Angeles'&&to=='Angeles University Foundation Medical Center'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.14527,120.59539';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='The Medical City Angeles'&&to=='Angeles University Foundation'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.14544,120.59530';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }

          else if(from==='The Medical City Angeles'&&to=='Holy Family Medical Center'){
            jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
            jeep1End = '15.13990,120.59450';
            getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
          }


        }
        else{
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
        function getJeep(jeep1,jeep2,jeep3,jeep4,end1,end2,end3,end4,ctr1,ctr2,ctr3,ctr4){
          var data;
          var pointMarker2;
          //jeep with 1 ride
          if (jeep2===null&&end2===null) {
              options = {};
              options.end1 = end1;
              options.ctr1 = '1ride';
              options.ctr2 = ctr1;
              if (from=='Citi Center'&&(to!='Marquee Mall'&&to!='Angeles City Hall')) {
                console.log('cpoint');
                options.jeep_1= {coordi:'15.13784,120.58891|15.138251,120.589309|15.13927,120.59037|15.139734,120.590832|15.140435,120.591892|15.13884,120.593694|15.141057,120.595272|15.142838,120.596806|15.142905,120.596838|15.144619,120.59804|15.14872,120.601398|15.15103,120.603383|15.15372,120.60482|15.153224,120.605907|15.153255,120.605942|15.152749,120.607052|15.15239,120.60829|15.15181,120.60971|15.15181,120.60971|15.15239,120.60829|15.152749,120.607052|15.153255,120.605942|15.153224,120.605907|15.15372,120.60482|15.153783,120.604851|15.15366,120.604734|15.152624,120.60423|15.15103,120.603383|15.14872,120.601398|15.147082,120.600081|15.144619,120.59804|15.142913,120.596736|15.140787,120.595111|15.13990,120.59450|15.13834,120.59335|15.137245,120.592482|15.136417,120.590765|15.137761,120.588912|15.13784,120.58891|15.138251,120.589309|15.13927,120.59037',name:'PANDAN-PAMPANG',color:'Blue'};
              }

              else if(jeep1==='MARISOL-PAMPANG-Walking'&&(((from == 'Angeles Medical Center Inc.'||from=='Dr. Amando L. Garcia Medical Center, Inc.' ))&& to==='Lourdes North West')){
                options.jeep_1= {coordi:'15.14254,120.58971|15.14124,120.58907|15.14131,120.58783|15.14186,120.58799',name:'Walk through',color:'#FF7F50'};
              }
              else if (jeep1==='SAPANG BATO-ANGELES-walking'&&from=='Carmenville'&&to=='Timog Park Gate 1') {
                options.jeep_1= {coordi:'15.14539,120.56643|15.14505,120.56465',name:'Walk through',color:'#FF7F50'};
              }
              else if (jeep1==='MARISOL-PAMPANG-Walking'&&from=='Angeles Medical Center Inc.'&&to=='Dr. Amando L. Garcia Medical Center, Inc.') {
                options.jeep_1= {coordi:'15.14124,120.58907|15.14124,120.58907|15.14254,120.58971|15.14254,120.58971',name:'Walk through',color:'#FF7F50'};
                console.log('cr.');
                console.log(options);
              }
              else if (jeep1==='MARISOL-PAMPANG-Walking'&&to=='Angeles Medical Center Inc.'&&from=='Dr. Amando L. Garcia Medical Center, Inc.') {
                options.jeep_1= {coordi:'15.14254,120.58971|15.14254,120.58971|15.14124,120.58907|15.14124,120.58907',name:'Walk through',color:'#FF7F50'};
                console.log('cr.');
                console.log(options);
              }
              else {
                data = getJeepDocs(jeep1)
                  .then(function(result) {
                    options.jeep_1 = result;
                    return options;
                  });
              }
              pointMarker2 = getJeepMarkers(from).then(function(result) {


                if (from=='Marisol'&&(to=='Angeles Medical Center Inc.'||to=='Angeles University Foundation Medical Center'||to=='Angeles University Foundation'||to=='Dr. Amando L. Garcia Medical Center, Inc.'||to=='Holy Family Medical Center'||to == 'Holy Rosary Parish Church'||to=='Holy Angel University'||to=='Jenra Mall'||to=='Nepo Mall'||to=='Lourdes North West'||to == 'The Medical City Angeles')) {
                  console.log('marisss');
                  endCtrl = '15.15259,120.59180';
                  mk2 = endCtrl.split(",");
                  options.marker_1 = {lat:mk2[0],lng:mk2[1]};
                  options.marker_1.text = 'Marisol Terminal';
                  console.log(options);
                }
                else {console.log('qq');
                  options.marker_1 = result[0];
                }

                return getJeepMarkers(to);
              }).then(function(result){
                options.marker_2 = result[0];
                return options;
              });
              pointMarker2.then(function(result) {
                GoogleMaps.init(options);
              });
          }
          else if (jeep3!==null) {
            options = {};
            if (from=='Citi Center') {
              console.log('cpoint');
              options.jeep_1= {coordi:'15.13784,120.58891|15.138251,120.589309|15.13927,120.59037|15.139734,120.590832|15.140435,120.591892|15.13884,120.593694|15.141057,120.595272|15.142838,120.596806|15.142905,120.596838|15.144619,120.59804|15.14872,120.601398|15.15103,120.603383|15.15372,120.60482|15.153224,120.605907|15.153255,120.605942|15.152749,120.607052|15.15239,120.60829|15.15181,120.60971|15.15181,120.60971|15.15239,120.60829|15.152749,120.607052|15.153255,120.605942|15.153224,120.605907|15.15372,120.60482|15.153783,120.604851|15.15366,120.604734|15.152624,120.60423|15.15103,120.603383|15.14872,120.601398|15.147082,120.600081|15.144619,120.59804|15.142913,120.596736|15.140787,120.595111|15.13990,120.59450|15.13834,120.59335|15.137245,120.592482|15.136417,120.590765|15.137761,120.588912|15.13784,120.58891|15.138251,120.589309|15.13927,120.59037',name:'PANDAN-PAMPANG',color:'Blue'};
              data = getJeepDocs(jeep2).then(function(result) {
                options.jeep_2 = result;
                console.log(result);
                return getJeepDocs(jeep3);
              }).
              then(function(result) {
                options.jeep_3 = result;
                return options;
              });
            }
            else if (jeep1==='MARISOL-PAMPANG-Walking'&&jeep2!=='SAPANG BATO-ANGELES') {
              options.jeep_1= {coordi:'15.14254,120.58971|15.14124,120.58907|15.14131,120.58783',name:'Walk through',color:'#FF7F50'};
              console.log('oooo1');
              data = getJeepDocs(jeep2).then(function(result) {
                options.jeep_2 = result;
                console.log(result);
                return getJeepDocs(jeep3);
              }).
              then(function(result) {
                options.jeep_3 = result;
                return options;
              });
            }
            else if (jeep1==='MARISOL-PAMPANG-Walking'&&jeep2=='SAPANG BATO-ANGELES') {
              options.jeep_1= {coordi:'15.14254,120.58971|15.14124,120.58907|15.14131,120.58783|15.14186,120.58799',name:'Walk through',color:'#FF7F50'};
              console.log('oooo2');
              data = getJeepDocs(jeep2).then(function(result) {
                options.jeep_2 = result;
                console.log(result);
                return getJeepDocs(jeep3);
              }).
              then(function(result) {
                options.jeep_3 = result;
                return options;
              });
            }
            else if (jeep1==='MARISOL-PAMPANG-Walking2'&&jeep2=='MARISOL-PAMPANG') {
              options.jeep_1= {coordi:'15.13417,120.59130|15.13483,120.59063',name:'Walk through',color:'#FF7F50'};
              console.log('oooo3');
              data = getJeepDocs(jeep2).then(function(result) {
                options.jeep_2 = result;
                console.log(result);
                return getJeepDocs(jeep3);
              }).
              then(function(result) {
                options.jeep_3 = result;
                return options;
              });
            }
            else if (jeep1==='MARISOL-PAMPANG-Walking3'&&jeep2=='CHECK-POINT-HOLY') {
              options.jeep_1= {coordi:'15.13417,120.59130|15.13642,120.58772',name:'Walk through',color:'#FF7F50'};
              console.log('oooo4');
              data = getJeepDocs(jeep2).then(function(result) {
                options.jeep_2 = result;
                console.log(result);
                return getJeepDocs(jeep3);
              }).
              then(function(result) {
                options.jeep_3 = result;
                return options;
              });
            }
            else if (jeep1==='MARISOL-PAMPANG-Walking5'&&jeep2=='CHECK-POINT-HOLY') {
              options.jeep_1= {coordi:'15.13567,120.58914|15.13622,120.58805|15.13642,120.58772',name:'Walk through',color:'#FF7F50'};
              console.log('oooo4');
              data = getJeepDocs(jeep2).then(function(result) {
                options.jeep_2 = result;
                console.log(result);
                return getJeepDocs(jeep3);
              }).
              then(function(result) {
                options.jeep_3 = result;
                return options;
              });
            }
            else if (jeep1==='CHECK-POINT-HOLY-Walking4'&&jeep2=='CHECK-POINT-HOLY') {
              options.jeep_1= {coordi:'15.15293,120.59217|15.152962,120.591914|15.15259,120.59180',name:'Walk through',color:'#FF7F50'};
              console.log('moooo4');
              data = getJeepDocs(jeep2).then(function(result) {
                options.jeep_2 = result;
                console.log(result);
                return getJeepDocs(jeep3);
              }).
              then(function(result) {
                options.jeep_3 = result;
                return options;
              });
            }
            else if (jeep1==='PANDAN-PAMPANG-Walking2'&&(jeep2=='CHECK-POINT-HOLY'||jeep2=='VILLA-PAMPANG')) {
              options.jeep_1= {coordi:'15.13927,120.59037|15.138251,120.589309|15.13784,120.58891',name:'Walk through',color:'#FF7F50'};
              console.log('moooo4');
              data = getJeepDocs(jeep2).then(function(result) {
                options.jeep_2 = result;
                console.log(result);
                return getJeepDocs(jeep3);
              }).
              then(function(result) {
                options.jeep_3 = result;
                return options;
              });
            }
            else {
              data = getJeepDocs(jeep1)
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


            }
            if (jeep4!==null) {
              getJeepDocs(jeep4).then(function(result) {
                console.log(result);
                console.log('asdf');
                options.jeep_4 = result;
              });
            }
            pointMarker2 = getJeepMarkers(from).then(function(result) {
              options.marker_1 = result[0];
              console.log(result);
              var endCtr;
              if (jeep1==='MARISOL-PAMPANG-Walking'&&jeep2!=='SAPANG BATO-ANGELES') {
                endCtr = '15.14131,120.58783';
                console.log('endCtr');
              }
              else if (jeep3!==undefined&&(from=='Anunas'||from=='Carmenville'||from=='City College of Angeles'||from=='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Margot'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol')&&(to=='Angeles City Hall'||to=='Citi Center'||to=='Marquee Mall'||to=='Republic Central Colleges')) {
                endCtr = '15.137851,120.588826';
              }
              else if (jeep3!==undefined&&(from=='Anunas'||from=='Carmenville'||from=='City College of Angeles'||from=='Cuayan'||from=='Friendship'||from=='Friendship Plaza'||from=='Margot'||from=='Sapang Bato'||from=='Timog Park Gate 1'||from=='Timog Park Gate 2'||from=='Timog Park Gate 3'||from=='Transfer'||from=='Villa Sol')&&(to=='Angeles University Foundation'||to=='Angeles University Foundation Medical Center')) {
                endCtr = '15.138817,120.587592';
              }
              else if (jeep3!==undefined&&from=='Anunas'&&to=='Dr. Amando L. Garcia Medical Center, Inc.') {
                endCtr = '15.14254,120.58971';
              }
              else if (jeep3!==undefined&&from=='Anunas'&&to=='Sacred Heart Medical Center') {
                endCtr = '15.13642,120.58772';
              }
              else if (jeep3!==undefined&&from=='Angeles City Hall'&&to=='Rafael Lazatin Memorial Medical Center') {
                endCtr = '15.13914,120.58746';
              }
              else if (jeep3!==undefined&&from=='Rafael Lazatin Memorial Medical Center'&&(to=='Angeles City Hall'||to=='Citi Center'||to=='Marquee Mall'||to=='Republic Central Colleges')) {
                endCtr = '15.13914,120.58746';
              }
              else if (jeep1==='MARISOL-PAMPANG-Walking2'&&jeep3!==undefined&&from=='Holy Angel University'&&(to=='Angeles City Hall'||to=='Citi Center'||to=='Marquee Mall'||to=='Republic Central Colleges')) {
                console.log('holi');
                endCtr = '15.137851,120.588826';
              }
              else if (jeep1==='MARISOL-PAMPANG-Walking2'&&jeep3!==undefined&&from=='Holy Angel University'&&(to=='Bancal'||to=='Lourdes North West')) {
                console.log('holi');
                endCtr = '15.13642,120.58772';
              }
              else if (jeep1==='CHECK-POINT-HOLY-Walking4'&&jeep3!==undefined&&from=='Marisol'&&(to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')) {
                console.log('cp4');
                endCtr = '15.14186,120.58799';
              }
              else if (jeep4!==undefined&&(to=='Margot'||to=='Sapang Bato')) {
                console.log('jeep4 margt');
                endCtr = '15.16258,120.55349';
                var mk3 = endCtr.split(",");
                options.marker_3 = {lat:mk3[0],lng:mk3[1]};
              }
              else if (jeep4!==undefined&&from=='Holy Angel University'&&(to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')) {
                console.log('jeep4 margt');
                endCtr = '15.14186,120.58799';
                var mk3a = endCtr.split(",");
                options.marker_3 = {lat:mk3a[0],lng:mk3a[1]};
              }
              else {
                endCtr = end3;
              }
              var mk2;
              var endCtrl;
              if (jeep4!==undefined&&(to=='Margot'||to=='Sapang Bato')) {
                endCtrl = '15.14186,120.58799';
                mk2 = endCtrl.split(",");
                options.marker_2 = {lat:mk2[0],lng:mk2[1]};
              }
              else if (jeep4!==undefined&&from=='Holy Angel University'&&(to == 'Timog Park Gate 1' || to == 'Timog Park Gate 2' || to == 'Timog Park Gate 3' || to == 'Transfer' || to == 'Villa Sol'|| to == 'Anunas' ||to == 'Carmenville' || to == 'City College of Angeles' || to == 'Cuayan' || to == 'Friendship' || to == 'Friendship Plaza')) {
                endCtrl = '15.13642,120.58772';
                mk2 = endCtrl.split(",");
                options.marker_2 = {lat:mk2[0],lng:mk2[1]};
              }
              else {
                mk2 = endCtr.split(",");
                options.marker_2 = {lat:mk2[0],lng:mk2[1]};
              }
              return getJeepMarkers(to);
            }).then(function(result2) {
              console.log(result2);
              console.log('jeeeep4');
              if (jeep4!==null) {
                options.marker_4 = result2[0];
              }
              else {
                options.marker_3 = result2[0];
              }
              return options;
          });
            options.end1 = end1;
            options.end2 = end2;
            options.end3 = end3;
            options.end4 = end4;
            options.ctr1=ctr1;
            options.ctr2=ctr2;
            options.ctr3=ctr3;
            options.ctr4=ctr4;
            pointMarker2.then(function(result) {
              console.log(result);
              GoogleMaps.init(options);
            });
          }
          else{
          console.log('2jeep');
              options = {};

              if (from=='Citi Center') {
                console.log('cpoint');
                options.jeep_1= {coordi:'15.13784,120.58891|15.138251,120.589309|15.13927,120.59037|15.139734,120.590832|15.140435,120.591892|15.13884,120.593694|15.141057,120.595272|15.142838,120.596806|15.142905,120.596838|15.144619,120.59804|15.14872,120.601398|15.15103,120.603383|15.15372,120.60482|15.153224,120.605907|15.153255,120.605942|15.152749,120.607052|15.15239,120.60829|15.15181,120.60971|15.15181,120.60971|15.15239,120.60829|15.152749,120.607052|15.153255,120.605942|15.153224,120.605907|15.15372,120.60482|15.153783,120.604851|15.15366,120.604734|15.152624,120.60423|15.15103,120.603383|15.14872,120.601398|15.147082,120.600081|15.144619,120.59804|15.142913,120.596736|15.140787,120.595111|15.13990,120.59450|15.13834,120.59335|15.137245,120.592482|15.136417,120.590765|15.137761,120.588912|15.13784,120.58891|15.138251,120.589309|15.13927,120.59037',name:'PANDAN-PAMPANG',color:'Blue'};
                var data4 = getJeepDocs(jeep2).then(function(result) {
                  console.log(result);
                  options.jeep_2 = result;
                  return options;
                });
              }

              else if (jeep1==='MARISOL-PAMPANG-Walking'&&jeep2!=='SAPANG BATO-ANGELES') {
                console.log('a1');
                options.jeep_1= {coordi:'15.14254,120.58971|15.14124,120.58907|15.14131,120.58783',name:'Walk through',color:'#FF7F50'};
                var data2 = getJeepDocs(jeep2).then(function(result) {
                  options.jeep_2 = result;

                  console.log(result);
                  return options;
                });
                console.log('walking');

              }
              else if (jeep1==='MARISOL-PAMPANG-Walking'&&jeep2==='SAPANG BATO-ANGELES') {
                console.log('a2');
                options.jeep_1= {coordi:'15.14254,120.58971|15.14124,120.58907|15.14131,120.58783|15.14186,120.58799',name:'Walk through',color:'#FF7F50'};
                data = getJeepDocs(jeep2).then(function(result) {
                  options.jeep_2 = result;
                  return options;
                });
                console.log('walking2 holy');

              }
              else if (jeep1==='SAPANG BATO-ANGELES'&&jeep2==='MARISOL-PAMPANG-Walking') {
                console.log('a2a');
                options.jeep_2= {coordi:'15.14186,120.58799|15.14131,120.58783|15.14124,120.58907|15.14254,120.58971',name:'Walk through',color:'#FF7F50'};
                data = getJeepDocs(jeep1).then(function(result) {
                  options.jeep_1 = result;
                  return options;
                });
              }
              else if (jeep1==='MARISOL-PAMPANG'&&jeep2==='MARISOL-PAMPANG-Walking4') {
                options.jeep_2= {coordi:'15.13483,120.59063|15.13417,120.59130',name:'Walk through',color:'#FF7F50'};
                data = getJeepDocs(jeep1).then(function(result) {
                  options.jeep_1 = result;
                  return options;
                });
              }
              else if (jeep1==='MARISOL-PAMPANG'&&jeep2==='VILLA-PAMPANG-Walking') {
                console.log('a3');
                options.jeep_2= {coordi:'15.13483,120.59063|15.13417,120.59130',name:'Walk through',color:'#FF7F50'};
                data = getJeepDocs(jeep1).then(function(result) {
                  console.log(result);
                  options.jeep_1 = result;
                  return options;
                });
              }
              else if (jeep1=='CHECK-POINT-HENSONVILLE-HOLY'&&jeep2=='CHECK-POINT-HOLY-Walking'){
                console.log('cpoint');
                options.jeep_2= {coordi:'15.13642,120.58772|15.13622,120.58805|15.13567,120.58914',name:'Walk through',color:'#FF7F50'};
                data = getJeepDocs(jeep1).then(function(result) {
                  console.log(result);
                  options.jeep_1 = result;
                  return options;
                });
              }
              else if (jeep1=='PANDAN-PAMPANG-Walking'&&jeep2=='PANDAN-PAMPANG'){
                console.log('cpoint');
                options.jeep_1= {coordi:'15.13567,120.58914|15.13622,120.58805|15.137851,120.588826',name:'Walk through',color:'#FF7F50'};
                data = getJeepDocs(jeep2).then(function(result) {
                  console.log(result);
                  options.jeep_2 = result;
                  return options;
                });
              }
              else if (jeep1=='PANDAN-PAMPANG-Walking2'&&(jeep2=='MARISOL-PAMPANG'||jeep2=='CHECK-POINT-HENSONVILLE-HOLY'||jeep2=='CHECK-POINT-HOLY'||jeep2=='VILLA-PAMPANG')){
                console.log('cpoint');
                options.jeep_1= {coordi:'15.13927,120.59037|15.138251,120.589309|15.13784,120.58891',name:'Walk through',color:'#FF7F50'};
                data = getJeepDocs(jeep2).then(function(result) {
                  console.log(result);
                  console.log('kk');
                  options.jeep_2 = result;
                  return options;
                });
              }
              else if (jeep1==='CHECK-POINT-HENSONVILLE-HOLY'&&jeep2==='CHECK-POINT-HOLY-Walking2'){
                console.log('cpoint2');
                options.jeep_2= {coordi:'15.166388,120.582832|15.167272,120.584398|15.16840,120.58442',name:'Walk through',color:'#FF7F50'};
                console.log('jeep waliking');
                console.log(options.jeep_2);
                data = getJeepDocs(jeep1).then(function(result) {
                  console.log(result);
                  options.jeep_1 = result;
                  return options;
                });
                console.log(options);
              }
              else if (jeep1==='CHECK-POINT-HENSONVILLE-HOLY'&&jeep2==='CHECK-POINT-HOLY-Walking3'){
                console.log('cpoint2');
                options.jeep_2= {coordi:'15.166388,120.582832|15.167272,120.584398|15.16834,120.58275',name:'Walk through',color:'#FF7F50'};
                console.log('jeep waliking');
                console.log(options.jeep_2);
                data = getJeepDocs(jeep1).then(function(result) {
                  console.log(result);
                  options.jeep_1 = result;
                  return options;
                });
                console.log(options);
              }
              else if (jeep1==='MARISOL-PAMPANG-Walking2'&&jeep2==='MARISOL-PAMPANG'){
                console.log('walking 2');
                options.jeep_1= {coordi:'15.13417,120.59130|15.13483,120.59063',name:'Walk through',color:'#FF7F50'};
                data = getJeepDocs(jeep2).then(function(result) {
                  console.log(result);
                  options.jeep_2 = result;
                  return options;
                });
                console.log(options);
              }
              else if (jeep1==='MARISOL-PAMPANG-Walking5'&&(jeep2=='CHECK-POINT-HENSONVILLE-HOLY'||jeep2=='CHECK-POINT-HOLY')) {
                options.jeep_1= {coordi:'15.13567,120.58914|15.13622,120.58805|15.13642,120.58772',name:'Walk through',color:'#FF7F50'};
                console.log('oooo4');
                data = getJeepDocs(jeep2).then(function(result) {
                  options.jeep_2 = result;
                  console.log(result);
                  return options;
                });
              }
              else if (jeep1==='MAINGATE-FRIENDSHIP-Walking'&&jeep2=='MAINGATE-FRIENDSHIP') {
                options.jeep_1= {coordi:'15.16840,120.58442|15.166427,120.583066',name:'Walk through',color:'#FF7F50'};
                console.log('oooo4');
                data = getJeepDocs(jeep2).then(function(result) {
                  options.jeep_2 = result;
                  console.log(result);
                  return options;
                });
              }
              else if (jeep1==='CHECK-POINT-HENSONVILLE-HOLY-Walking'&&jeep2=='CHECK-POINT-HENSONVILLE-HOLY') {
                options.jeep_1= {coordi:'15.16834,120.58275|15.166388,120.582832',name:'Walk through',color:'#FF7F50'};
                console.log('oooo4');
                data = getJeepDocs(jeep2).then(function(result) {
                  options.jeep_2 = result;
                  console.log(result);
                  return options;
                });
              }
              else if (jeep1==='CHECK-POINT-HENSONVILLE-HOLY-Walking2'&&jeep2=='CHECK-POINT-HENSONVILLE-HOLY') {
                options.jeep_1= {coordi:'15.16840,120.58442|15.166388,120.582832',name:'Walk through',color:'#FF7F50'};
                console.log('oooo4');
                data = getJeepDocs(jeep2).then(function(result) {
                  options.jeep_2 = result;
                  console.log(result);
                  return options;
                });
              }
              else if (jeep2==='CHECK-POINT-HOLY-Walking5'&&jeep1=='CHECK-POINT-HOLY') {
                options.jeep_2= {coordi:'15.13642,120.58772|15.13622,120.58805|15.13567,120.58914',name:'Walk through',color:'#FF7F50'};
                console.log('oooo4');
                data = getJeepDocs(jeep1).then(function(result) {
                  options.jeep_1 = result;
                  console.log(result);
                  return options;
                });
              }

              else {
                console.log('elses');
                data = getJeepDocs(jeep1)
                  .then(function(result) {
                    options.jeep_1 = result;
                    return getJeepDocs(jeep2);
                  })
                  .then(function(result) {
                    options.jeep_2 = result;
                    return options;
                  });
              }

              pointMarker2 = getJeepMarkers(from).then(function(result) {

                if (from=='Marisol'&&(to=='Angeles City Hall'||to=='Citi Center'||to=='Marquee Mall'||to=='Republic Central Colleges'||to=='Sacred Heart Medical Center')) {
                  endCtrl = '15.15259,120.59180';
                  mk2 = endCtrl.split(",");
                  options.marker_1 = {lat:mk2[0],lng:mk2[1]};
                  options.marker_1.text = 'Marisol Terminal';
                  console.log(options);
                  console.log('1122');
                }
                else if (from=='Marisol' &&to == 'Rafael Lazatin Memorial Medical Center') {
                  endCtrl = '15.15259,120.59180';
                  mk2 = endCtrl.split(",");
                  options.marker_1 = {lat:mk2[0],lng:mk2[1]};
                  options.marker_1.text = 'Marisol';
                  console.log(options);
                }


                else {
                  options.marker_1 = result[0];
                }


                console.log('mm');
                console.log(result);
                return getJeepMarkers(to);
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

.controller('FindRouteCtrl', function($scope,Jeeps,$ionicModal,$ionicPopup,$state, GoogleMaps, $window,$timeout,$translate) {
  Jeeps.initDB();





  $translate('Choose starting point').then(function(item){
    $scope.text_point_A = item;
  });
  $translate('Choose destination').then(function(item){
   $scope.text_point_B = item;
  });

 $scope.val =  {single: null};

  var init = function() {
  if($scope.modal) {
    return $q.when();
  }
  else {
      return $ionicModal.fromTemplateUrl('custom_textbox.html', {
          scope: $scope,
          animation: 'slide-in-up'
        })
      .then(function(modal) {
        $scope.modal = modal;
      });
    }
  };

   Jeeps.getMarkers().then(function(points) {
     var x;
     var a = [];console.log(points);

     for (x in points) {
         a.push(points[x].text);
         console.log('log'+a);

     }
     $timeout(function () {

       console.log('timeoit');
       $scope.items = a;
       console.log($scope.items);
       console.log("en"+$translate.use());
       if ($translate.use()==='ja') {
          angular.forEach($scope.items, function(item, index){
            console.log("aad"+item);
             $translate(item).then(function(translated){
               console.log("aas"+translated);
               console.log($translate.use()+translated);
               $scope.items[index] = translated;
             });
           });
       }
     }, 0);

   });

  $scope.openModal = function(lbl) {
    init().then(function() {
      $scope.modal.show();
    });

    // $scope.modal.show();
    if(lbl=='to'){
      $scope.ctr = 'to';
      $scope.headerText  = 'To:';
    }
    else if(lbl=='from'){
      $scope.ctr = 'from';
      $scope.headerText  = 'From:';
    }
  };

  $scope.closeModal = function() {
    $scope.modal.search = "";
    // $scope.modal.hide();
    $scope.modal.remove()
    .then(function() {
      $scope.modal = null;
    });
  };

  $scope.validateSingle = function (item,ctr) {
    if(ctr=='from'){
      console.log("pp"+item);

      $scope.text_point_A = item;
      if ($translate.use()==='ja') {
        $translate.use("en").then(function(data){
          $translate(item).then(function(item){
            console.log("item"+item);
            $scope.from = item;
            $translate.use("ja");
          });
        });
      }
      else {
        $scope.from= item;
      }

    }
    else if(ctr=='to'){
      $scope.text_point_B = item;
      if ($translate.use()==='ja') {
        $translate.use("en").then(function(data){
          $translate(item).then(function(item){
            $scope.to= item;
            $translate.use("ja");
          });
        });
      }
      else {
        $scope.to= item;
      }


    }

    $scope.closeModal();
  };

  function alertBox(popup){
    console.log(popup+"pop");
    $ionicPopup.alert({
      title: popup.title,
      content: popup.content,
      okText: popup.text
    });
  }
  function translateAlert(A_title,A_content){
    var popup = {};
    $translate(A_title).then(function(title) {
      popup.title = title;
      return $translate(A_content);
    }).then(function(content) {
      popup.content = content;
      return $translate('OK');
    }).then(function(okay) {
      popup.text = okay;
      alertBox(popup);
      return popup;
    });
  }

  $scope.submit = function() {
    var from = document.getElementById('point_a').value;
    var to = document.getElementById('point_b').value;
    console.log(from);
    console.log(to);
    if(from === '' || to === ''){
      translateAlert('Alert','Empty Fields! Please select starting point or destination.');
    }
    else if (from == to) {
      translateAlert('Alert','Starting point and destination must not be the same.');
    }
    else if (from ==="Angeles City Hall" && to == "Marquee Mall") {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == "Marquee Mall"&&to ==="Angeles City Hall") {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from ==="Main Gate Terminal" && to == "SM City Clark") {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == "SM City Clark"&&to ==="Main Gate Terminal") {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == 'Angeles University Foundation' && to== 'Angeles University Foundation Medical Center') {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == 'Angeles University Foundation Medical Center' && to== 'Angeles University Foundation') {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == 'Holy Angel University' && to== 'Holy Rosary Parish Church') {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == 'Holy Rosary Parish Church' && to== 'Holy Angel University') {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == 'Immaculate Concepcion Parish' && to== 'Systems Plus College Foundation') {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from== 'Systems Plus College Foundation' && to == 'Immaculate Concepcion Parish') {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == 'Friendship Plaza' && to== 'Timog Park Gate 3') {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from== 'Timog Park Gate 3'&&to == 'Friendship Plaza') {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == 'Jenra Mall' && to== 'Nepo Mall') {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from== 'Nepo Mall'&&to == 'Jenra Mall') {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == "Diamond Subdivision"&&to ==="Savers Mall") {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == "Savers Mall"&&to ==="Diamond Subdivision") {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from == "Timog Park Gate 1"&&to ==="Carmenville") {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }
    else if (from ==="Carmenville" && to == "Timog Park Gate 1") {
      translateAlert('Alert','You are just near to '+to+'. You don\'t need to ride a jeepney.');
    }

    else{
      $state.go('tab.findroute-maps', { fromId: from, toId:to });
    }
  };




  $scope.getFromTo = function (ctrFrom,ctrTo){

  };

}).controller('HowToCtrl', function($scope) {});
