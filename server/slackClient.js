'use strict';

const { RTMClient, LogLevel } = require('@slack/client');



module.exports.init = (token, LogLevel) =>  new RTMClient(token, {logLevel: 'debug'});