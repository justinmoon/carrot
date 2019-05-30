const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5001 });

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function makeTx() {
    return { id: getRandomInt(1000000), amount: getRandomInt(100)}
}

function generate(ws) {
    console.log('generate')
    if (getRandomInt(4) == 1) {
        var tx = makeTx()
        var msg = JSON.stringify(tx)
        console.log('sent')
        ws.send(msg)
    }
}

function cron(ws) {
    setInterval(function(){ 
        generate(ws)
	}, 1000);
}

wss.on('connection', function connection(ws) {
    cron(ws)

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

});

