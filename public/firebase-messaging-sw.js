import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js",
);

const firebaseConfig = {
  apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
const messaging = getMessaging(firebase);

// Manipular notificações em segundo plano
onBackgroundMessage(messaging, (payload) => {
  // eslint-disable-next-line no-console
  console.log("Mensagem recebida em segundo plano: ", { payload });

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    data: payload.data,
    dir: "auto",
    lang: payload.data.lang,
    tag: payload.data.tag,
    requireInteraction: payload.data.requireInteraction === "true",
    silent: payload.data.silent === "true",
    badge: payload.data.badge,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
