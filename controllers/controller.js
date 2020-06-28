const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('../services/service');
    const reqUrl = url.parse(req.url, true);

    // GET Endpoint
    if (reqUrl.pathname === '/sample' && req.method === 'GET') {
        service.sampleRequest(req, res);
    }
});