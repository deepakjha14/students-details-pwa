import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Get your own config :)
const firebaseConfig = {
    "projectId":"",
    "appId":"",
    "storageBucket":"",
    "apiKey":"",
    "authDomain":"",
    "messagingSenderId":""
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Receive the service worker registration.
navigator.serviceWorker.getRegistration(
    "./ngsw-worker.js"
).then(
    (registration) => {
        getToken(messaging, 
            {
                vapidKey: "",// Get your own vapid key
                serviceWorkerRegistration: registration
            }
        ).then(
        (currentToken) => {
            if (currentToken) {
                // Send the token to your server and update the UI if necessary
                // ...
                console.log(currentToken);
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
                // ...
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
        });

    }
);