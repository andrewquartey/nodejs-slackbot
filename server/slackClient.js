'use strict';

const { RTMClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - usually xoxb)
// const token = 'xoxb-383652017927-383657947447-ID1vH7ZdXQ53NGXw5LOhc68n';

// The client is initialized and then started to get an active connection to the platform

module.exports.init = token => new RTMClient(token);