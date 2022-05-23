console.log(randomNumber());

const API_KEY = 'laksjdflas';

const sg = require('@sendgrid/mail');
sg.setApiKey(API_KEY);

const message = {
    to: 'asdfsdfsd',
    from: 'asdfsdfsd',
    subject: 'EARTH MESSAGE',
    text: '' + randomNumber(),

};

function randomNumber() {
    return Math.floor(Math.random() * 1000000);
}



sg.send(message).then(() => {
    console.log('message sent');
}).catch((error) => {
    console.log(error.response.body);
});