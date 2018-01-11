const net = require('net');
const streamPeer = require('../../').StreamPeer;

let count = 0;
const server = net.createServer(socket => {
  socket.id = ++count;
  console.log(`[socket=${socket.id}] connection established`);

  socket.on('data', msg => {
    console.log(`[socket=${socket.id}] data: ${msg.toString('hex')}`);

    const decoded = streamPeer.get_var(msg);
    console.log(`[socket=${socket.id}] decoded:`, decoded);

    const encoded = streamPeer.put_var(decoded);
    console.log(`[socket=${socket.id}] encoded: ${encoded.toString('hex')}`);

    socket.write(encoded);
  });

  socket.on('end', () => {
    console.log(`[socket=${socket.id}] connection terminated`);
  });
});

server.on('listening', () => {
  const address = server.address();
  console.log(`[server] listening ${address.address}:${address.port}`);
});

server.listen(1337, '0.0.0.0');
