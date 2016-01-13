angular.module('starter.services', [])

.factory('Jeeps', function($q) {

  var jeeps = [{
     _id: 'CHECK-POINT-HOLY',
     name: 'CHECK-POINT-HOLY',
     color: 'Gray',
     type: 'img/jeeps/sm_c_point_holy.jpg',
     route: 'Check-Point-Holy route is from Maingate to Holy Angel University.',
     category: 'Angeles',
     coordi: '15.16840,120.58442|15.169333,120.58774|15.168944,120.588046|15.168541,120.588432|15.168701,120.588963|15.16857751,120.58933116|15.16851538,120.58937877|15.16749,120.58981|15.165263,120.590374|15.162861,120.591012|15.16242,120.59110|15.16253,120.59107|15.15900,120.59201|15.15828,120.59222|15.158077,120.592182|15.157543,120.592284|15.157031,120.592278|15.153023,120.591935|15.152765,120.591903|15.152592,120.591808|15.151123,120.591184|15.148034,120.589746|15.14504,120.58874|15.14186,120.58799|15.14131,120.58783|15.13914,120.58746|15.139068,120.587429|15.138817,120.587592|15.137981,120.587043|15.1368,120.586914|15.13642,120.58772|15.137851,120.588826|15.13914,120.58746|15.13987,120.58759|15.14131,120.58783|15.14186,120.58799|15.14347,120.58837|15.14504,120.58874|15.14803,120.58976|15.15120,120.59121|15.150943,120.591812|15.151779,120.592452|15.15283,120.592221|15.15293,120.59217|15.15520,120.59221|15.15703,120.59229|15.15828,120.59222|15.15900,120.59201|15.15940,120.59191|15.16253,120.59107|15.16242,120.59110|15.16286,120.59099|15.16526,120.59038|15.16749,120.58981|15.16787,120.58971|15.169597,120.589351|15.169717,120.588609|15.16931,120.58737|15.16888,120.58595|15.16840,120.58442|15.168256,120.58399|15.168036,120.583658|15.167989,120.583636|15.167868,120.583204|15.167787,120.582829|15.16834,120.58275|15.169242,120.582638|15.16834,120.58275|15.167787,120.582829|15.167868,120.583204|15.167989,120.583636|15.168036,120.583658|15.168256,120.58399|15.16840,120.58440'
   }, {
     _id: 'CHECK-POINT-HENSONVILLE-HOLY',
     name: 'CHECK-POINT-HENSONVILLE-HOLY',
     color: 'White',
     type: 'img/jeeps/c_point hensonville_holy.jpg',
     route: 'Check-Point-Hensonville-Holy route is from Narciso St. to Holy Angel University or vice-versa.',
     category: 'Angeles',
     coordi: '15.166388,120.582832|15.166119,120.58128|15.165664,120.580739|15.165098,120.580841|15.164021,120.581029|15.163109,120.581104|15.162643,120.58052|15.161887,120.580906|15.160728,120.58229|15.15992,120.582182|15.1589,120.581485|15.157491,120.582912|15.155721,120.583309|15.15346,120.58335|15.15269,120.58342|15.149839,120.584264|15.148523,120.584983|15.146742,120.586388|15.145893,120.587171|15.14502,120.58873|15.142299,120.588062|15.14186,120.58799|15.14131,120.58783|15.139627,120.58745|15.13914,120.58746|15.13884,120.58757|15.138488,120.5873|15.136738,120.586989|15.13642,120.58772|15.137038,120.588148|15.137851,120.588826|15.138136,120.588427|15.13914,120.58746|15.139627,120.58745|15.14131,120.58783|15.14186,120.58799|15.142299,120.588062|15.14347,120.58837|15.14502,120.58873|15.145893,120.587171|15.146742,120.586388|15.148523,120.584983|15.149839,120.584264|15.15269,120.58342|15.15346,120.58335|15.155721,120.583309|15.157491,120.582912|15.1589,120.581485|15.15992,120.582182|15.161354,120.581946|15.161478,120.582343|15.161872,120.582901|15.162317,120.583953|15.16376,120.583566|15.1653,120.583155|15.166388,120.582832'
   }, {
     _id:'CHECK-POINT-HOLY-HI-WAY',
     name: 'CHECK-POINT-HOLY-HI-WAY',
     color: 'Lavander',
     type: 'img/jeeps/sm_c_point_holy_hi_way.jpg',
     route: 'Check-Point-Holy-Hi-Way route is from Maingate to Holy Angel University.',
     category: 'Angeles',
     coordi: '15.16840,120.58442|15.169333,120.58774|15.168944,120.588046|15.168541,120.588432|15.168701,120.588963|15.16857751,120.58933116|15.16851538,120.58937877|15.16749,120.58981|15.16747404,120.58973551|15.165263,120.590374|15.162861,120.591012|15.16253,120.59107|15.16242,120.59110|15.159392,120.591881|15.15900,120.59201|15.158077,120.592182|15.157543,120.592284|15.157031,120.592278|15.153023,120.591935|15.152765,120.591903|15.152592,120.591808|15.151123,120.591184|15.148034,120.589746|15.145045,120.588708|15.14186,120.58799|15.141278,120.587804|15.139068,120.587429|15.137981,120.587043|15.1368,120.586914|15.13642,120.58772|15.13622,120.58805|15.13622,120.58805|15.13567,120.58914|15.13483,120.59063|15.13417,120.59130|15.133569,120.591817|15.134931,120.592788|15.135883,120.591431|15.137323,120.592541|15.13834,120.59335|15.138711,120.593582|15.13990,120.59450|15.140596,120.594971|15.140808,120.5951|15.142831,120.596791|15.142963,120.596637|15.14327,120.59644|15.14437,120.59588|15.14527,120.59539|15.14544,120.59530|15.14640,120.59478|15.14640,120.59478|15.14751,120.59419|15.147954,120.59393|15.149388,120.593201|15.151775,120.592386|15.15256,120.592324|15.15293,120.59217|15.15577,120.592257|15.15828,120.59222|15.15828,120.59222|15.15900,120.59201|15.160023,120.591758|15.16242,120.59110|15.16253,120.59107|15.164378,120.590583|15.165268,120.590358|15.166584,120.589998|15.16749,120.58981|15.169115,120.589424|15.169726,120.588931|15.168872,120.585943|15.16840,120.58442|15.168256,120.58399|15.168036,120.583658|15.167989,120.583636|15.167868,120.583204|15.167787,120.582829|15.16834,120.58275|15.169242,120.582638|15.16834,120.58275|15.167787,120.582829|15.167868,120.583204|15.167989,120.583636|15.168036,120.583658|15.168256,120.58399|15.16840,120.58440'
   }, {
     _id: 'MAINGATE-FRIENDSHIP',
     name: 'MAINGATE-FRIENDSHIP',
     color: 'Santan',
     type: 'img/jeeps/m-gate f-ship.jpg',
     route: 'Maingate-Friendship is from Donjuico Avenue.',
     category: 'Angeles',
     coordi:'15.166427,120.583066|15.166355,120.582671|15.166190,120.581779|15.166080,120.581102|15.165694,120.578767|15.165358,120.576771|15.165343,120.575565|15.16543,120.574627|15.166105,120.5703|15.166442,120.568257|15.166681,120.566512|15.166757,120.566063|15.166762,120.565567|15.166524,120.563328|15.16631,120.561692|15.166149,120.5609|15.166037,120.560574|15.165573,120.55965|15.164431,120.557392|15.16304,120.55475|15.16304,120.55475|15.163236,120.5551|15.163236,120.5551|15.165573,120.55965|15.166037,120.560574|15.166149,120.5609|15.16631,120.561692|15.166524,120.563328|15.166762,120.565567|15.166757,120.566063|15.166681,120.566512|15.166442,120.568257|15.166105,120.5703|15.16543,120.574627|15.165343,120.575565|15.165358,120.576771|15.165694,120.578767|15.166080,120.581102|15.166190,120.581779|15.166355,120.582671|15.166427,120.583066'
   }, {
     _id: 'MARISOL-PAMPANG',
     name: 'MARISOL-PAMPANG',
     color: 'Green',
     type: 'img/jeeps/marisol_pampang.jpg',
     route: 'Marisol-Pampang is from the Jake Gonzales Avenue.',
     category: 'Angeles',
     coordi:'15.152585,120.591815|15.152747,120.591965|15.15269,120.592069|15.151739,120.592383|15.148596,120.593619|15.147576,120.594215|15.146261,120.594918|15.14544,120.59530|15.14527,120.59539|15.143088,120.596546|15.142144,120.596151|15.140787,120.5951|15.13990,120.59450|15.138851,120.593662|15.13834,120.59335|15.137214,120.592418|15.13483,120.59063|15.135562,120.58933|15.13567,120.58914|15.13622,120.58805|15.136287,120.587955|15.13642,120.58772|15.136867,120.587995|15.137851,120.588826|15.1388493,120.58765070000001|15.13892,120.58768|15.139964,120.5884|15.140601,120.588781|15.14124,120.58907|15.14254,120.58971|15.144795,120.59083|15.146908,120.590208|15.148617,120.593598|15.1466,120.594749|15.14544,120.59530|15.14527,120.59539|15.143088,120.596546'
   }, {
     _id: 'PAMPANG-HOLY',
     name: 'PAMPANG-HOLY',
     color: 'Red',
     type: '',
     route: 'Pampang-Holy is from Miranda Extension to Angeles City National Highschool',
     category: 'Angeles',
     coordi: '15.13914,120.58746|15.139643,120.586007|15.140039,120.585146|15.140549,120.584221|15.141523,120.582515|15.142947,120.583121|15.143495,120.583566|15.144531,120.583599|15.14630,120.58128|15.14682,120.580621|15.149248,120.579028'
   }, {
     _id: 'PANDAN-PAMPANG',
     name: 'PANDAN-PAMPANG',
     color: 'Blue',
     type: 'img/jeeps/pandan_pampang.jpg',
     route: 'PANDAN-PAMPANG is from Miranda St. to Angeles City Hall.',
     category: 'Angeles',
     coordi:'15.13784,120.58891|15.138251,120.589309|15.13927,120.59037|15.139734,120.590832|15.140435,120.591892|15.13884,120.593694|15.141057,120.595272|15.142838,120.596806|15.142905,120.596838|15.144619,120.59804|15.14872,120.601398|15.15103,120.603383|15.15372,120.60482|15.153224,120.605907|15.153255,120.605942|15.152749,120.607052|15.15239,120.60829|15.15181,120.60971|15.15181,120.60971|15.15239,120.60829|15.152749,120.607052|15.153255,120.605942|15.153224,120.605907|15.15372,120.60482|15.156156,120.606076|15.158465,120.607331|15.16036,120.608457|15.160795,120.609262|15.161074,120.60953|15.161881,120.60914|15.162432,120.608675|15.162617,120.608243|15.162946,120.608382|15.163104,120.607698|15.163837,120.60805|15.16451,120.60811|15.16451,120.60811|15.16297,120.607594|15.162346,120.608481|15.161043,120.609294|15.160583,120.608921|15.159034,120.60761|15.156182,120.606124|15.153783,120.604851|15.15366,120.604734|15.152624,120.60423|15.15103,120.603383|15.14872,120.601398|15.147082,120.600081|15.144619,120.59804|15.142913,120.596736|15.140787,120.595111|15.13990,120.59450|15.13834,120.59335|15.137245,120.592482|15.136417,120.590765|15.137761,120.588912|15.13784,120.58891|15.138251,120.589309|15.13927,120.59037'
   }, {
     _id: 'SAPANG BATO-ANGELES',
     name: 'SAPANG BATO-ANGELES',
     color: 'Maroon',
     type: 'img/jeeps/sapang_bato_angeles.jpg',
     route: 'Sapangbato-Angeles is from Brgy. Lourdes North West to Sapang Bato.',
     category: 'Angeles',
     coordi: '15.14186,120.58799|15.14502,120.58873|15.146245,120.586796|15.147074,120.586088|15.14988,120.58427|15.149383,120.582526|15.149362,120.579849|15.14917,120.57793|15.148705,120.576078|15.148009,120.573934|15.147634,120.573143|15.146454,120.570096|15.145748,120.567935|15.14539,120.56643|15.14505,120.56465|15.14455,120.56002|15.14449,120.55945|15.14776,120.559465|15.15069,120.55945|15.15091,120.55946|15.153712,120.560274|15.155379,120.56034|15.157124,120.560007|15.15803,120.55970|15.158149,120.559394|15.159076,120.556916|15.160122,120.556219|15.16304,120.55475|15.162659,120.55373|15.16258,120.55349|15.162597,120.551959|15.160458,120.551053|15.161157,120.549245|15.164119,120.5478191|15.165284,120.546273|15.170974,120.538784|15.170943,120.536011|15.17078,120.53471|15.170094,120.531982|15.170575,120.529928|15.170399,120.527599|15.171697,120.525495|15.17234,120.523787|15.172589,120.521994|15.17253,120.51979|15.172244,120.517154|15.17114,120.51630|15.17028,120.51436|15.16966,120.51317|15.16966,120.51317|15.17028,120.51436|15.17114,120.51630|15.172244,120.517154|15.17253,120.51979|15.172589,120.521994|15.17234,120.523787|15.171697,120.525495|15.170399,120.527599|15.170575,120.529928|15.170094,120.531982|15.17078,120.53471|15.170943,120.536011|15.170974,120.538784|15.165284,120.546273|15.164119,120.5478191|15.161157,120.549245|15.160458,120.551053|15.162597,120.551959|15.16258,120.55349|15.162659,120.55373|15.16304,120.55475|15.160122,120.556219|15.159076,120.556916|15.158149,120.559394|15.15803,120.55970|15.157124,120.560007|15.155379,120.56034|15.153712,120.560274|15.15091,120.55946|15.15069,120.55945|15.14776,120.559465|15.14449,120.55945|15.14455,120.56002|15.14505,120.56465|15.14539,120.56643|15.145748,120.567935|15.146454,120.570096|15.147634,120.573143|15.148009,120.573934|15.148705,120.576078|15.14917,120.57793|15.149362,120.579849|15.149383,120.582526|15.14988,120.58427|15.147074,120.586088|15.146245,120.586796|15.14502,120.58873|15.14186,120.58799'
   }, {
     _id: 'SUNSET-NEPO',
     name: 'SUNSET-NEPO',
     color: 'Orange',
     type: 'img/jeeps/sunset_nepo.jpg',
     route: 'Sunset-Nepo is from Teresa Avenue to Fil-Am Friendship.',
     category: 'Angeles',
     coordi: '15.135366,120.586431|15.135335,120.585423|15.133755,120.58443|15.133051,120.581946|15.13563,120.579704|15.137095,120.578266|15.137078,120.578264|15.13824,120.577075|15.139845,120.575541|15.141419,120.57287|15.14203,120.569946|15.142475,120.569372|15.139721,120.567366|15.137909,120.56549|15.137252,120.564406|15.138079,120.563514'
   }, {
     _id: 'PLARIDEL-CAPAYA',
     name: 'PLARIDEL-CAPAYA',
     color: 'Beige',
     type: 'img/jeeps/sunset_nepo.jpg',
     route: 'Plaridel-Capaya is from Plaridel Street to Capaya.',
     category: 'Angeles',
     coordi: '15.139431,120.591213|15.137815,120.592965'
   },{
     _id: 'VILLA-PAMPANG',
     name: 'VILLA-PAMPANG',
     color: 'Yellow',
     type: 'img/jeeps/villa_pampang.jpg',
     route: 'Villa-Pampang is from Essel Park to Holy Angel University.',
     category: 'Angeles',
     coordi:
     '15.121995,120.600207|15.123002,120.599442|15.124017,120.598821|15.125762,120.598015|15.126088,120.597546|15.129851,120.595207|15.131456,120.593812|15.133331,120.591989|15.133561,120.591812|15.135089,120.592624|15.13594,120.591356|15.137623,120.589119|15.13786,120.58885|15.138799,120.587541|15.136961,120.586506|15.13642,120.58772|15.13622,120.58805|15.13567,120.58914|15.134822,120.590594|15.13483,120.59063|15.13417,120.59130|15.133092,120.592257|15.131528,120.593748|15.129685,120.595293|15.1281,120.596259|15.126267,120.597407|15.124931,120.598174|15.12493,120.59831|15.123859,120.59878|15.122834,120.599536|15.121995,120.600207'
   }, {
     _id:  'ROUTE 1',
     name: 'ROUTE 1',
     color: 'Route 1',
     type: 'img/jeeps/route_1.jpg',
     route: 'Route 1 is from Maingate to University of the Philippines.',
     category: 'Clark'
   }, {
     _id:  'ROUTE 2',
     name: 'ROUTE 2',
     color: 'Route 2',
     type: 'img/jeeps/route_2.jpg',
     route: 'Route 2 is from Maingate to Clark Polytechnic.',
     category: 'Clark',
     coordi: '15.167747,120.584148|15.168003,120.584135|15.168076,120.584057|15.167878,120.583202|15.167114,120.583113|15.165921,120.57626|15.166376,120.573143|15.167433,120.565767|15.167081,120.562742|15.166811,120.560596|15.165217,120.55712|15.163643,120.553772|15.163518,120.551691|15.164823,120.54785|15.169379,120.541949|15.175366,120.534175'
   }, {
     _id:  'ROUTE 3',
     name: 'ROUTE 3',
     color: 'Route 3',
     type: 'img/jeeps/route_3.jpg',
     route: 'Route 3 is from the Maingate to Panday Pira Avenue.',
     category: 'Clark'
   }, {
     _id:  'ROUTE 5&7',
     name: 'ROUTE 5&7',
     color: 'Route 5&7',
     type: 'img/jeeps/route_5_7.jpg',
     route: 'Route 5&7 is from Maingate to Nanox.',
     category: 'Clark'
   }];

  var points = [{
    _id: 'point01',
    text: 'Republic Central Colleges',
    category: 'points',
    lat: '15.13927',
    lng: '120.59037',
    tags: 'PANDAN-PAMPANG'
  },{
    _id: 'point02',
    text: 'Holy Family Medical Center',
    category: 'points',
    lat:'15.13990',
    lng:'120.59450',
    tags: 'CHECK-POINT-HOLY-HI-WAY,PANDAN-PAMPANG'
  },{
    _id: 'point03',
    text: 'Citi Center',
    category: 'points',
    lat: '15.15181',
    lng: '120.60971',
    tags: 'PANDAN-PAMPANG'
  },{
    _id: 'point04',
    text: 'Marquee Mall',
    category: 'points',
    lat: '15.162432',
    lng: '120.608675',
    tags: 'PANDAN-PAMPANG'
  },{
    _id: 'point05',
    text: 'Angeles City Hall',
    category: 'points',
    lat: '15.16451',
    lng: '120.60811',
    tags: 'PANDAN-PAMPANG'
  },{
    _id: 'point06',
    text: 'SM City Clark',
    category: 'points',
    lat:'15.16834',
    lng:'120.58275',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY'
  },{
    _id: 'point40',
    text: 'Main Gate Terminal',
    category: 'points',
    lat:'15.16840',
    lng:'120.58442',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY'
  },{
    _id: 'point07',
    text: 'Fields Avenue',
    category: 'points',
    lat:'15.16749',
    lng:'120.58981',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY'
  },{
    _id: 'point08',
    text: 'Diamond Subdivision',
    category: 'points',
    lat: '15.16253',
    lng: '120.59107',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY'
  },{
    _id: 'point09',
    text: 'Savers Mall',
    category: 'points',
    lat: '15.16242',
    lng: '120.59110',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY'
  },{
    _id: 'point10',
    text: 'Immaculate Concepcion Parish',
    category: 'points',
    lat: '15.15900',
    lng: '120.59201',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY'
  },{
    _id: 'point11',
    text: 'Systems Plus College Foundation',
    category: 'points',
    lat: '15.15828',
    lng: '120.59222',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY'
  },{
    _id: 'point12',
    text: 'Marisol',
    category: 'points',
    lat:'15.15293',
    lng:'120.59217',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY'
  },{
    _id: 'point13',
    text: 'Lourdes North West',
    category: 'points',
    lat:'15.14186',
    lng:'120.58799',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY'
  },{
    _id: 'point14',
    text: 'Bancal',
    category: 'points',
    lat: '15.15346',
    lng: '120.58335',
    tags: 'CHECK-POINT-HENSONVILLE-HOLY'
  },{
    _id: 'point15',
    text: 'Jenra Mall',
    category: 'points',
    lat: '15.13622',
    lng: '120.58805',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY,CHECK-POINT-HENSONVILLE-HOLY,MARISOL-PAMPANG,VILLA-PAMPANG'
  },{
    _id: 'point16',
    text: 'Nepo Mall',
    category: 'points',
    lat :'15.13567',
    lng :'120.58914',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY,CHECK-POINT-HENSONVILLE-HOLY,MARISOL-PAMPANG,VILLA-PAMPANG'
  },{
    _id: 'point17',
    text: 'Sacred Heart Medical Center',
    category: 'points',
    lat :'15.12493',
    lng :'120.59831',
    tags: 'VILLA-PAMPANG'
  },{
    _id: 'point18',
    text: 'Holy Angel University',
    category: 'points',
    lat: '15.13417',
    lng: '120.59130',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY,CHECK-POINT-HENSONVILLE-HOLY'
  },{
    _id: 'point19',
    text: 'Holy Rosary Parish Church',
    category: 'points',
    lat: '15.13483',
    lng: '120.59063',
    tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY'
  },{
    _id: 'point20',
    text: 'The Medical City Angeles',
    category: 'points',
    lat:'15.13834',
    lng:'120.59335',
    tags: 'CHECK-POINT-HOLY-HI-WAY,PANDAN-PAMPANG'
  },{
    _id: 'point21',
    text: 'Angeles University Foundation Medical Center',
    category: 'points',
    lat: '15.14527',
    lng: '120.59539',
    tags: 'CHECK-POINT-HOLY-HI-WAY,MARISOL-PAMPANG'
  },{
    _id: 'point22',
    text: 'Angeles University Foundation',
    category: 'points',
    lat: '15.14544',
    lng: '120.59530',
    tags: 'CHECK-POINT-HOLY-HI-WAY,MARISOL-PAMPANG'
  },{
    _id: 'point23',
    text: 'City College of Angeles',
    category: 'points',
    lat: '15.14917',
    lng: '120.57793',
    tags: 'SAPANG BATO-ANGELES'
  },{
    _id: 'point24',
    text: 'Carmenville',
    category: 'points',
    lat:'15.14539',
    lng: '120.56643',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point25',
    text: 'Timog Park Gate 1',
    category: 'points',
    lat:'15.14505',
    lng:'120.56465',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point26', text: 'Cuayan',
    category: 'points',
    lat:'15.14449',
    lng:'120.55945',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point27',
    text: 'Timog Park Gate 2',
    category: 'points',
    lat:'15.14776',
    lng: '120.559465',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point28',
    text: 'Timog Park Gate 3',
    category: 'points',
    lat:'15.15069',
    lng:'120.55945',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point29',
    text: 'Friendship Plaza',
    category: 'points',
    lat:'15.15091',
    lng:'120.55946',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point30',
    text: 'Anunas',
    category: 'points',
    lat:'15.153712',
    lng:'120.560274',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point31',
    text: 'Villa Sol',
    category: 'points',
    lat:'15.15803',
    lng: '120.55970',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point32',
    text: 'Friendship',
    category: 'points',
    lat:'15.16304',
    lng:'120.55475',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point33',
    text: 'Transfer',
    category: 'points',
    lat:'15.16258',
    lng:'120.55349',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point34',
    text: 'Margot',
    category: 'points',
    lat:'15.17078',
    lng:'120.53471',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point35',
    text: 'Sapang Bato',
    category: 'points',
    lat:'15.16966',
    lng:'120.51317',
    tags:'SAPANG BATO-ANGELES'
  },{
    _id: 'point36',
    text: 'Rafael Lazatin Memorial Medical Center',
    category: 'points',
    lat:'15.14630',
    lng:'120.58128',
    tags: 'PAMPANG-HOLY'
  },{
    _id: 'point38',
    text: 'Dr. Amando L. Garcia Medical Center, Inc.',
    category: 'points',
    lat:'15.14254',
    lng:'120.58971',
    tags: 'MARISOL-PAMPANG'
  },{
    _id: 'point39',
    text: 'Angeles Medical Center Inc.',
    category: 'points',
    lat:'15.14124',
    lng:'120.58907',
    tags: 'MARISOL-PAMPANG'
  }

];


  var _db;

  return {

    initDB:function(){
      _db = new PouchDB('JeepRoutes', {adapter: 'websql'});
    },
    addDatas:function(){
      var ddoc = {
        _id: '_design/jeep',
        views: {
          angeles: {
            map: function (doc) {
              console.log(doc);
              if (doc.category === 'Angeles') {
                emit(null,doc);
              }
            }.toString()
          },
          clark: {
            map: function (doc) {
              console.log(doc);
              if (doc.category === 'Clark') {
                emit(null,doc);
              }
            }.toString()
          }
        }
      };
      _db.put(ddoc).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
      return $q.when(_db.info()).then(function (result) {
        // handle result
        console.log(result.doc_count);
        // if(result.doc_count ===0){
          _db.bulkDocs(jeeps);
          _db.bulkDocs(points);
        // }
      }).catch(function (err) {
        console.log('error');
        console.log(err);
      });

    },
    getJeepDetail:function(jeep_id){
      _db.query(function(doc, emit) {
        if (doc.category=='Angeles') {
          console.log(doc.category.length);
        }
      });
      return $q.when(_db.get(jeep_id));
    },
    all: function(category) {
      var cat;
      if (category=='Angeles') {
        cat='jeep/angeles';
      }
      else {
        cat='jeep/clark';
      }
      return _db.query(cat).then(function (res) {
        console.log(res);
        console.log('re');
        var _jeeps = res.rows.map(function(row) {
          return row.value;
        });
        return _jeeps;
      }).catch(function (err) {
        console.log(err);
      });
    },
    getMarkers: function(tags){
      function check_marks (a,b){
        // console.log(a);
        //
        // var string1 = a;
        // var ab = string1.split(",");
        // console.log(ab);
        //
        //
        // if (ab.indexOf(b)!=-1) {
        //   return true;
        // }
        // else {
        //   return false;
        // }

        var str = a;
        var patt = new RegExp(b);
        var res = patt.test(str);
        console.log(res);
        return res;
      }
      console.log('atags');
      return _db.query(function(doc, emit) {
      console.log(check_marks(doc.tags,tags));
        if (doc.category === 'points' && check_marks(doc.tags,tags) === true) {
          console.log('text1');
          emit(doc.text);
        }
        else if (doc.category === 'points' && check_marks(doc.tags,tags) === '') {
          emit(null,doc);
            console.log('text2');
        }
        else if (doc.category === 'points' && doc.text === tags) {
          console.log('text3');
          emit(null,doc);
        }
      },{include_docs: true}).then(function (docs) {
        _jeeps = docs.rows.map(function(row) {
          // console.log(row);
              return row.doc;
          });
        return _jeeps;
      }).catch(function (err) {
        console.log(err);
      });

    }
  };
}).factory('GoogleMaps', function($cordovaGeolocation, $ionicLoading,
$rootScope, $cordovaNetwork,$stateParams, ConnectivityMonitor,$http,Jeeps,$timeout,$ionicPopup){

  var API_KEY = 'AIzaSyD4zGo9cejtd83MbUFQL8YU71b8_A5XZpc';
  var coords;
  var interpolate = true;
  var map;



  //fit markers to screen
  var markers = [];

  //array for point a or display jeepney route
  var polylines1 = [];
  var snappedCoordinates1 = [];
  var lineSymbol1;

    //array for point b
    var polylines2 = [];
    var snappedCoordinates2 = [];
    var lineSymbol2;

        //array for pointc
        var polylines3 = [];
        var snappedCoordinates3 = [];
        var lineSymbol3;

            //array for pointd
            var polylines4 = [];
            var snappedCoordinates4 = [];
            var lineSymbol4;

  //latlng1 = coordinates for point a
  var latlng1;
  var points1;

  //latlng2 = coordinates for point b
  var latlng2;
  var points2;


  //latlng3 = coordinates for point c
  var latlng3;
  var points3;

  //latlng3 = coordinates for point c
  var latlng4;
  var points4;

  //color of the jeep
  var color1;
  var color2;
  var color3;
  var color4;

  var start_new1;
  var start_new2;
  var start_new3;
  var start_new4;

  var end1Ctr;
  var end2Ctr;
  var end3Ctr;
  var end4Ctr;

  var marker = null;

  var lat_array_coords1;
  var lat_array_coords2;
  var lat_array_coords3;
  var lat_array_coords4;

   var snappedPolyline1;
   var snappedPolyline2;
   var snappedPolyline3;
   var snappedPolyline4;
   var ctr1;
   var ctr2;
   var ctr3;
   var ctr4;

  function initMap(){

      $rootScope.$on( "$ionicView.beforeLeave", function() {
        console.log('enter rootScope');
        points1=undefined;
        points2=undefined;
        points3=undefined;
        points4=undefined;
        color1 =null;
        color2=null;
        color3=null;
        color4=null;
        latlng1=undefined;
        latlng2=undefined;
        latlng3=undefined;
        latlng4=undefined;
        markers = [];
        end1Ctr=undefined;
        start_new1=undefined;
        end2Ctr=undefined;
        start_new2=undefined;
        end3Ctr=undefined;
        start_new3=undefined;
        end4Ctr=undefined;
        start_new4=undefined;
        ctr1=undefined;
        ctr2=undefined;
        ctr3=undefined;
        ctr4=undefined;
      });
      var mapOptions = {
        center: {'lat': 15.16829179, 'lng': 151.196532},
        zoom: 14,
        streetViewControl: false,
        mapTypeControl: false

      };
      console.log(latlng2!==undefined&&ctr1!==undefined&&ctr2!==undefined);
      if (latlng2!==undefined&&ctr1!==undefined&&ctr2!==undefined) {
          console.log('map3');
          map = new google.maps.Map(document.getElementById('map2'), mapOptions);

      }
      else if (ctr1==='1ride'&&(ctr2==='forth'||ctr2==='back')&&latlng2===undefined) {
          console.log('map2');
          map = new google.maps.Map(document.getElementById('map2'), mapOptions);

      }
      else if (latlng1!==undefined&&ctr1===undefined&&ctr2===undefined){
          console.log('map1');
          map = new google.maps.Map(document.getElementById('map1'), mapOptions);

      }

      var locationControlDiv = document.createElement('div');
      var locationControl = new SetLocation(locationControlDiv, map);

      locationControlDiv.index = 1;
      map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(locationControlDiv);



      console.log(latlng1.color);


      color1 = setColor(latlng1.color);
      console.log(latlng2);
      if(latlng2!==undefined){
        color2 = setColor(latlng2.color);
      }
      if(latlng3!==undefined){
        color3 = setColor(latlng3.color);
      }
      if(latlng4!==undefined){
        color4 = setColor(latlng4.color);
      }


      function setColor(color){
        switch(color) {
          case 'Lavander':
            return '#8A2BE2';
          case 'Santan':
            return '#FFFF99';
          case 'Orange':
            return '#FF4500';
          default:
            return color;
        }
      }



      // Symbol that gets animated along the polyline
      lineSymbol1 = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5,
        strokeColor: color1,
      };

      // Symbol that gets animated along the polyline
      lineSymbol2 = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 5,
          strokeColor: color2,
      };
      // Symbol that gets animated along the polyline
      lineSymbol3 = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 5,
          strokeColor: color3,
      };
      // Symbol that gets animated along the polyline
      lineSymbol4 = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 5,
          strokeColor: color4,
      };



      google.maps.event.addListenerOnce(map, 'idle', function(){
        var colorCodeDiv = document.createElement('div');

        colorCodeDiv.style.border = '2px solid #fff';
        colorCodeDiv.style.boxShadow = '0 1px 4px -1px rgba(0,0,0,.3)';
        colorCodeDiv.style.padding='0px';

        colorCodeDiv.style.maxWidth='100%';
        colorCodeDiv.style.width='100%';

        var divRow = document.createElement('div');
        divRow.className='row';
        divRow.style.padding='0px';
        colorCodeDiv.appendChild(divRow);

        var colorHead;
        if (latlng2 !==undefined){
            colorHead='Legends:';
        }
        else{
            colorHead='Legend:';
        }

        var divCol = document.createElement('div');
        divCol.className='col col-100';
        divCol.innerHTML=colorHead;
        divCol.style.backgroundColor = 'rgb(255, 255, 255)';
        divCol.style.maxWidth='100%';
        divCol.style.cursor = 'pointer';
        divCol.style.textAlign = 'center';
        divRow.appendChild(divCol);



        console.log(latlng2);
        if (latlng2!==undefined&&ctr1!==undefined&&ctr2!==undefined) {

            console.log('enter latlang2');
            console.log(latlng2.coordi);
          var a = getStartEnd(latlng1.coordi,'jeep1');
          var b = getStartEnd(latlng2.coordi,'jeep2');
          if (latlng3 !==undefined){
            console.log('jeep3');
              var c = getStartEnd(latlng3.coordi,'jeep3');
          }
          if (latlng4 !==undefined){
            console.log('jeep4');
              var d = getStartEnd(latlng4.coordi,'jeep4');
          }

          console.log('aaaaaa');
          console.log(start_new4!==undefined);
          var colorCode1b = new setColorCode(colorCodeDiv,map,color1,latlng1.name);
          if (start_new2!==undefined) {
              var colorCode2b = new setColorCode(colorCodeDiv,map,color2,latlng2.name);
          }

          if(latlng3 !==undefined){
              var colorCode3b = new setColorCode(colorCodeDiv,map,color3,latlng3.name);
          }

          if(latlng4 !==undefined){
              var colorCode4b = new setColorCode(colorCodeDiv,map,color4,latlng4.name);
          }
          bendAndSnap(start_new1,'jeep1');
          console.log('bend1');
          if(start_new2!==undefined){
            bendAndSnap(start_new2,'jeep2');
            console.log('bend2');
          }
          if(start_new3!==undefined){
            console.log('bend 3');
            console.log(start_new3);
            bendAndSnap(start_new3,'jeep3');
          }
          if(start_new4!==undefined){
            console.log('bend 4');
            console.log(start_new4);
            bendAndSnap(start_new4,'jeep4');
          }
        }
        else if (ctr1==='1ride'&&(ctr2==='forth'||ctr2==='back')&&latlng2===undefined){
            var colorCode1bif = new setColorCode(colorCodeDiv,map,color1,latlng1.name);
            var ride = getStartEnd(latlng1.coordi,'jeep1');
            console.log(latlng1.coordi);
            console.log('1ride if');
            console.log(start_new1);
            bendAndSnap(start_new1,'jeep1');
        }
        else{
            var colorCode1a = new setColorCode(colorCodeDiv,map,color1,latlng1.name);
            bendAndSnap(latlng1.coordi,'jeep1');

        }

        colorCodeDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(colorCodeDiv);

                console.log(points1);
                        console.log(points2);
                                console.log(points3);
        if(points1 !==undefined && points2 !==undefined && points3 === undefined){
          loadMarkers(points1,points2);

          console.log('loadmarkers2');
        }
        else if(points1 !==undefined && points2 !==undefined && points3 !== undefined && points4 === undefined){
          loadMarkers(points1,points3);

          console.log('loadmarkers3');
        }
        else if(points1 !==undefined && points2 !==undefined && points3 !== undefined && points4 !== undefined){
          loadMarkers(points1,points4);

          console.log('loadmarkers4');
        }
        else if (ctr1==='1ride'&&(ctr2==='forth'||ctr2==='back')&&latlng2===undefined) {
            console.log('1ride ctr');
            loadMarkers(points1,null);
        }
        else{
            console.log('klk');
          console.log(points1);
          loadMarkers(points1,null);
        }

        enableMap();
      });

  }

  function getStartEnd(startEnd,ctr){
      console.log(points1);
    if(ctr === 'jeep1'){
      console.log('enter from');
      var string1 = startEnd;
      lat_array_coords1 = string1.split("|");
      console.log(end1Ctr);
      console.log(lat_array_coords1);
      console.log($stateParams.toId);
      console.log(points1.lat+","+points1.lng);

      var startCtr1;
      var endCtr1;

      // if (ctr1==='1ride') {
      //   console.log('1ride iffff');
      //   startCtr1 = getStartPoints(end1Ctr,lat_array_coords1,ctr);
      //   endCtr1 = getEndPoints(points1.lat+","+points1.lng,lat_array_coords1,ctr);
      // }
      // else {
        startCtr1 = getStartPoints(points1.lat+","+points1.lng,lat_array_coords1,ctr);
        endCtr1 = getEndPoints(end1Ctr,lat_array_coords1,ctr);
      // }

      console.log(points1.lat+","+points1.lng);
      console.log(end1Ctr);
      console.log(lat_array_coords1);

      console.log(startCtr1);
      console.log(endCtr1);


      start_new1 = lat_array_coords1[startCtr1];
      console.log(start_new1);
      console.log(ctr1);
      console.log(startCtr1>endCtr1);
      if (startCtr1>endCtr1) {
        console.log('1a');
        console.log((ctr1==='1ride'&&ctr2==='forth'));
          console.log(start_new1);
        for (var j = startCtr1-1; j >= endCtr1; j--) {
            start_new1 += "|"+lat_array_coords1[j];
        }
        if (ctr1==='1ride') {
          console.log('reverse');
          start_new1 = start_new1.split("|").reverse().join("|");
        }
        console.log(start_new1);

      }
      else {
        console.log('2a');
          for (var i = startCtr1+1; i <= endCtr1; i++) {
              start_new1 += "|"+lat_array_coords1[i];
          }
          // if (ctr1==='1ride'&&ctr2==='back'&&(latlng1.name!=='CHECK-POINT-HOLY'||latlng1.name!=='CHECK-POINT-HOLY-HI-WAY'||latlng1.name!=='MARISOL-PAMPANG'||latlng1.name!=='PANDAN-PAMPANG')) {
          //   console.log('rev2');
          //   start_new1.split("|").reverse().join("|");
          // }


      }
      console.log(start_new1);
    }
    if(ctr === 'jeep2'){
      console.log('enter from');
      console.log(points2);
      var string2 = startEnd;
      lat_array_coords2 = string2.split("|");

      console.log(points2.lat+","+points2.lng);
      console.log(end2Ctr);
      console.log(lat_array_coords2);
      var startCtr2 = getStartPoints(points2.lat+","+points2.lng,lat_array_coords2,ctr);
      var endCtr2 = getEndPoints(end2Ctr,lat_array_coords2,ctr);

      console.log('jepp2');
      console.log(startCtr2);
      console.log(endCtr2);
      start_new2 = lat_array_coords2[startCtr2];
      console.log(start_new2);
      console.log(ctr2);
    //   if (ctr2=='forth') {
    //       console.log('enter ctr2');

        if (startCtr2>endCtr2) {
          console.log('123');
            for (var l = startCtr2-1; l >= endCtr2; l--) {
                start_new2 += "|"+lat_array_coords2[l];
            }
            start_new2 = start_new2.split("|").reverse().join("|");
        }
        else {
          console.log('456');
            for (var k = startCtr2+1; k <= endCtr2; k++) {
                start_new2 += "|"+lat_array_coords2[k];
                console.log(start_new2);
            }

        }
        console.log(start_new2);




      }
      if(ctr === 'jeep3'){
        console.log('enter mid3');
        console.log(points3);
        var string3 = startEnd;
        lat_array_coords3 = string3.split("|");

        console.log(points3.lat+","+points3.lng);
        console.log(end3Ctr);
        console.log(lat_array_coords3);
        var startCtr3 = getStartPoints(points3.lat+","+points3.lng,lat_array_coords3,ctr);
        var endCtr3 = getEndPoints(end3Ctr,lat_array_coords3,ctr);
        console.log(startCtr3);
        console.log(endCtr3);


        start_new3 = lat_array_coords3[startCtr3];
        console.log(start_new3);
        if (startCtr3<endCtr3 && start_new3!==undefined) {
          console.log('enter 3if1');
          for (var m = startCtr3+1; m <= endCtr3; m++) {
              start_new3 += "|"+lat_array_coords3[m];
          }
          // start_new3 = start_new3.split("|").reverse().join("|");
          console.log(start_new3);
        }
        else if (startCtr3>endCtr3 && start_new3!==undefined){
          console.log('enter 3if3');
          for (var n = startCtr3-1; n >= endCtr3; n--) {
              start_new3 += "|"+lat_array_coords3[n];
          }
          start_new3 = start_new3.split("|").reverse().join("|");

          console.log('33a');
          console.log(start_new3);
        }
      }
      if(ctr === 'jeep4'){
        console.log('enter mid4');
        console.log(points4);
        var string4 = startEnd;
        lat_array_coords4 = string4.split("|");

        console.log(points4.lat+","+points4.lng);
        console.log(end4Ctr);
        console.log(lat_array_coords4);
        var startCtr4 = getStartPoints(points4.lat+","+points4.lng,lat_array_coords4,ctr);
        var endCtr4 = getEndPoints(end4Ctr,lat_array_coords4,ctr);
        console.log(startCtr4);
        console.log(endCtr4);


        start_new4 = lat_array_coords4[startCtr4];

        if (startCtr4<endCtr4 && start_new4!==undefined) {
          console.log('enter 4if1');
          for (var m = startCtr4+1; m <= endCtr4; m++) {
              start_new4 += "|"+lat_array_coords4[m];
          }
          // start_new4 = start_new4.split("|").reverse().join("|");
          console.log(start_new4);
        }
        else if (startCtr4>endCtr4 && start_new4!==undefined){
          console.log('enter 4if4');
          for (var n = startCtr4-1; n >= endCtr4; n--) {
              start_new4 += "|"+lat_array_coords4[n];
          }
          start_new4 = start_new4.split("|").reverse().join("|");


          console.log(start_new4);
        }
        console.log('ccc');
        console.log(start_new4);
      }


  }

  //match the selected start point to the start point array
  function getStartPoints(startpoint,ctr,jeepNo){
    console.log(ctr1);
    console.log(ctr2);
    console.log(jeepNo);
    console.log((ctr2==='forth'||ctr2==='back'));
    // if (latlng3===undefined) {
      console.log('undefined');
      console.log(ctr1);
      console.log(ctr2);
      if ((ctr1=='1ride'&&ctr2=='forth'&&jeepNo==='jeep1')||(ctr1=='forth'&&jeepNo==='jeep1')||(ctr2=='forth'&&jeepNo==='jeep2')||(ctr3=='forth'&&jeepNo==='jeep3')||(ctr4=='forth'&&jeepNo==='jeep4')) {
        console.log('start index of');
        console.log(ctr.indexOf(startpoint));
        return ctr.indexOf(startpoint);
      }
      else if((ctr1=='1ride'&&ctr2=='back'&&jeepNo==='jeep1')||(ctr1=='back'&&jeepNo==='jeep1')||(ctr2=='back'&&jeepNo==='jeep2')||(ctr3=='back'&&jeepNo==='jeep3')||(ctr4=='back'&&jeepNo==='jeep4')){

        console.log('lat3 unde');
          console.log('start last index');
          console.log(ctr);
          console.log(startpoint);
          console.log(ctr.lastIndexOf(startpoint));
          return ctr.lastIndexOf(startpoint);
      }
    // }
    // else if(latlng3!==undefined){
    //   console.log('defined');
    //   if ((ctr1=='forth'&&jeepNo==='jeep1')||(ctr2=='forth'&&jeepNo==='jeep2')||(ctr3=='forth'&&jeepNo==='jeep3')) {
    //     console.log('start last index');
    //     console.log(ctr);
    //     console.log(startpoint);
    //     console.log(ctr.lastIndexOf(startpoint));
    //     console.log(ctr.lastIndexOf(startpoint));
    //     return ctr.lastIndexOf(startpoint);
    //   }
    //   else if(((ctr1=='back'&&jeepNo==='jeep1')||(ctr2=='back'&&jeepNo==='jeep2')||(ctr3=='back'&&jeepNo==='jeep3'))){
    //     console.log(jeepNo);
    //     console.log('start index of');
    //     console.log(startpoint);
    //     console.log(ctr);
    //     console.log(ctr.indexOf(startpoint));
    //     return ctr.indexOf(startpoint);
    //   }
    // }
  }

  //match the selected end point to the end point array
  function getEndPoints(endpoint,ctr,jeepNo){

    console.log(endpoint);
    console.log(ctr);
    console.log(ctr1);
    console.log(ctr1=='back'||ctr2=='back'||ctr3=='back');
    console.log(ctr1=='forth'||ctr2=='forth'||ctr3=='forth');

    // if (latlng3===undefined) {
      if((ctr1=='1ride'&&ctr2=='forth'&&jeepNo==='jeep1')||(ctr1=='forth'&&jeepNo==='jeep1')||(ctr2=='forth'&&jeepNo==='jeep2')||(ctr3=='forth'&&jeepNo==='jeep3')||(ctr4=='forth'&&jeepNo==='jeep4')) {
        console.log('end index of');
        console.log(ctr.indexOf(endpoint));
        return ctr.indexOf(endpoint);
      }
      if((ctr1=='1ride'&&ctr2=='back'&&jeepNo==='jeep1')||(ctr1=='back'&&jeepNo==='jeep1')||(ctr2=='back'&&jeepNo==='jeep2')||(ctr3=='back'&&jeepNo==='jeep3')||(ctr4=='back'&&jeepNo==='jeep4')){
          console.log('end last index');
          console.log(ctr);
          console.log(endpoint);
          console.log(ctr.lastIndexOf(endpoint));
          console.log(ctr.lastIndexOf(endpoint));
          return ctr.lastIndexOf(endpoint);
      }
    // }
    // else if (latlng3!==undefined) {
      // if ((ctr1=='1ride'&&ctr2=='forth'&&jeepNo==='jeep1')||(ctr1=='forth'&&jeepNo==='jeep1')||(ctr2=='forth'&&jeepNo==='jeep2')||(ctr3=='forth'&&jeepNo==='jeep3')) {
      //   console.log('end last index');
      //   console.log(ctr);
      //   console.log(endpoint);
      //   console.log(ctr.lastIndexOf(endpoint));
      //   console.log(ctr.lastIndexOf(endpoint));
      //   return ctr.lastIndexOf(endpoint);
      // }
      // else if((ctr1=='1ride'&&ctr2=='back'&&jeepNo==='jeep1')||(ctr1=='back'&&jeepNo==='jeep1')||(ctr2=='back'&&jeepNo==='jeep2')||(ctr3=='back'&&jeepNo==='jeep3')){
      //   console.log('end index of');
      //   console.log(ctr.indexOf(endpoint));
      //   return ctr.indexOf(endpoint);
      // }
    // }


  }

  function setColorCode(controlDiv, map,color,jname) {
    var divRow = document.createElement('div');
    divRow.style.backgroundColor = 'rgb(255, 255, 255)';
    divRow.style.maxWidth='100%';
    divRow.style.width='100%';
    divRow.style.textAlign = 'center';
    divRow.className='row';
    controlDiv.appendChild(divRow);

    var divCol = document.createElement('div');
    divCol.style.padding='0px';
    divCol.className='col';
    divRow.appendChild(divCol);

    var canvas = document.createElement('canvas');
    canvas.id = 'colorCanvas';
    canvas.style.height='10px';
    canvas.style.width='10px';
    console.log(color);
    if(color==='White'){
      canvas.style.border='1px solid #000000';
    }
    if(color==='#FFFF99'){
      canvas.style.border='1px solid #000000';
    }

    canvas.style.backgroundColor=color;
    divCol.appendChild(canvas);

    var text = document.createElement('span');
    text.innerHTML = ' '+jname;
    divCol.appendChild(text);

    // var c = document.getElementById("colorCanvas");
    // var ctx = c.getContext("2d");
    // ctx.fillStyle = "#FF0000";
    // ctx.fillRect(20, 20, 150, 100);


  }

  function SetLocation(controlDiv, map) {
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = 'rgb(255, 255, 255)';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 1px 4px -1px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to get location';
    controlUI.style.marginRight = '10px';
    controlDiv.appendChild(controlUI);


    var controlButton = document.createElement('div');
    controlButton.className='sprite';
    controlUI.appendChild(controlButton);

    controlUI.addEventListener('click', function() {


      // onSuccess Callback This method accepts a `Position` object, which contains the current GPS coordinates
      function onSuccess(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            if ( marker ) {
              marker.setMap(map);
              map.setCenter(pos);
            } else {
              marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: 'https://maps.gstatic.com/mapfiles/maps_lite/images/1x/ic_my_location_24dp.png'
              });
              map.setCenter(pos);
            }

      }

      // onError Callback receives a PositionError object
      //
      function onError(error) {
        onSuccess();
          alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
      }

      // Options: throw an error if no update is received every 30 seconds.
      //
      var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, maximumAge:600000, enableHighAccuracy: false});
    });

  }

  function bendAndSnap(latlngs,ctr) {
      console.log(latlngs);
    coords = latlngs;
    $http({
      method: 'GET',
      url: 'https://roads.googleapis.com/v1/snapToRoads',
      params: {
        interpolate: true,
        key: API_KEY,
        path: coords,
      }
    })
    .then(function successCallback(response) {

      if(ctr == 'jeep1'){
        console.log('enter from');
        processSnapToRoadResponse(response.data,'jeep1');
        drawSnappedPolyline(snappedCoordinates1,'jeep1');
      }

      if(ctr=='jeep2'){
        console.log(response.data);
        console.log('enter to');
        processSnapToRoadResponse(response.data,'jeep2');
        drawSnappedPolyline(snappedCoordinates2,'jeep2');
      }


      if(ctr=='jeep3'){
        console.log(response.data);
        console.log('enter mid');
        processSnapToRoadResponse(response.data,'jeep3');
        drawSnappedPolyline(snappedCoordinates3,'jeep3');
      }


      if(ctr=='jeep4'){
        console.log(response.data);
        console.log('enter 4');
        processSnapToRoadResponse(response.data,'jeep4');
        drawSnappedPolyline(snappedCoordinates4,'jeep4');
      }

      else {
          console.log('default');
        processSnapToRoadResponse(response.data,null);
        drawSnappedPolyline(snappedCoordinates1,null);
      }


      fitBounds(markers);
    },
    function errorCallback(response) {
      console.log(response);
    });
  }


  // Parse response from snapToRoads API request
  // Store all coordinates in response
  // Calls functions to add markers to map for unsnapped coordinates
  function processSnapToRoadResponse(data,ctr) {
    var originalIndexes = [];
    snappedCoordinates1 = [];
    var originalIndexes2 = [];
    snappedCoordinates2 = [];
    var originalIndexes3 = [];
    snappedCoordinates3 = [];
    var originalIndexes4 = [];
    snappedCoordinates4 = [];
    if(ctr == 'jeep1'){
      console.log('process from');
      for (var i = 0; i < data.snappedPoints.length; i++) {
        var latlng1 = {
          'lat': data.snappedPoints[i].location.latitude,
          'lng': data.snappedPoints[i].location.longitude
        };
        var interpolated1 = true;

        if (data.snappedPoints[i].originalIndex !== undefined) {
          interpolated1 = false;
          originalIndexes.push(data.snappedPoints[i].originalIndex);
          latlng1.originalIndex = data.snappedPoints[i].originalIndex;
        }

        latlng1.interpolated = interpolated1;
        snappedCoordinates1.push(latlng1);
      }
    }
    if(ctr=='jeep2'){
      console.log('process to');
      for (var j = 0; j < data.snappedPoints.length; j++) {
        var latlng2 = {
          'lat': data.snappedPoints[j].location.latitude,
          'lng': data.snappedPoints[j].location.longitude
        };
        var interpolated2 = true;

        if (data.snappedPoints[j].originalIndex !== undefined) {
          interpolated2 = false;
          originalIndexes.push(data.snappedPoints[j].originalIndex);
          latlng2.originalIndex = data.snappedPoints[j].originalIndex;
        }

        latlng2.interpolated = interpolated2;
        snappedCoordinates2.push(latlng2);
      }
    }
    if(ctr=='jeep3'){
      console.log('process to');
      for (var k = 0; k < data.snappedPoints.length; k++) {
        var latlng3 = {
          'lat': data.snappedPoints[k].location.latitude,
          'lng': data.snappedPoints[k].location.longitude
        };
        var interpolated3 = true;

        if (data.snappedPoints[k].originalIndex !== undefined) {
          interpolated3 = false;
          originalIndexes.push(data.snappedPoints[k].originalIndex);
          latlng3.originalIndex = data.snappedPoints[k].originalIndex;
        }

        latlng3.interpolated = interpolated3;
        snappedCoordinates3.push(latlng3);
      }
    }
    if(ctr=='jeep4'){
      console.log('process to');
      for (var l = 0; l < data.snappedPoints.length; l++) {
        var latlng4 = {
          'lat': data.snappedPoints[l].location.latitude,
          'lng': data.snappedPoints[l].location.longitude
        };
        var interpolated4 = true;

        if (data.snappedPoints[l].originalIndex !== undefined) {
          interpolated4 = false;
          originalIndexes.push(data.snappedPoints[l].originalIndex);
          latlng4.originalIndex = data.snappedPoints[l].originalIndex;
        }

        latlng4.interpolated = interpolated4;
        snappedCoordinates4.push(latlng4);
        console.log(snappedCoordinates4);
      }
    }



  }



  // Draw the polyline for the snapToRoads API response
  function drawSnappedPolyline(snappedCoords,ctr) {



    if(ctr =='jeep1'){
        console.log(snappedCoords);
      snappedPolyline1 = new google.maps.Polyline({
        path: snappedCoords,
        strokeColor: 'turquoise',
        strokeWeight: 5,
        icons: [{
          icon: lineSymbol1,
          offset: '100%'
        }]
      });

      snappedPolyline1.setMap(map);
      console.log(snappedPolyline1);
      animateCircle(snappedPolyline1);

      polylines1.push(snappedPolyline1);
      console.log(polylines1);
      console.log('draw from');
    }
    if(ctr=='jeep2'){
      console.log('draw to');
      console.log(snappedCoords);
      snappedPolyline2 = new google.maps.Polyline({
        path: snappedCoords,
        strokeColor: '#FF69B4',
        strokeWeight: 5,
        icons: [{
          icon: lineSymbol2,
          offset: '100%'
        }]
      });

      snappedPolyline2.setMap(map);
      animateCircle(snappedPolyline2);

      polylines2.push(snappedPolyline2);
      console.log(polylines2);
    }
    if(ctr=='jeep3'){
      console.log('draw mid');
      console.log(snappedCoords);
      snappedPolyline3 = new google.maps.Polyline({
        path: snappedCoords,
        strokeColor: '#98FB98',
        strokeWeight: 5,
        icons: [{
          icon: lineSymbol3,
          offset: '100%'
        }]
      });

      snappedPolyline3.setMap(map);
      animateCircle(snappedPolyline3);

      polylines3.push(snappedPolyline3);
      console.log(polylines3);
    }
    if(ctr=='jeep4'){
      console.log('draw 4');
      console.log(snappedCoords);
      snappedPolyline4 = new google.maps.Polyline({
        path: snappedCoords,
        strokeColor: '#FF00FF',
        strokeWeight: 5,
        icons: [{
          icon: lineSymbol4,
          offset: '100%'
        }]
      });

      snappedPolyline4.setMap(map);
      animateCircle(snappedPolyline4);

      polylines4.push(snappedPolyline4);
      console.log(polylines4);
    }

    for (var i = 0; i < snappedCoords.length; i++) {
      var marker = addMarker(snappedCoords[i]);
    }




  }

  //add marker for fitBounds()
  function addMarker(coords,ctr) {
    var marker = new google.maps.Marker({
      position: coords,
      map: map,
    });
    marker.setMap(null);
    markers.push(marker);

    return marker;
  }

  //load markers for the landmarks
  function loadMarkers(points,points2){

console.log(points2);
    console.log(points);
      var records;
      if (points2!==null) {
        records = [{lat:points.lat,lng:points.lng,text:points.text},{lat:points2.lat,lng:points2.lng,text:points2.text}];
      }
      else {
        records = points;
      }

      console.log(records);

      for (var x = 0; x < records.length; x++) {
        var markerPos = new google.maps.LatLng(records[x].lat,records[x].lng);
        var marker = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            position: markerPos
        });
        var infoWindowContent;
        if (points2!==null) {
          infoWindowContent = "<h4>" + records[x].text + "</h4>";
          addInfoWindow(marker, infoWindowContent);
        }
        else{
          infoWindowContent = "<h4>" + points[x].text +"</h4>";
          addInfoWindow(marker, infoWindowContent);
        }
      }
    //
    // }





  }

  //display info about the markers
  function addInfoWindow(marker, message) {
      var infoWindow = new google.maps.InfoWindow({
          content: message
      });
      google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open(map, marker);
      });
  }

  //Animate an icon along a polyline
  function animateCircle(polyline) {
    var count = 0;
    var defaultIcon = [
      {
        icon: lineSymbol1,
        offset: '100%'
      }
    ];

    window.setInterval(function() {
      count = (count + 0.7) % 200;
      var icons = polyline.get('icons') || defaultIcon;
      icons[0].offset = (count / 2) + '%';
      polyline.set('icons', icons);
    }, 20);
  }

  //Fit the map bounds to the current set of markers
  function fitBounds(markers) {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].getPosition());
    }
    map.fitBounds(bounds);
  }

  function enableMap(){
    $ionicLoading.hide();
  }

  function disableMap(){
    $ionicLoading.show({
      template: 'You must be connected to the Internet to view this map.',
      hideOnStateChange: true,
      duration: 5000
    });
  }

  function loadGoogleMaps(){
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      noBackdrop: true,
      maxWidth: 200,
      duration: 5000,
      showDelay: 0,
      hideOnStateChange: true
    });

    //This function will be called once the SDK has been loaded
    window.mapInit = function(){
      initMap();
      console.log('callback map int');
    };

    //Create a script element to insert into the page
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "googleMaps";

    //Note the callback function in the URL
    script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&callback=mapInit';

    document.body.appendChild(script);

  }

  function checkLoaded(){
    if(typeof google == "undefined" || typeof google.maps == "undefined"){
      loadGoogleMaps();
      console.log('load');
    } else {
        console.log('enable');
      enableMap();
    }
  }



  function addConnectivityListeners(){

    if(ionic.Platform.isWebView()){

      // Check if the map is already loaded when the user comes online,
//if not, load it
      $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
          console.log('check loaded');
        checkLoaded();
      });

      // Disable the map when the user goes offline
      $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
        disableMap();
      });

    }
    else {

      //Same as above but for when we are not running on a device
      window.addEventListener("online", function(e) {
        checkLoaded();
        console.log('check loaded');
      }, false);

      window.addEventListener("offline", function(e) {
        disableMap();
      }, false);
    }

  }

  return {
    init: function(options){
      var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
      console.log(loadTime);
      console.log('123');
        console.log(options);
        console.log(points2);

        ctr1=options.ctr1;
        ctr2=options.ctr2;
        ctr3=options.ctr3;
        ctr4=options.ctr4;

        console.log(ctr2);
        console.log(options.jeep_2!==undefined);


        latlng1 = options.jeep_1;
        points1 = options.marker_1;
        console.log(options.jeep_2!==undefined);
        console.log(options.jeep_2);
        console.log(options.jeep_3);
        if(ctr1==='1ride'&&(ctr2==='forth'||ctr2==='back')){
            console.log(options.end1);
            end1Ctr = options.end1;
            console.log(end1Ctr);
            points2 = options.marker_2;
        }

        else if (options.jeep_2!==undefined) {
            console.log('not undefined');
            latlng2 = options.jeep_2;
            console.log(latlng2);
            points2 = options.marker_2;
            end1Ctr = options.end1;
            end2Ctr = options.end2;
            if(options.jeep_3!==undefined){
              console.log('jeep3 not unde');
                latlng3 = options.jeep_3;
                points3 = options.marker_3;
                end1Ctr = options.end1;
                end2Ctr = options.end2;
                end3Ctr = options.end3;
            }
            else {
                console.log('jeep3 undefined');
                latlng3 = undefined;
                points3 = undefined;
                end3Ctr = null;
            }
            if(options.jeep_4!==undefined){
              console.log('jeep4 not unde');
                latlng4 = options.jeep_4;
                points4 = options.marker_4;
                end1Ctr = options.end1;
                end2Ctr = options.end2;
                end3Ctr = options.end3;
                end4Ctr = options.end4;
                console.log('aa');
                console.log(end4Ctr);
            }
            else {
                console.log('jeep4 undefined');
                latlng4 = undefined;
                points4 = undefined;
                end4Ctr = null;
            }
        }
        else {
            latlng2 = undefined;
            points2 = undefined;
            end1Ctr = null;
            end2Ctr = null;


        }




      if(typeof google == "undefined" || typeof google.maps == "undefined"){

        console.warn("Google Maps SDK needs to be loaded");

        disableMap();

        if(ConnectivityMonitor.isOnline()){
          loadGoogleMaps();
          console.log('unde ol');
        }
      }
      else {
        if(ConnectivityMonitor.isOnline()){
          initMap();
          enableMap();
          console.log('de ol');
        } else {
          disableMap();

          console.log('offl');
        }
      }


      addConnectivityListeners();

    }
  };

}).factory('ConnectivityMonitor', function($rootScope, $cordovaNetwork){

  return {
    isOnline: function(){

      if(ionic.Platform.isWebView()){
        return $cordovaNetwork.isOnline();
      } else {
        return navigator.onLine;
      }

    },
    ifOffline: function(){

      if(ionic.Platform.isWebView()){
        return !$cordovaNetwork.isOnline();
      } else {
        return !navigator.onLine;
      }

    }
  };
});
