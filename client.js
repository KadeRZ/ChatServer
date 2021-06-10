const net = require('net');


const client = net.createConnection({port: 5000}, () => {
    console.log('Connected to server');
    client.setEncoding('utf-8');

    process.stdin.pipe(client);
    
    client.on('data', (data) => {
        if(data.toString() == `\nYou have been kicked out of the server. \n`) {
            console.log(data.toString());
            client.end();
        } 
        else console.log(data.toString())
    })
    client.on('close', () => {
        console.log('Disconnected from server');
    });
});