if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,o)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>a(e,d),c={module:{uri:d},exports:s,require:n};i[d]=Promise.all(r.map((e=>c[e]||n(e)))).then((e=>(o(...e),s)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Icon.png",revision:"32e4d53a786763240ccdfacfb5b60422"},{url:"/_next/app-build-manifest.json",revision:"0bd9047fd1f1e9ec793d609a3909b616"},{url:"/_next/static/build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/138-98b1bae1a60a22f9.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/163-22ff19a474558e31.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/187-16296472be52aa59.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/417-14237ae6a5630dbe.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/66-0ab18631cda6f235.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/691-76bafbec71164fb6.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/771-8469d838a7907db9.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/808-d104d3f4c892ce45.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/865-8fd3f8cfbdf9aaa6.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/948-15a58dd4c013841d.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/(protected)/(form)/abrir-chamado/page-c660cc7fa4115cdc.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/(protected)/(form)/anexar-midia/page-e989e03047f8504d.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/(protected)/(form)/confirmar-chamado/page-6392dfa61d628526.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/(protected)/(form)/template-71b0f7c0aa9f1359.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/(protected)/chamado/%5Bid%5D/page-dbbab6fd97d08ca9.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/(protected)/chamados/page-4c0215ab96082a77.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/(protected)/loading-242be2cfa290035a.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/(protected)/pesquisa/page-d626f0dd10c37d11.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/(protected)/solicitacoes/page-46fdd384c5574751.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/(protected)/template-18dcf8dec7f409dc.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/_not-found-7910e16191b67697.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/layout-02b9d3a20e1b0bf9.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/login/page-1e9ed1f66baecb99.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/noMobileDevice/page-7bf36f423cb087dc.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/app/page-089f622b532ee281.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/bf6a786c-079166cc51fd7d53.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/framework-a21167c8f5bb4ce2.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/main-4b51f66471fc86ca.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/main-app-12875897a12ac6b1.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6b90b1575fae65ff.js",revision:"build-id-Fri Jul 19 2024 08:55:51 GMT-0300 (Horário Padrão de Brasília)"},{url:"/_next/static/css/c9a3b95e60d92791.css",revision:"c9a3b95e60d92791"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/AddButtonAlt.d8e806ec.png",revision:"0a4a435e5bf43d945a705d5f4054b412"},{url:"/_next/static/media/ClearIcon.2223e2b9.png",revision:"c46b05b42c93999ec47e0242a7f8bfe0"},{url:"/_next/static/media/Lock.85654139.png",revision:"d62072be5e0c1eae7c7521ea466a3db8"},{url:"/_next/static/media/MailIcon.ff317613.png",revision:"593a57dfb3d079e6ddf7ba9ae48007cd"},{url:"/_next/static/media/android-launchericon-512-512.d1d7ef25.png",revision:"32e4d53a786763240ccdfacfb5b60422"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/eye.78eae9a0.svg",revision:"e64d226216c95f3b916eb7cc2a4700e5"},{url:"/_next/static/media/eyeClosed.f86bc0e9.svg",revision:"9d678a8064aa872cf1cacfbcd0d0e16f"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/filter.707c6605.svg",revision:"b617ac7c1147f9afe0a71f75fc0ef9f3"},{url:"/_next/static/media/login.c7e92d00.svg",revision:"471cab323d9944b90c6727f5f705c663"},{url:"/_next/static/media/loginDisabled.01ce736c.svg",revision:"4b2a6926f3ab9f8c3d160e3953a2b60b"},{url:"/_next/static/media/qr-code.1993bbd4.png",revision:"b18a6ebe247c39cc57a806a3595c34f1"},{url:"/android/android-launchericon-144-144.png",revision:"f814235ecc1caf5721b5493bbb3e2ecc"},{url:"/android/android-launchericon-192-192.png",revision:"f9c5e294998c225573ced06412cc4b1c"},{url:"/android/android-launchericon-48-48.png",revision:"a1ecec6b5190e5455c67cd1080a9afe9"},{url:"/android/android-launchericon-512-512.png",revision:"32e4d53a786763240ccdfacfb5b60422"},{url:"/android/android-launchericon-72-72.png",revision:"5d4d38d2d95189c321c31244bfd9a158"},{url:"/android/android-launchericon-96-96.png",revision:"5b0c8a9833a11f0f0a1323960a272ea8"},{url:"/favicon-16x16.png",revision:"86de5f3ab519bde0347886481f1ff8de"},{url:"/favicon-32x32.png",revision:"3d930ec700a41a0e9dedadc74f83e8c0"},{url:"/favicon.ico",revision:"da3885953794d5f6e393596785ead858"},{url:"/ios/100.png",revision:"b15137bed41f81dc34167b0568922d76"},{url:"/ios/1024.png",revision:"422034c42021f08f57834b86d0edd1a8"},{url:"/ios/114.png",revision:"8cb48e6afeb93c6fb35bc0c9ebb66204"},{url:"/ios/120.png",revision:"e684eea7db581517a7d2ea85436eb8d3"},{url:"/ios/128.png",revision:"23a9ddb5002bc3558bab3985dbb6bb0c"},{url:"/ios/144.png",revision:"f814235ecc1caf5721b5493bbb3e2ecc"},{url:"/ios/152.png",revision:"a27dd3af9d7e494848691da556c212c6"},{url:"/ios/16.png",revision:"f33cf92fa22b824ec414276b60623cf0"},{url:"/ios/167.png",revision:"cd7e2d1a853c7e4ac0756f84ce23763f"},{url:"/ios/180.png",revision:"95ba9140927dd56c49c5273d3756b89d"},{url:"/ios/192.png",revision:"f9c5e294998c225573ced06412cc4b1c"},{url:"/ios/20.png",revision:"e14a3647352b43851c53685f38c22300"},{url:"/ios/256.png",revision:"20a720811bcac0d346e3c08fbf80f361"},{url:"/ios/29.png",revision:"075eb72b649f1b1de54192c285c0976a"},{url:"/ios/32.png",revision:"f6eaf95bb042d3e5858f3ceb4a29084d"},{url:"/ios/40.png",revision:"db4237b5f8b7e0d9ea087061ad2693e8"},{url:"/ios/50.png",revision:"48b338c5928a745d4dff9b0c968c85d9"},{url:"/ios/512.png",revision:"32e4d53a786763240ccdfacfb5b60422"},{url:"/ios/57.png",revision:"bb496a7607f5f1f5a2dc520ea5324495"},{url:"/ios/58.png",revision:"209dd68ff9b3115d2b5ed0d88f86e757"},{url:"/ios/60.png",revision:"3df09500abecb83facb65f6babe9a51c"},{url:"/ios/64.png",revision:"d0e2a07c3e09ade2e3c10be89c3bc6a2"},{url:"/ios/72.png",revision:"5d4d38d2d95189c321c31244bfd9a158"},{url:"/ios/76.png",revision:"49c0e46a288e4dce2e81ece4d4d3d599"},{url:"/ios/80.png",revision:"10abe399b6a6a0c371d53d70d79816eb"},{url:"/ios/87.png",revision:"e4af64735ba81d4133418c56921d163c"},{url:"/manifest.json",revision:"5d2666c2c8513398f5e17ab9f076257d"},{url:"/offline.html",revision:"a5be0e70d9b066f17379afe5b49dcd47"},{url:"/qr-code.png",revision:"b18a6ebe247c39cc57a806a3595c34f1"},{url:"/windows11/LargeTile.scale-100.png",revision:"ae5285bd15ecc80b524a194e4c392dd1"},{url:"/windows11/LargeTile.scale-125.png",revision:"916edc3bf98626787c83e1d580f4c5d6"},{url:"/windows11/LargeTile.scale-150.png",revision:"3e72e75f7ffaf33fdbde245b69f469c0"},{url:"/windows11/LargeTile.scale-200.png",revision:"23b518620fcec731dd1171ce3af41486"},{url:"/windows11/LargeTile.scale-400.png",revision:"4949d0d6e23d651230e1826e4aa144d6"},{url:"/windows11/SmallTile.scale-100.png",revision:"09ccbc2e3b1afd9b5e23b6522e927355"},{url:"/windows11/SmallTile.scale-125.png",revision:"f273a93ae2575760b7db00a496eee5dd"},{url:"/windows11/SmallTile.scale-150.png",revision:"27dcd138ad77b1834bec0dca410d62bb"},{url:"/windows11/SmallTile.scale-200.png",revision:"f812128149beca8d55d94d0d5ae26e90"},{url:"/windows11/SmallTile.scale-400.png",revision:"5451730dca3fabbbecc46986b51bf882"},{url:"/windows11/SplashScreen.scale-100.png",revision:"faad67ca14726e95962ed88ea59f72ab"},{url:"/windows11/SplashScreen.scale-125.png",revision:"94f023b55232dba0ea837fb314c4d043"},{url:"/windows11/SplashScreen.scale-150.png",revision:"5bb8a6051b717827b74c92c397c0bfab"},{url:"/windows11/SplashScreen.scale-200.png",revision:"b142148c19fd57092bcf45c5c7508219"},{url:"/windows11/SplashScreen.scale-400.png",revision:"84705a8fd5a653d9ce0957d0d675d935"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"b677c708618539a8dda4ab2e75455274"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"ebbc62c7e8632e526a27c5339d54ceff"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"f4c44c152dfdedf10cb5998f20a86a1f"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"05ec482f24af703ecf35f0b34bfaaff0"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"eb4a2f57fb734103285b1f7feae29fb6"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"a3637e6f21ae0ae7c6c713bd4690664a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"09f0dbfc2f6eae3c52167817d53346d7"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"d09294cc2aeb4f85b7f954977ce97029"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"1551dded7e55e6bcb147215b3819a09f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"3a3a71e10797731c081d3746f74cd121"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"3acb97995355f85d9051de04ec60a253"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"87fca055afe317c6f4c0d9412d4f336e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"6844c3b7eedf81c1588a9fb74bda2fdb"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"4fd1faa9ed507461fb10f792a0b6a44c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"8cfb04f57e65fbe524dbf5a8a7cd4459"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"7a775eb7ced0d61a48cdb2bd036baf0a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"ef14cf4a2587a355b1d1938f58926465"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"28d528d55f33503c2edb7447a975c91e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"b01765ecc38181ecc9d23097af604a49"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"a9162f8c33cb55707b22d20c974b1f98"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"a3637e6f21ae0ae7c6c713bd4690664a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"09f0dbfc2f6eae3c52167817d53346d7"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"d09294cc2aeb4f85b7f954977ce97029"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"1551dded7e55e6bcb147215b3819a09f"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"3a3a71e10797731c081d3746f74cd121"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"3acb97995355f85d9051de04ec60a253"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"87fca055afe317c6f4c0d9412d4f336e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"6844c3b7eedf81c1588a9fb74bda2fdb"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"4fd1faa9ed507461fb10f792a0b6a44c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"8cfb04f57e65fbe524dbf5a8a7cd4459"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"7a775eb7ced0d61a48cdb2bd036baf0a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"ef14cf4a2587a355b1d1938f58926465"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"28d528d55f33503c2edb7447a975c91e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"b01765ecc38181ecc9d23097af604a49"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"a9162f8c33cb55707b22d20c974b1f98"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"4fd1faa9ed507461fb10f792a0b6a44c"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"503357130173deac81a4e85345b7dbb8"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"0a6e0339336ff2a4495d5743f4bb7deb"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"882a6e664d32be7c2d903771d6f1b562"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"55911e5c72e28463d263d011b33296d9"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"a3637e6f21ae0ae7c6c713bd4690664a"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"09f0dbfc2f6eae3c52167817d53346d7"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"d09294cc2aeb4f85b7f954977ce97029"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"1551dded7e55e6bcb147215b3819a09f"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"3a3a71e10797731c081d3746f74cd121"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"3acb97995355f85d9051de04ec60a253"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"87fca055afe317c6f4c0d9412d4f336e"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"6844c3b7eedf81c1588a9fb74bda2fdb"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"4fd1faa9ed507461fb10f792a0b6a44c"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"8cfb04f57e65fbe524dbf5a8a7cd4459"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"7a775eb7ced0d61a48cdb2bd036baf0a"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"ef14cf4a2587a355b1d1938f58926465"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"28d528d55f33503c2edb7447a975c91e"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"b01765ecc38181ecc9d23097af604a49"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"a9162f8c33cb55707b22d20c974b1f98"},{url:"/windows11/StoreLogo.scale-100.png",revision:"48b338c5928a745d4dff9b0c968c85d9"},{url:"/windows11/StoreLogo.scale-125.png",revision:"d4a689725e7dc6422c8855f55af15f75"},{url:"/windows11/StoreLogo.scale-150.png",revision:"fc06d5249229158ba9142f7999d0d5bf"},{url:"/windows11/StoreLogo.scale-200.png",revision:"b15137bed41f81dc34167b0568922d76"},{url:"/windows11/StoreLogo.scale-400.png",revision:"cc7b8edd1729eeb8b32d9aaa7fd45e3e"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"69d6243a8d5059b09c9d58baf8a31e0a"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"820b9dee006fd9718292def060d0dba4"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"686431086b2523f11fbf0325fd2731f4"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"faad67ca14726e95962ed88ea59f72ab"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"b142148c19fd57092bcf45c5c7508219"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:r})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
