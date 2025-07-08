'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c4d53f76de96e2d38a6155cbe9010089",
".git/config": "64816ca942b637b40d8901be665719dd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9d2887316eb98b4d3d4f5b40b3625c8e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eae465027b70117146fdcd77a113050d",
".git/logs/refs/heads/gh-pages": "eae465027b70117146fdcd77a113050d",
".git/logs/refs/remotes/origin/gh-pages": "a92cf5421fae4161aa197869e54e29f6",
".git/objects/00/797a443269779a8d7cdd5c03fbda5b3474edcb": "78baaee1b89bb9b7321c5601555b4b9c",
".git/objects/01/c61a02c4f612ad7794f5662d9ecb7a985bb9f7": "e5e5cef6d30bc170522311b9fad3c50f",
".git/objects/04/c2418031867e304e6774197d73a9fd16cbba81": "7dfd75a2e3975485c4b5211076f6caf6",
".git/objects/04/efb155f71c75ac7e4fb99533818bce465bd715": "d69acf1ea2c011afe6499aa10737f5e0",
".git/objects/07/1a26298abe0a3101800a7596ff7ebae233c6b1": "4e8a9bd2ff8b3b7a3ad0f060bc45cad1",
".git/objects/0a/bad23a4057e378ef82b359ad87ac0aa945eace": "b60aac145eba570bb30bb374e1683ee7",
".git/objects/0c/de938f53d3d44292c45fe9deb2b92ac15a8fa1": "8ccbc31f40624671bfa5466452d8433e",
".git/objects/15/3c4fa2905860028a49f1fa74a6c9f16cafc0fb": "637c5506078fe62834279b1494aa35a6",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/20/804868dcb2ca61874ed1bd8ab81f6b8e56d1e1": "474286edde75f0745f36a9bbc8deeae6",
".git/objects/28/1151540aadf2b82ffd4da191a8cac71bc179b3": "d36353d6c1bffccc030173a3d95d4bb8",
".git/objects/28/b296dacb980bb86f96abd79a1d00dca84b3aa8": "2e09cd34baae0afdfc809c4efb2e0139",
".git/objects/2c/6fc8caafd6d4ce770985bb878b889d04f1fbbf": "57228148d757ff111baa1d07c18c2493",
".git/objects/2c/9d28ea4c716fa915381755ac28a191b60db5ef": "3c9218b3b1d0f67a2d28b43e165a34b3",
".git/objects/32/2e2f56b5b68a8e93e875688df619164f7c4fa0": "a8ce77e9c4ae7a4de0a619afcbb14bcf",
".git/objects/36/531bc27360a063108841cf1bb38c2f49947185": "188269b0a7b7d083b18d9e1a2fd7c096",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/72a2ece29c71097e087ecbfe969ebd6d9a59f9": "297ec5544639d5495aa3988dd244180d",
".git/objects/40/7461c83639eaa78ad5d75467dfc43d1ddb8e17": "4b928c3c4c0d384fd9e79db0a958f5fb",
".git/objects/42/b1ce11e08ea538785c58e290cac04aac69c0d4": "4de048b1d68b33fa1c06fa380fda9ab5",
".git/objects/43/aa89f7a5d073d09066f0a26f47034910b485bf": "768e48f5c4cd36a2886bb3891f7df1db",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/3802f968ea7a3d81b98304d26af6a0a37d3c90": "7a1192d3eae7c1e12765a40a769c9ca9",
".git/objects/48/50b3b75ed709aa95085ba72d167c3fda5831f8": "3ceb00b3fa805e747f36dc3040e4b2da",
".git/objects/49/99345f2afa068cf1e0dd22da3e18900e724971": "a7e1348be6aecb193bc1f76b4c2df42e",
".git/objects/4a/19cd2f57489eba79ea8c9af03c74b15a663287": "effc8952b7651e8764da2d28127d718f",
".git/objects/4a/380d08cf05d34b47db3e1b1c2ebba898b874db": "0234b68f41b4c2048e5986b68d5c5447",
".git/objects/4b/b8faca5d15cc1e1390fb5277d3be47aa98a77a": "bf26fb41723b58885c3ce7c2587ae192",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/9ffbbc147d65324cc60ff999848e65537d9120": "6900d3d94f0b7a3baeefddbd91acf720",
".git/objects/4e/fee3d840e989602861436cae181628e6425662": "f3173f2070202aba97eedbbdfb0d35af",
".git/objects/4f/0dcd9e78d431f6be97d04e0d240e7796334022": "cd348bfdc41d6b4050e038e9c499401d",
".git/objects/52/0acfb2f8e2f82c1c2db3969b278555ea9e5282": "df0bb81c8739b08891c33c6e4d64fca7",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5a/176af85b15145b6a404db8abda415cef0a9714": "bd9674015e9b691b0cf5b77207c47d65",
".git/objects/5c/0a47bfc9b39e05fddedc9fe3b958279dcc6211": "373fec4f22d08fbc5a60cade9a7ccfde",
".git/objects/5c/8d11fb97bf84687f19385290e8f0651f4bc8f0": "c48ea79fb70604bc71cfd2856a5a317a",
".git/objects/5d/81d532f23e50e280d0af284d8c1a7021c2bac2": "0502ef401ed593b50dbf47de4622a232",
".git/objects/63/2071ce832dba811f0efca945aa2cbc4b253626": "9b33022d06f4d4a125194dab56d21d61",
".git/objects/68/2f051298ed150aa91474191f21e330a1b61829": "9462192ab21216ade5c2566770245ee9",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/bf110e884dd66ffa2360a40f2be1969a8a890f": "4bda51873411e9b9701feca8ec6f3808",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/3a5863415fb36b6cab6095151990df7b40a578": "ea59c7d08c93cfe91c207e852215e3e3",
".git/objects/73/bde43c3652eee4c8978df299c6a180bf45b118": "db250e63de2340e000140811fe2ebcc9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/6a43fdcc43edaeeeeba76e913363ad80437092": "89d3ad406b23f7caacf000762707a828",
".git/objects/78/1eb44b20c4f3981cf029c69b483b254b6233b8": "59c8b06016cac2c71ef149a3c48c003e",
".git/objects/7c/bd707312220a437ddf9445ac31e5081672e471": "fbdc79133c29a9293f351cba2deea7d7",
".git/objects/80/63592e9e3078103f80b98a9a9e33c3d4cfc143": "4637cb70b710fbd308e39fe837c888ab",
".git/objects/84/e1f4be64af50c9a5566d0e47d7bf6624c4b136": "b86f9daaef4af665a4b84c45281cb881",
".git/objects/86/69c3cb0cddc77ff9a4ae96c8ca6f95648ffc52": "fce3cd50a2af17d7e218d416821874b5",
".git/objects/87/de8c285b19a8b95885b956b33940357fd741f9": "6275e11844b719b23662cc8a6f403ca8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/9355597dcf812400c2bffe9e17e73894ed5102": "6cbf2525ceab0ffff228161f4e468117",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/94/acd882c5b37dceca06f2d8b5a6e92e717c2efe": "a3e0a1ec3fcc761379c76b00c7565534",
".git/objects/94/b76102d345e39043fa03a1b1392789ce7c9f7e": "622276cc23c024964e561f82ffd5f130",
".git/objects/99/98d77133f5017d8c0c08dc78ae1d27ebe2d4d6": "a00f3b1ba4032e6c7b80caf14122799b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/48ebaaaa6f33fb5bc2217b63d1de0b1f6b7aa1": "5d8a174becc641adacf2e93a449392a0",
".git/objects/9f/1eac1a2413e11f7a07c6123d28cbfefa62d134": "94061f849b82cc44919ce88239e244e2",
".git/objects/a1/abfc1f47767d4306ad3b05d6b94999c55e9311": "a8fcad38e61414b24f273de2d1fc16f4",
".git/objects/ac/74f4a8e9e51ca5de9ab6a632d0c18eae6d8f14": "fed08e4f4cec59ba39e4c12cadabc705",
".git/objects/ae/ea7d8d659585ba754e099d2072ae01bbeb1abd": "d6625d0a0b2ef57189bda1fd6378b891",
".git/objects/b7/1da4bafebeb72385aa689512e2887479f199ba": "3ebab21f08aa1faaf2747b9d46b2b4e1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/8a2ce74c13721b20b9cbab6b1b885e8b100f5c": "44ec311052321fcd8dfbfd9706599a4d",
".git/objects/b8/d36ecf4cc61a70b52ce8362f9b69dd6edce2ef": "fb2688a9409b90b88ef44d16ab12ce34",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/0b2974149758186d076e388ea87d176e0fc407": "9b19e729da507e877b263f33a99c9c5a",
".git/objects/c0/b38085ef649ecb98882ef39507b98a18b46640": "25435827ff1adca4ba936e0e6eb25335",
".git/objects/c2/9bd633a7719e83ed178840b76fa41048964db8": "1fed49aa98abd2cec1ab3d4105a08edd",
".git/objects/c5/180738becc6eaccd0ebe6729a58908fc7c4d07": "2b85b657a0e4db607395343cbc926ba0",
".git/objects/c6/5d39dc0ba1ee0f1a31c8f3ac88a5b74156da59": "ac41aff198e4945e104f0382b2d608b8",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/751440058492e23d8a132c5539fa9475fb07d3": "a54853665eab7163225d279417528f76",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cc/cc4eb1d0024af908c1d25fce48475567690406": "56c31aa14563453f30ebf6e16e8ccbab",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/b7637e80b6785d2c6ca88d6674bf07ea63e32f": "b12cab4a74731120885b22d77b0fb8e0",
".git/objects/d8/e792f9ced3335a99676e543f5c5a4b82c50b56": "cbe18b2d5d21f3712a2e04033bc479be",
".git/objects/db/d4fa74125dc66a716e0f1195ac44fa84104e0e": "1aa4d971085d4c380c9708dff8e47fee",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/dd/c556a574289fcb175a09f8ed34e1029241d6e2": "42a58365604eb59ee371f1b137dfe4f5",
".git/objects/df/20aa5086f36ea6baba8dba3769860705f74364": "6102511ae802697c22cc7ad8640c401d",
".git/objects/e0/6b49016fdb369bf078decc8085956ffc07bd7a": "7c57859ac8d5a61e15c92c25b77109d3",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/04df31d51146de4638d658c69178421c61b0ed": "edf568dd90171b172cfd04fae164782b",
".git/objects/e3/7a4ea5fe3c6b9dcfee2c806276aae25a661d99": "c9c301534266dcb93e8c715cf4fb5d7a",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/1d29326f3d0454efdb8bff99cf68385d9e4a22": "1aa1d3b4bf8a66da81c458115bd75b89",
".git/objects/e7/37037191789e64fe10853b862346e2ad2540bf": "ac61482f86a0b5154e1aba4e80f48842",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e720e96ce6f6b65498583e34fe7bb9fd964291": "594bbb80506a84833405e9e4ea6c85b6",
".git/objects/ef/e89f8028083eac8139c3087494a7e9b1c822fa": "ed285ae7bfd133f709776afb2a39ccd7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/05e2acb04494615061a8f89fd02df31f1bea12": "b3be67471981f3aaf859daf3635b6bcd",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/773f5dda6c3918d0baa3fd5b34204e95c65219": "26e1f288f3854f61bf48145479fcd186",
".git/objects/f7/925f51ccbdb34736b16c53845bf8001e105ab0": "8e14179f07382589c1dcc1542479cb66",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/refs/heads/gh-pages": "0c9b43296990ccc5e0165c8252e1b5da",
".git/refs/remotes/origin/gh-pages": "0c9b43296990ccc5e0165c8252e1b5da",
"assets/AssetManifest.bin": "db091258d45007338eeb784c93927bfe",
"assets/AssetManifest.bin.json": "85469b06fc2157251ffc2e8572f668c1",
"assets/AssetManifest.json": "196a3884ca93d614e094c54cb0cb0200",
"assets/assets/images/A1.png": "70113928701413282f9f7577fdd8ec4a",
"assets/assets/images/A2-2.png": "20855b07b7c818bb35e8b8a4dc233eb1",
"assets/assets/images/A2.png": "f0d0da73d7e7530908de60479b8a8650",
"assets/assets/images/A3.png": "3e39545f79c1cd13c3a9cb157b16ac6f",
"assets/assets/images/A4.png": "12709aa2d411a5f5d92a130e87845ee0",
"assets/assets/images/B1.png": "00c6af2636268e23be03a19a708d6831",
"assets/assets/images/B2-2.png": "22ea3e780af83b0ca0e830840e495c86",
"assets/assets/images/B2.png": "df2f84f1d8161a899b3061aaf923dd25",
"assets/assets/images/B3.png": "570ac708e60b6d8937015af4f0cfa9cd",
"assets/assets/images/B4.png": "9c233334ebce59d599c055ee3c80445b",
"assets/assets/images/C1.png": "26d5415f2a8ab254829b53753a11af11",
"assets/assets/images/C2.png": "3af98327fb52721be001a8d24bc12922",
"assets/assets/images/C3-2.png": "8a04d72c4274ffa22a7cf65f7f44e70a",
"assets/assets/images/C3.png": "3d9fa4f4771edea7ce103ae8e164aed2",
"assets/assets/images/C4.png": "e87ef3d18bf5955d78cb374461047585",
"assets/assets/images/C5.png": "95d4eb791a047df7d00fe105abcd5ca6",
"assets/assets/images/D1.png": "f2e6d4b0e2de8b34bd563191b5b730fc",
"assets/assets/images/D2.png": "e8043ff38bd714ab65630907768bc248",
"assets/assets/images/D3.png": "487db596cc9cfe62c1c33475961c5039",
"assets/assets/images/D4.png": "d72dcfee04a8d93fb15e3cef9981998d",
"assets/assets/images/E1.png": "f7613ce40de6ce30f39ec7ebcd0fc22c",
"assets/assets/images/E2.png": "7808a3125c329252335735d7f83e02e5",
"assets/assets/images/E3.png": "e6cec63d40399be4740d4a9714b5813b",
"assets/assets/images/E4.png": "a5ead1129647780d7b9f9ed2acce9b21",
"assets/assets/images/F1.png": "9e7f290b7e55268b8cf27dbf28c53e3a",
"assets/assets/images/F2.png": "f642d7bf8025eeff04bec15ba64159bf",
"assets/assets/images/F3.png": "1ee71c142608394756647609812bfd8b",
"assets/assets/images/F4.png": "026cf6758111d18c7874c0d2ba922afb",
"assets/assets/images/G1.png": "c07b1a9f56970ae9ab74b4782a4462dd",
"assets/assets/images/G2.png": "d121554d8ca17e12b8fb6dfe02c909dd",
"assets/assets/images/G3.png": "93777a11c9d0e917a102bc40cbc0b4c2",
"assets/assets/images/G4.png": "f38c48dbcd7601465c693ee8099f26c0",
"assets/assets/images/left.png": "edc94622ef1066fb7b85b3474607d21d",
"assets/assets/images/right.png": "a6a0948f3f0b2fd78cf1974e2bc77157",
"assets/assets/sounds/A1.wav": "567031840b2615c4eefca63718bf97c9",
"assets/assets/sounds/A2.wav": "64f82120a902d651477bb65270728678",
"assets/assets/sounds/A3.wav": "949874a5df484d289eb9f8a89d093054",
"assets/assets/sounds/A4.wav": "428d922ad90a2823984a373f3aa98d21",
"assets/assets/sounds/B1.wav": "731eb045330c3b21a3dd42f225fcc8af",
"assets/assets/sounds/B2.wav": "48b1d77ba68fe91bfd30306a20d6ef92",
"assets/assets/sounds/B3.wav": "ba99755a7477ed422c97432cf9501df5",
"assets/assets/sounds/B4.wav": "8d6f208405f36c52a1c6f1a31edaca7c",
"assets/assets/sounds/C1.wav": "11f9f38ff14f9c575d5c73c5524494c0",
"assets/assets/sounds/C2.wav": "2338d53284fc773ef9cdfd3ae520444e",
"assets/assets/sounds/C3.wav": "6b005ed658575444d020b7c8704923ee",
"assets/assets/sounds/C4.wav": "add07085c5a8c51414c3714134ea8d05",
"assets/assets/sounds/C5.wav": "66bb0f5deab2e31500c1a968724982fd",
"assets/assets/sounds/D1.wav": "2476d1ea563c0641675f248a5f5c0161",
"assets/assets/sounds/D2.wav": "10c2e667f66ac2dc0c5d66b9c3811201",
"assets/assets/sounds/D3.wav": "a5cb5be7bac79bef65e598da6943c2a4",
"assets/assets/sounds/D4.wav": "7dedd7bd983f5c816ef05b5a6f3dad06",
"assets/assets/sounds/E1.wav": "958f1b0c051d0ab8ecbe43d517ec8c6c",
"assets/assets/sounds/E2.wav": "ada5d165a4ce618016188fb2ecf7d10c",
"assets/assets/sounds/E3.wav": "96c91fb43fa21922585a9dbc5233ae83",
"assets/assets/sounds/E4.wav": "0b0c71dcb405bde253e98edf837fa929",
"assets/assets/sounds/F1.wav": "82b327c42b1a0712322ace5d5e0f41cb",
"assets/assets/sounds/F2.wav": "151908150edac83020bc871d428fabd0",
"assets/assets/sounds/F3.wav": "8bdb779b8fa52faa13c003bc8f71d959",
"assets/assets/sounds/F4.wav": "ab435f7e5455eff62c6c6e342f43e7f4",
"assets/assets/sounds/G1.wav": "6fd7fee0a252af0cc35560cf9e2cb84d",
"assets/assets/sounds/G2.wav": "d97766aa65ba388aba7ecd789265e997",
"assets/assets/sounds/G3.wav": "929fa801591dd622b4632ad7c3ccf2fd",
"assets/assets/sounds/G4.wav": "dc1d637ce1071b5502f8d63f477599e2",
"assets/assets/sounds/wrong.mp3": "0b118a7f7f49f7b3424533e40e6ee1cd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "833f240c36914ba17cbc9b8169def9ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "77bf1aaa114fcbffa0c4e293873bcef6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"/": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"main.dart.js": "b2d26b295857de7bb999a308a61e56f9",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
