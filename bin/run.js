'use strict';
require('dotenv').config();
const slackClient = require('../server/slackClient');
const service = require('../server/service');
const http = require('http');
console.log(slackClient);
const server = http.createServer(service);

const token = process.env.SLACK_TOKEN;
console.log(token)
const rtm = slackClient.init(token);
rtm.start();

server.listen(3000);

server.on('listening', () => {
    console.log(`I am lisening ${server.address().port} in ${service.get('env')}`)
});