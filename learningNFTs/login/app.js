console.log(randomNumber());

const API_KEY = 'process.env.API_KEY';

const sg = require('@sendgrid/mail');
sg.setApiKey(API_KEY);

const message = {
    to: emailInput.value,
    from: '23ab1107@wwprsd.org',
    subject: 'Learn NFT Verification Code',
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