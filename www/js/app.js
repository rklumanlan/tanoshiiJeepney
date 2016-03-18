// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services', 'pascalprecht.translate'])

.run(function($ionicPlatform, $translate) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

    if(typeof navigator.globalization !== "undefined") {
        navigator.globalization.getPreferredLanguage(function(language) {
            $translate.use((language.value).split("-")[0]).then(function(data) {
                console.log("SUCCESS -> " + data);
            }, function(error) {
                console.log("ERROR -> " + error);
            });
        }, null);
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider,$ionicConfigProvider) {	$ionicConfigProvider.backButton.previousTitleText(false).text(null);


  $translateProvider.translations('en', {
      tab1_title: "Jeepney Routes",
      tab2_title: "Find Routes",
      tab3_title: "How to Use",
      route_header1: "Angeles City",
      route_header2: "Clark",
      route_desc: "Route Description:",
      HTR_Jeep:"How to ride Jeepneys",
      HTR_Jeep_P1:"The picture below shows the Jeepney route name (where the Jeepney will pass back and forth) and the color code. Typically, the route name is placed on the Jeepney's windshield and on the sides of the vehicle.",
      SR_Jeep:"Steps on riding a Jeepney:",
      SR_Jeep_P1:"1. For first timers to commute on a Jeepney, you can approach the locals on what Jeepney route should be taken heading to the desired destination.",
      SR_Jeep_P2:"2. On taking a Jeepneys, wave your hands, then the Jeepney will park on your nearest distance for you to ride in.",
      SR_Jeep_P3:"3. Pass your fare when either you're near or farther to your destination. If you are seated far from the driver, pass your fare by saying the word \"Bayad po\" which means \"Here is the fare\" and they will immediately pass it to the driver. In some cases, there is one person who collects the payment, just pass your fare to them. If you are not familiar with the fare, submitting a 20 peso bill is quite useful. After your payment reaches the driver or the collector, you will be asked how many passengers are inclusive of the fare.",
      SR_Jeep_P4:"4. To get off the Jeepney, say \"Para po\" which means \"Please stop\" and then the Jeepney will drop off you to the nearest stop.",
      Note_P1:"Jeepneys are the most popular means of public transportation in the Philippines. They are known for their crowded seating and kitsch decorations, which have become a ubiquitous symbol of Philippine culture and art. It is also a public utility vehicle where people commute in this kind of vehicle. You should be careful on your belongings like gadgets, wallets and jewelleries because there might be burglers inside the jeepney. Occupying seats closer to the driver is recommended.About the fares, don't pay bills with high values like 200, 500 or 1000 peso bill. If possible, pass coins or bills like 20, 50 and 100 peso.",
      "Legend:": "Legend:",
      "Legends:": "Legends:",
      "出発地：":"From:",
      "目的地：":"To:",
      // "戻る":"Back",
      Back:"Back",
      "アンヘレスシティホール":"Angeles City Hall",
      // "Angeles Medical Center Inc.":"Angeles Medical Center Inc.",
      "アンヘレスユニバーシティファウンデーション":"Angeles University Foundation",
      "AUF メディカルセンター":"Angeles University Foundation Medical Center",
      "アヌナス":"Anunas",
      "バンカル":"Bancal",
      // "Carmenville":"Carmenville",
      "シティセンター":"Citi Center",
      "アンヘレスシティ大学":"City College of Angeles",
      "カワヤン":"Cuayan",
      "ダイアモンドサブディビジョン":"Diamond Subdivision",
      // "Dr. Amando L. Garcia Medical Center, Inc.":"Dr. Amando L. Garcia Medical Center, Inc.",
      "フィールズアベニュー":"Fields Avenue",
      "フレンドシップ":"Friendship",
      "フレンドシッププラザ":"Friendship Plaza",
      "ホリーエンジェル大学":"Holy Angel University",
      "ホリーファミリーメディカルセンター":"Holy Family Medical Center",
      // "Holy Rosary Parish Church":"Holy Rosary Parish Church",
      "イマキュレートコンセプションパリッシュ":"Immaculate Concepcion Parish",
      // "Jenra Mall":"Jenra Mall",
      "ルーデスノースウェスト":"Lourdes North West",
      "メインゲートターミナル":"Main Gate Terminal",
      "マーゴット":"Margot",
      "マリソル":"Marisol",
      "マーキーモール":"Marquee Mall",
      // "Nepo Mall":"Nepo Mall",
      "ラファエルラサティンメモリアルメディカルセンター":"Rafael Lazatin Memorial Medical Center",
      "リパブリックセントラルコレッジズ":"Republic Central Colleges",
      "SMシティクラーク":"SM City Clark",
      "サクレッドハートメディカルセンター":"Sacred Heart Medical Center",
      "サパンベイトー":"Sapang Bato",
      // "Saver\'s Mall":"Saver\'s Mall",
      "システムズプラスカレッジファウンデーション":"Systems Plus College Foundation",
      "ザメディカルシティ - アンヘレス":"The Medical City Angeles",
      "チモグパークゲート1":"Timog Park Gate 1",
      "チモグパークゲート 2":"Timog Park Gate 2",
      "チモグパークゲート 3":"Timog Park Gate 3",
      "トランスファ":"Transfer",
      // "Villa Sol":"Villa Sol",
      Blue: "Blue",
      White:"White",
      Gray:"Gray",
      Green:"Green",
      Lavander: "Lavander",
      Santan: "Santan",
      Red: "Red",
      Maroon: "Maroon",
      Beige: "Beige",
      Yellow: "Yellow",
      Orange:"Orange",
      "Search":"Search",
      "OK":"OK",
      "Alert":"Alert",
      "Empty Fields! Please select starting point or destination.":"Empty Fields! Please select starting point or destination.",
      "Starting point and destination must not be the same.":"Starting point and destination must not be the same.",
      "From:":"From:",
      "To:":"To:",
      "Choose starting point":"Choose starting point",
      "Choose destination":"Choose destination",
      "View Map":"View Map",
      "You are just near to Marquee Mall. You don\'t need to ride a jeepney.":"You are just near to Marquee Mall. You don\'t need to ride a jeepney.",
      "You are just near to SM City Clark. You don\'t need to ride a jeepney.":"You are just near to SM City Clark. You don\'t need to ride a jeepney.",
      "You are just near to Main Gate Terminal. You don\'t need to ride a jeepney.":"You are just near to Main Gate Terminal. You don\'t need to ride a jeepney.",
      "You are just near to Angeles University Foundation. You don\'t need to ride a jeepney.":"You are just near to Angeles University Foundation. You don\'t need to ride a jeepney.",
      "You are just near to Angeles University Foundation Medical Center. You don\'t need to ride a jeepney.":"You are just near to Angeles University Foundation Medical Center. You don\'t need to ride a jeepney.",
      "You are just near to Holy Rosary Parish Church. You don\'t need to ride a jeepney.":"You are just near to Holy Rosary Parish Church. You don\'t need to ride a jeepney.",
      "You are just near to Holy Angel University. You don\'t need to ride a jeepney.":"You are just near to Holy Angel University. You don\'t need to ride a jeepney.",
      "You are just near to Systems Plus College Foundation. You don\'t need to ride a jeepney.":"You are just near to Systems Plus College Foundation. You don\'t need to ride a jeepney.",
      "You are just near to Immaculate Concepcion Parish. You don\'t need to ride a jeepney.":"You are just near to Immaculate Concepcion Parish. You don\'t need to ride a jeepney.",
      "You are just near to Timog Park Gate 3. You don\'t need to ride a jeepney.":"You are just near to Timog Park Gate 3. You don\'t need to ride a jeepney.",
      "You are just near to Friendship Plaza. You don\'t need to ride a jeepney.":"You are just near to Friendship Plaza. You don\'t need to ride a jeepney.",
      "You are just near to Nepo Mall. You don\'t need to ride a jeepney.":"You are just near to Nepo Mall. You don\'t need to ride a jeepney.",
      "You are just near to Jenra Mall. You don\'t need to ride a jeepney.":"You are just near to Jenra Mall. You don\'t need to ride a jeepney.",
      "You are just near to Angeles City Hall. You don\'t need to ride a jeepney.":"You are just near to Angeles City Hall. You don\'t need to ride a jeepney.",
      "You are just near to Saver\'s Mall. You don\'t need to ride a jeepney.":"You are just near to Saver\'s Mall. You don\'t need to ride a jeepney.",
      "You are just near to Diamond Subdivision. You don\'t need to ride a jeepney.":"You are just near to Diamond Subdivision. You don\'t need to ride a jeepney.",
      "You are just near to Carmenville. You don\'t need to ride a jeepney.":"You are just near to Carmenville. You don\'t need to ride a jeepney.",
      "You are just near to Timog Park Gate 1. You don\'t need to ride a jeepney.":"You are just near to Timog Park Gate 1. You don\'t need to ride a jeepney.",

      "Route 1":"Route 1",
      "Route 2":"Route 2",
      "Route 3":"Route 3",
      "Route 5&7":"Route 5と7",
      "ROUTE 1":"ROUTE 1",
      "ROUTE 2":"ROUTE 2",
      "ROUTE 3":"ROUTE 3",
      "ROUTE 5&7":"ROUTE 5&7",
      "Angeles City Hall": "Angeles City Hall",
      "Angeles Medical Center Inc.": "Angeles Medical Center Inc.",
      "Angeles University Foundation": "Angeles University Foundation",
      "Angeles University Foundation Medical Center": "Angeles University Foundation Medical Center",
      "Anunas": "Anunas",
      "Bancal": "Bancal",
      "Carmenville": "Carmenville",
      "Citi Center": "Citi Center",
      "City College of Angeles": "City College of Angeles",
      "Cuayan": "Cuayan",
      "Diamond Subdivision": "Diamond Subdivision",
      "Dr. Amando L. Garcia Medical Center, Inc.": "Dr. Amando L. Garcia Medical Center, Inc.",
      "Fields Avenue": "Fields Avenue",
      "Friendship": "Friendship",
      "Friendship Plaza": "Friendship Plaza",
      "Holy Angel University": "Holy Angel University",
      "Holy Family Medical Center": "Holy Family Medical Center",
      "Holy Rosary Parish Church": "Holy Rosary Parish Church",
      "Immaculate Concepcion Parish": "Immaculate Concepcion Parish",
      "Jenra Mall": "Jenra Mall",
      "Lourdes North West": "Lourdes North West",
      "Main Gate Terminal": "Main Gate Terminal",
      "Margot": "Margot",
      "Marisol": "Marisol",
      "Marquee Mall": "Marquee Mall",
      "Nepo Mall": "Nepo Mall",
      "Rafael Lazatin Memorial Medical Center": "Rafael Lazatin Memorial Medical Center",
      "Republic Central Colleges": "Republic Central Colleges",
      "SM City Clark" : "SM City Clark",
      "Sacred Heart Medical Center": "Sacred Heart Medical Center",
      "Sapang Bato": "Sapang Bato",
      "Saver\'s Mall": "Saver\'s Mall",
      "Systems Plus College Foundation": "Systems Plus College Foundation",
      "The Medical City Angeles": "The Medical City Angeles",
      "Timog Park Gate 1": "Timog Park Gate 1",
      "Timog Park Gate 2": "Timog Park Gate 2",
      "Timog Park Gate 3": "Timog Park Gate 3",
      "Transfer": "Transfer",
      "Villa Sol": "Villa Sol",
      "CHECK-POINT-HOLY": "CHECK-POINT-HOLY",
      "CHECK-POINT-HOLY-HI-WAY": "CHECK-POINT-HOLY-HI-WAY",
      "CHECK-POINT-HENSONVILLE-HOLY":"CHECK-POINT-HENSONVILLE-HOLY",
      "PANDAN-PAMPANG":"PANDAN-PAMPANG",
      "MAINGATE-FRIENDSHIP":"MAINGATE-FRIENDSHIP",
      "MARISOL-PAMPANG":"MARISOL-PAMPANG",
      "PAMPANG-HOLY":"PAMPANG-HOLY",
      "PLARIDEL-CAPAYA":"PLARIDEL-CAPAYA",
      "SUNSET-NEPO":"SUNSET-NEPO",
      "VILLA-PAMPANG":"VILLA-PAMPANG",
      "SAPANG BATO-ANGELES":"SAPANG BATO-ANGELES",
      "Walk through":"Walk through",
      "Check-Point-Holy route is from Maingate to Holy Angel University.":"Check-Point-Holy route is from Maingate to Holy Angel University.",
      "Check-Point-Hensonville-Holy route is from Narciso St. to Holy Angel University or vice-versa.":"Check-Point-Hensonville-Holy route is from Narciso St. to Holy Angel University or vice-versa.",
      "Check-Point-Holy-Hi-Way route is from Maingate to Holy Angel University.":"Check-Point-Holy-Hi-Way route is from Maingate to Holy Angel University.",
      "Maingate-Friendship is from Donjuico Avenue.":"Maingate-Friendship is from Donjuico Avenue.",
      "Marisol-Pampang is from the Jake Gonzales Avenue.":"Marisol-Pampang is from the Jake Gonzales Avenue.",
      "Pampang-Holy is from Miranda Extension to Angeles City National Highschool.":"Pampang-Holy is from Miranda Extension to Angeles City National Highschool.",
      "PANDAN-PAMPANG is from Miranda St. to Angeles City Hall.":"PANDAN-PAMPANG is from Miranda St. to Angeles City Hall.",
      "Sapangbato-Angeles is from Brgy. Lourdes North West to Sapang Bato.":"Sapangbato-Angeles is from Brgy. Lourdes North West to Sapang Bato.",
      "Sunset-Nepo is from Teresa Avenue to Fil-Am Friendship.":"Sunset-Nepo is from Teresa Avenue to Fil-Am Friendship.",
      "Villa-Pampang is from Essel Park to Holy Angel University.":"Villa-Pampang is from Essel Park to Holy Angel University.",
      "Plaridel-Capaya is from Plaridel Street to Capaya.":"Plaridel-Capaya is from Plaridel Street to Capaya."
  });
  $translateProvider.translations('ja', {
      tab1_title: "ジープニー経路",
      tab2_title: "経路を検索",
      tab3_title: "使い方",
      Back:"戻る",
      route_header1: "アンヘレス市",
      route_header2: "クラーク",
      route_desc: "ルート概要:",
      "From:":"出発地：",
      "To:":"目的地：",
      "Choose starting point":"出発地を選択",
      "Choose destination":"目的地を選択",
      "View Map":"地図を表示",
      Blue: "青",
      White:"白",
      Gray:"灰",
      Green:"緑",
      Lavander: "ラベンダー",
      Santan: "サンタン",
      Red: "赤",
      Maroon: "マルーン",
      Beige: "ベージュ",
      Yellow: "黄",
      Orange:"オレンジ",
      "Legend:": "凡例：",
      "Legends:": "凡例：",
      "Search":"検索",
      "OK":"OK",
      "Alert":"アラート",
      "Empty Fields! Please select starting point or destination.":"出発地と目的地を選択してください。",
      "Starting point and destination must not be the same.":"出発地と目的地が同じ場所になっています。",
      "HTR_Jeep":"ジープニーの乗り方",
      "HTR_Jeep_P1":"下の写真は、ジープニーのルートとカラーコードを示します。通常、ルートはジープニーのフロントガラスと、車両の両側に書かれてあります。",
      "SR_Jeep":"ジープニーに乗って上のステップ：",
      SR_Jeep_P1:"1。ジープニーに初めて乗る場合は、どのジープニーに乗ればいいか周りの人に聞くといいかもしれません。",
      SR_Jeep_P2:"2。ジープニーに乗るには、まずジープニーの運転手に向けて手を振ります。すると、ジープニーは近くに停まります。",
      SR_Jeep_P3:"3。乗車したら運賃を払います。後方に座っている場合は、他の客に伝え、手渡しでお金を渡すようにお願いします。その際、「バヤドポ」と伝えます。また集金専門のスタッフが居ることもありますので、その際は運転手ではなくスタッフに渡すようにします。正確な金額が分からなければ20ペソ紙幣を渡すといいでしょう。何人分の支払いか、聞かれたら伝えます。",
      SR_Jeep_P4:"4。ジープニーから降りるには、「パラポ」と伝えれば、停まってくれます。",
      "Note:":"注意：",
      Note_P1:"ジープニーはフィリピンの公共交通機関の中で最も人気のある手段です。ジープニーは、派手な装飾で知られています。また社内が大変混むことがあることも知られています。ジープニー内ではスリや強盗の被害に遭う可能性があるため、スマホなどのガジェットや財布や宝石類などの持ち物が盗まれないように充分注意して下さい。可能ならばドライバに近い席に座ることをお勧めします。また、運賃を支払う際は200、500または1000ペソ札のような高額な紙幣を使用せず、なるべく硬貨、または20、50および100ペソまでの紙幣を使うようにします。",


      "You are just near to Marquee Mall. You don\'t need to ride a jeepney.":"マーキーモールが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to SM City Clark. You don\'t need to ride a jeepney.":"SMシティクラークが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Main Gate Terminal. You don\'t need to ride a jeepney.":"メインゲートターミナルが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Angeles University Foundation. You don\'t need to ride a jeepney.":"アンヘレス大学財団が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Angeles University Foundation Medical Center. You don\'t need to ride a jeepney.":"アンヘレス大学財団医療センターが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Holy Rosary Parish Church. You don\'t need to ride a jeepney.":"ホーリーロザリオ教区教会が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Holy Angel University. You don\'t need to ride a jeepney.":"ホーリーエンジェル大学が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Systems Plus College Foundation. You don\'t need to ride a jeepney.":"システムプラスカレッジ財団が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Immaculate Concepcion Parish. You don\'t need to ride a jeepney.":"無原罪のお宿りの教区が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Timog Park Gate 3. You don\'t need to ride a jeepney.":"Timogパークゲート 3が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Friendship Plaza. You don\'t need to ride a jeepney.":"フレンドシッププラザが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Nepo Mall. You don\'t need to ride a jeepney.":"ネポモールが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Jenra Mall. You don\'t need to ride a jeepney.":"ジェンラモールが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Angeles City Hall. You don\'t need to ride a jeepney.":"アンヘレス市ホールが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Saver\'s Mall. You don\'t need to ride a jeepney.":"セーバーのモールが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Diamond Subdivision. You don\'t need to ride a jeepney.":"ダイヤモンド区が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Carmenville. You don\'t need to ride a jeepney.":"カルメンヴィルが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Timog Park Gate 1. You don\'t need to ride a jeepney.":"Timogパークゲート1が近くにあります。ジープニーに乗る必要はありません。",


      "Angeles City Hall": "アンヘレスシティホール",
      "Angeles Medical Center Inc.": "Angeles Medical Center Inc.",
      "Angeles University Foundation": "アンヘレスユニバーシティファウンデーション",
      "Angeles University Foundation Medical Center": "AUF メディカルセンター",
      "Anunas": "アヌナス",
      "Bancal": "バンカル",
      "Carmenville": "Carmenville",
      "Citi Center": "シティセンター",
      "City College of Angeles": "アンヘレスシティ大学",
      "Cuayan": "Cuayan",
      "Diamond Subdivision": "ダイアモンドサブディビジョン",
      "Dr. Amando L. Garcia Medical Center, Inc.": "Dr. Amando L. Garcia Medical Center, Inc.",
      "Fields Avenue": "フィールズアベニュー",
      "Friendship": "フレンドシップ",
      "Friendship Plaza": "フレンドシッププラザ",
      "Holy Angel University": "ホリーエンジェル大学",
      "Holy Family Medical Center": "ホリーファミリーメディカルセンター",
      "Holy Rosary Parish Church": "Holy Rosary Parish Church",
      "Immaculate Concepcion Parish": "イマキュレートコンセプションパリッシュ",
      "Jenra Mall": "Jenra Mall",
      "Lourdes North West": "ルーデスノースウェスト",
      "Main Gate Terminal": "メインゲートターミナル",
      "Margot": "マーゴット",
      "Marisol": "マリソル",
      "Marquee Mall": "マーキーモール",
      "Nepo Mall": "Nepo Mall",
      "Rafael Lazatin Memorial Medical Center": "ラファエルラサティンメモリアルメディカルセンター",
      "Republic Central Colleges": "リパブリックセントラルコレッジズ",
      "SM City Clark" : "SMシティクラーク",
      "Sacred Heart Medical Center": "サクレッドハートメディカルセンター",
      "Sapang Bato": "サパンベイトー",
      "Saver\'s Mall": "Saver\'s Mall",
      "Systems Plus College Foundation": "システムズプラスカレッジファウンデーション",
      "The Medical City Angeles": "ザメディカルシティ - アンヘレス",
      "Timog Park Gate 1": "チモグパークゲート1",
      "Timog Park Gate 2": "チモグパークゲート 2",
      "Timog Park Gate 3": "チモグパークゲート 3",
      "Transfer": "トランスファ",
      "Villa Sol": "Villa Sol",



      "CHECK-POINT-HOLY": "チェック-ポイント- ホーリーハイー",
      "CHECK-POINT-HOLY-HI-WAY": "チェック-ポイント- ホーリーハイー-ウェイ",
      "CHECK-POINT-HENSONVILLE-HOLY":"チェック-ポイント-ヘンソンヴィル-ホーリー",
      "PANDAN-PAMPANG":"パンダン-パンパング",
      "MAINGATE-FRIENDSHIP":"メインゲート-フレンドシップ",
      "MARISOL-PAMPANG":"マリソル-パンパング",
      "PAMPANG-HOLY":"パンパング-ホーリー",
      "PLARIDEL-CAPAYA":"プラリデル-カパヤ",
      "SUNSET-NEPO":"スンセト-ネポ",
      "VILLA-PAMPANG":"ビラ-パンパング",
      "SAPANG BATO-ANGELES":"サパングバトバト-アンヘレス",
      "Walk through":"通り抜ける",
      "Check-Point-Holy route is from Maingate to Holy Angel University.":"チェック-ポイント-ホーリールートは、メインゲートからホーリーエンジェル大学までです。",
      "Check-Point-Hensonville-Holy route is from Narciso St. to Holy Angel University or vice-versa.":"チェック-ポイント-ヘンソンヴィル-ホーリールートは、ナルシソ・ストリートからその逆ホーリーエンジェル大学またはにあります。",
      "Check-Point-Holy-Hi-Way route is from Maingate to Holy Angel University.":"チェック-ポイント- ホーリーハイー-ウェイルートは、メインゲートからホーリーエンジェル大学までです。",
      "Maingate-Friendship is from Donjuico Avenue.":"メインゲート-フレンドシップはドンJuicoアベニューからです。",
      "Marisol-Pampang is from the Jake Gonzales Avenue.":"マリソル-パンパングはジェイクゴンザレスアベニューからです。",
      "Pampang-Holy is from Miranda Extension to Angeles City National Highschool.":"パンパング-ホーリーはミランダ拡張からアンヘレス全国高校までです。",
      "PANDAN-PAMPANG is from Miranda St. to Angeles City Hall.":"パンダン-パンパングはミランダ通りからアンヘレス市ホールまでです。",
      "Sapangbato-Angeles is from Brgy. Lourdes North West to Sapang Bato.":"サパングバトバト-アンヘレスはBrgy. ルルドノースウェストからサパングバトまでです。",
      "Sunset-Nepo is from Teresa Avenue to Fil-Am Friendship.":"スンセト-ネポはテレサ・アベニューからのFil-アムの友情にあります。",
      "Villa-Pampang is from Essel Park to Holy Angel University.":"ビラ-パンパングはエッセルパークからホーリーエンジェル大学までです。",
      "Plaridel-Capaya is from Plaridel Street to Capaya.":"Plaridel-カパヤ川はカパヤ川にPlaridelストリートからです。"
  });
  $translateProvider.preferredLanguage("ja");
  $translateProvider.fallbackLanguage("ja");

  // Enable escaping of HTML
  $translateProvider.useSanitizeValueStrategy('escape');


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'NavBarCtrl'
  })

  // Each tab has its own nav history stack:
  .state('tab.jeep', {
      url: '/jeep',
      views: {
        'tab-jeep': {
          templateUrl: 'templates/tab-jeep.html',
          controller: 'JeepCtrl'
        }
      }
    })

  .state('tab.jeep-detail', {
    url: '/jeeps/:jeepId',
    views: {
      'tab-jeep': {
        templateUrl: 'templates/jeep-detail.html',
        controller: 'JeepDetailCtrl'
      }
    }
  })

  .state('tab.maps', {
    url: '/jeeps/:jeepId/maps',
    views: {
      'tab-jeep': {
        templateUrl: 'templates/tab-maps1.html',
        controller: 'MapsCtrl'
      }
    }
  })

  .state('tab.findroute', {
    url: '/findroute',
    views: {
      'tab-findroute': {
        templateUrl: 'templates/tab-findroute.html',
        controller: 'FindRouteCtrl'
      }
    }
  })


  .state('tab.findroute-maps', {
    url: '/findroute/:fromId/:toId/maps',
    views: {
      'tab-findroute': {
        templateUrl: 'templates/tab-maps2.html',
        controller: 'MapsCtrl'
      }
    }
  })




  .state('tab.howto', {
    url: '/howto',
    views: {
      'tab-howto': {
        templateUrl: 'templates/tab-howto.html',
        controller: 'HowToCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/jeep');

});
