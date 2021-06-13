require('dotenv').config()
var twilio = require('twilio');
var client = new twilio(process.env.ACCOUNTSID, process.env.AUTHTOKEN);

client.messages.create({
    body: 'Hello from Node',
    to: '+17023422909',  // Text this number
    from: '+12692206127' // From a valid Twilio number
})
.then((message) => console.log(message.sid));








// client.calls
//   .create({
//     url: 'http://demo.twilio.com/docs/voice.xml',
//     to: '+17023422909',
//     from: '+12692206127',
//   })
//   .then(call => console.log(call.sid));

// client
//   .calls('CAe7c55adfa90bf0f749544d905c3e7887')
//   .fetch()
//   .then(call => console.log(call.to));