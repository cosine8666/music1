'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "db091258d45007338eeb784c93927bfe",
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
"flutter_bootstrap.js": "461f152188acc2c21028c97b8d7aa11a",
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
