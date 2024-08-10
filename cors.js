// Import the process module
import { env } from 'process';

// Listen on a specific host via the HOST environment variable
var host = env.HOST || 'localhost';
// Listen on a specific port via the PORT environment variable
var port = env.PORT || 8080;

import { createServer } from 'cors-anywhere';
createServer({
    originWhitelist: [], // Allow all origins
    // requireHeader: ['origin', 'x-requested-with'],
    // removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on http://' + host + ':' + port);
});