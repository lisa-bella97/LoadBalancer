const express = require('express');
const client = require('prom-client');
const apiMetrics = require('prometheus-api-metrics');

// To make our backend slow enough
const RESPONSE_DELAY = 200;  // ms

// Used response statuses
const OK = 200;
const NOT_OK = 500;

const router = express();
const routerMetrics = express();

// True - response with 200, false - response with 500
let serverResponseStatus = true;

// Counter for requests on /api/data
const metricsRequestCounter = new client.Counter({
    name: 'request_data_counter',
    help: 'Count requests on /api/data.',
});

const registry = new client.Registry();
registry.registerMetric(metricsRequestCounter);

routerMetrics.use(apiMetrics());

// switch response status from 200 to 500 and vice versa
router.get('/api/switch', function(req, res, next) {
    serverResponseStatus = !serverResponseStatus;
    res.sendStatus(serverResponseStatus ? OK : NOT_OK);
});

// current response status from serverResponseStatus
router.get('/api/status', function(req, res, next) {
    res.sendStatus(serverResponseStatus ? OK : NOT_OK);
});

// delayed request to imitate slowness
router.get('/api/data', function(req, res, next) {
    setTimeout(() => {
        const data = {
            string: 'Response delay is ' + RESPONSE_DELAY + ' ms',
            status: serverResponseStatus ? OK : NOT_OK
        };
        if (serverResponseStatus) {
            metricsRequestCounter.inc(1);
        }
        res.send(JSON.stringify(data));
    }, RESPONSE_DELAY);
});

router.listen(8000);
console.log("Backend started on 8000 port");

routerMetrics.listen(8080);
console.log("Metrics started on 8080 port");