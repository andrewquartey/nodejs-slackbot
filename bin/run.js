'use strict';

const slackClient = require('../server/slackClient');
const service = require('../server/service');
const http = require('http');
console.log(slackClient);
const server = http.createServer(service);

const token = 'xoxb-383652017927-383657947447-ID1vH7ZdXQ53NGXw5LOhc68n';
const rtm = slackClient.init(token);
rtm.start();

server.listen(3000);

server.on('listening', () => {
    console.log(`I am lisening ${server.address().port} in ${service.get('env')}`)
});