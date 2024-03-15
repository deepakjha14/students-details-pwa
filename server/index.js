const adming = require('firebase-admin');
const serviceAccount = require('./students-details-pwa-firebase-adminsdk-2xilv-0b02551a32.json');

adming.initializeApp({
    credential: adming.credential.cert(serviceAccount)
});

const registrationTokenFromUI = 'dbtTznycVb9PN911G_yBaL:APA91bH2nqGLyQztVuJJDNsoDiIXdjra-OjMIjS6iGkrrJna3Di1nDD-F0PGlE7jU5hG1J8tDsfobzEYfbV5IJd-PtNypEkFVjVQbxrtTV4VP7Ve7Px3yHxsvS5b3xpsCitt-7vJXcxw';

const message = {
    notification: {
        title: 'Angular PWA Tutorial',
        body: 'It Worked liek a charm!'
    },
    token: registrationTokenFromUI
};

adming.messaging().send(message)
    .then((response) => {
        console.log('Successfully sent message:', response);
    })
    .catch((err) => {
        console.log('Error in sending the message', err);
    });