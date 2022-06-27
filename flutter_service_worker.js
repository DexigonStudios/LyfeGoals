'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "03fd8f54463eb7149f93f88daf0c5d06",
".git/config": "6400c4e95a4646be82b5d4bacc896a16",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "ec799f1accaf386f27184231b0536d02",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6fe66e2ea5c2a94bb338ff2d415821ef",
".git/logs/refs/heads/main": "6f65d740316736f3855bb9dd391c644b",
".git/logs/refs/remotes/origin/main": "1891574e2179539f08ea65f988eb219d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/d0e13e797683e95de742adeee999bc11453084": "89ec17350113167dad05428f14013f2a",
".git/objects/0c/e3cc01ad8a41de20a9a10a9c55fc8108e520a4": "2540dfd82ad2c31c191d672ce78699e1",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/c092cbae084fd21ef7741666034554f8329420": "891ca1bd62362553e40fd5ca0e10c571",
".git/objects/10/76930b69b7365ded7e298306de0e142bbd7de3": "2fdf46f9f28c93a721f99713d395c323",
".git/objects/11/10df952dd1f08f0fb857cd5904624d3321cccd": "94cad904cf5925c65a585a59242706dd",
".git/objects/13/c83aa652b880c89fbfaa1f82b054c7481c6d56": "fe73c8d61d22526a7634ad2734cffd10",
".git/objects/19/86aea7966201d1f4084aa01e94de1c9b9abac7": "5056dc85269804a0b53ce6ca82a475f5",
".git/objects/1a/6f8e2655964d335b8fcb7bd92e1b939fdadf88": "89ae92cfbec8f57989594895beb99e65",
".git/objects/1e/6fbdbfa3a4bc29054e56e4a8c6411619c471df": "10a635c1119d40c4d3f8013e699a7d4f",
".git/objects/20/40a8bd871e478703d1089259d3ccd12a6533cf": "dde408cccd0daf25a6333c1ce43e1730",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/d098c162ea2729d1e71995feb658d358402e75": "e3afd6312517226fd3cbac9b2fea275d",
".git/objects/2c/c1698a5ecc8892955c09f242a75190878b96a2": "141f51d62c65c837fd890dc4620775d6",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3a/19ae64bee9a7d625e34cd90dd878f762f99a6c": "11a1a05e974344f289efdbaf05108013",
".git/objects/3b/3abc53288e71918ddce771c754e4739e36bf4c": "b998be772b8fa7a6ff21e88b7e4aeb9a",
".git/objects/3c/9c6bc4f70e08e0941e40605e0d6996f8fbf63b": "8d56635bd49513fdf5c626c9403fa7f9",
".git/objects/3e/90e1cd19a6a9070b59166ce83d120b35767167": "56c0877bc1bae44bcd8fa7b4fe7d3a98",
".git/objects/41/e8a83f85cb04667d55c08556d0f4a1ee9b3d25": "18d1ded48d6b14e920902d4e93194463",
".git/objects/45/85079be704bd753dd5e01fb10afcd8aae7296c": "1b681d987e49318c045eb0d7ea5730f9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/7f62cf990ea447a83b60db711c16495e32af8d": "12fa824c949ab60e51e175fc60226a2c",
".git/objects/4b/74f11422573882be5f39e609d25a3667b5ac9f": "dfb675971ac06500ddc140b88379886b",
".git/objects/4c/d81399f39c0a60911c4e7133ba703fb5e7dbac": "59c6379140f109b5ddaa50834acaea5d",
".git/objects/4e/194c6e0a22a337af28913472e7502808ab2907": "989a78fca8d4dc51ce03ecb5aa3ec68e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/8c4e40efca39d5688ddfa1f64d0aea53097483": "2e9f54d36aac55a3ef5c295acaaed543",
".git/objects/4f/97be3a40c93bbde78cfb586a37662a34085ecd": "008c8502ebda4f69ccf9953c6ced4575",
".git/objects/53/10d7437ea4e274a60471bf0f5c0fa7acc70898": "0170e2509f91b7cd108bede9ca5e5cb6",
".git/objects/5a/07f4b558fd22059368d5a048d905dfde03c867": "51f6a1dfad809e747235df825fd65173",
".git/objects/5d/dc2e832a1c53a642c64fe9757f9827077f7ca4": "c9e1d97515e915250ae407dbb87689f7",
".git/objects/60/a340f250073511dab07516c0269ab74beec2a6": "4a9af0b49046150ad408662125f9e837",
".git/objects/63/61eb1ff783b0c4f8e806902353c4cdcc80535d": "0c634cb351dc732e70d8fd5ef22c440c",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/fef69c3a5e77c20773f2e2892b424e075bbb5f": "b2f13702313b9da08dc8f96a7311e9a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/eb50695dcdfeef15e4a2f56f47c39ed45ccefc": "5144db0896b1880d6e41bffb60fbc5d5",
".git/objects/7e/09918a4c70892868e92d8b60ad543c2e2ee24c": "7e3605ef02fb924965156a5b62807ade",
".git/objects/80/c844f7053a06b7ee8d823159d4abaefe593265": "c51969594072dcd53d5c660bb8fb005f",
".git/objects/85/34915fbcba671c37dbb9275852b2fa7baa3e5c": "3bac17836d6facdf109005a6ebbd32c3",
".git/objects/88/23ca32edad46133c5c767597e3ab6e33ebe412": "531bdfcc7a4157cef9fe725cc87d6979",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/28cb0f83d7a9e3cbdf4c9b778a6628fc1eed7a": "cc06396a9700a468ee8c39332dc2529c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/95372d38dd613aeed507afc879178ec5d0e34b": "712fdb95221452ffbb5a2a31977d5a1c",
".git/objects/8f/9aa3446372db47c4932d05c80c7ad5fa3929c7": "e714c4ee8cfaf91f57ecc2c9f0f147a8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/cf95361edd4bcc381f6d6a37e9d00186e59346": "f965b4efe13f1f4d1472df5135cd5e67",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/4d5d691f3841794ba230859d7aecb3170d7cc3": "eee65e24f6ff6258bf2bc8ef792eb96b",
".git/objects/ab/73c5b77d73f0b46269edcd3738a83506c295a3": "7a3ccfce1f4ad18c14e890f39d4426d1",
".git/objects/b2/b23b6640188f8b960157dfe8cca963d77a36db": "6ce5ce36145aefe17765efdc6e098f7a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f05c6ebb4feefa9832035877f170d4a1002310": "fc5efb9bf644c9e03a3b9f537f343f5c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/00d8869715e40588f9299c5b64f7e2721cae03": "1743817d8aeb7a6c5a43071f6537e34e",
".git/objects/ba/17ed0e4d977c7313b0cb655230d17f64e18aee": "5c879f051630280d34735a2cf227b585",
".git/objects/ba/8ffcc54c3ae0d676d8191afb860d2c2303b3a9": "e4d3f17b913246390aa41b1a00c3fe84",
".git/objects/c2/aa232531954b68a1927c4f1659fc6ee153fe54": "2e8401bf9b27b8ea666e894a51c3b249",
".git/objects/c3/c69ba3554328030459cdd0ea94027646ebdebe": "6c48306730ed083b3cdc2050f26a6666",
".git/objects/c9/b122efc983a08b163c5861201c514426cb92f5": "8267a4901d2d3f2fd6898d8f36ce509a",
".git/objects/ca/d007bc5a2e4199b001e293b26ab3f0f300f333": "1dd318e71314c097c972927feb9e677a",
".git/objects/cd/0a31af7ceb52b701feeb8d36fddc6fe4ded8aa": "e67e1760c1d6c7d4640ed4284a63737c",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/4fb84c75d7382ce316582ef22ee5adb229cd90": "733e1b36ce9890098a33f2fc6eeddf04",
".git/objects/d3/a3b3014400d4d97f70c2b20d5efff7486f4f40": "3801c270e5bc7aab55cda0c77b997fe9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/496b21296d4afe9c2d299ec4c70261dce0b438": "6983c14799d18f55a763c6866cef9b32",
".git/objects/dd/30d86b81bdb9dd1bb17f6fae90f0c592fc838c": "af138f595dcb37ce3cd2de92cd15c852",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/1ddfe58ef760f98613f062ade1ada16852cf6f": "8d1c75c4760387a9f9f6125b0171401b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/9bbffcd78f2f54fa5909f9b09f63bef2e3345c": "31497cc1af8f986a37c936a41a1e138c",
".git/objects/e6/f842f589204ee9f747f61fc6261c182f63d7e2": "3594c4cf71df9dd741a1d665fb207c78",
".git/objects/e7/02541bf41a7434806ea2f1d1a3b69e0359edef": "d4ce35c54f9704dbce7167a0c74ab0ae",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/a6ef5c44e02ec56518fbe3fa8d2b62ce335e5e": "a9ba1cc1d084d2f820015f4da7ddbecb",
".git/objects/f2/4a88b01036d01169ea3da742b17cf9b2218ae8": "d8c47c72b20f0c09afe8acb33a8510d2",
".git/refs/heads/main": "cdf80191b5c6bf62e87f79c980952e60",
".git/refs/remotes/origin/main": "cdf80191b5c6bf62e87f79c980952e60",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "27244118598ca791a43b5eae3cc9b8a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "df6861f9d6348c019794f3d1f73b6e9a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c98a63c9f13c9ee8f48bc8b1753263f8",
"/": "c98a63c9f13c9ee8f48bc8b1753263f8",
"main.dart.js": "f501370cdecd8846bd92170d1fa68a1b",
"manifest.json": "b4c28e4e08950e0973ca8b220f5d2078",
"version.json": "056d81a8b765ce083df0c03cdfc37825"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
