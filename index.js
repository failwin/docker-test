const http =  require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(req.socket.localPort);
    console.log(req.socket.remotePort);
    res.end('TEst');
});

app.get('/index.html', (req, res) => {
    console.log(req.socket.localPort);
    console.log('healh check');
    res.end('OK');
});

app.post('/index.html', (req, res) => {
    console.log(req.socket.localPort);
    console.log('healh check');
    res.end('OK');
});

const webServer = http.createServer(app);

const webServer1 = http.createServer(app);
const webServer2 = http.createServer(app);

webServer.listen('6666', () => {
    console.log('Listening localhost:6666');
});


webServer1.listen('3333', () => {
    console.log('Listening localhost:3333');
});

webServer2.listen('4444', () => {
    console.log('Listening localhost:4444');
});
