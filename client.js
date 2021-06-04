const net = require('net');


const client = net.createConnection({port: 5000}, () => {
    console.log('Connected to server');
    client.setEncoding('utf-8');

    process.stdin.pipe(client);
    
    client.on('data', (data) => {
        console.log(data);
    });
    client.on('close', () => {
        console.log('Disconnected from server');
    });
});