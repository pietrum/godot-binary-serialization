const net = require('net');
const streamPeer = require('../..').StreamPeer;

let count = 0;
const server = net.createServer((socket) => {
  count += 1;
  // eslint-disable-next-line no-param-reassign
  socket.id = count;
  // eslint-disable-next-line no-console
  console.log(`[socket=${socket.id}] connection established`);

  socket.on('data', (msg) => {
    // eslint-disable-next-line no-console
    console.log(`[socket=${socket.id}] data: ${msg.toString('hex')}`);

    const decoded = streamPeer.get_var(msg);
    // eslint-disable-next-line no-console
    console.log(`[socket=${socket.id}] decoded:`, decoded);

    const encoded = streamPeer.put_var(decoded);
    // eslint-disable-next-line no-console
    console.log(`[socket=${socket.id}] encoded: ${encoded.toString('hex')}`);

    socket.write(encoded);
  });

  socket.on('end', () => {
    // eslint-disable-next-line no-console
    console.log(`[socket=${socket.id}] connection terminated`);
  });
});

server.on('listening', () => {
  const address = server.address();
  // eslint-disable-next-line no-console
  console.log(`[server] listening ${address.address}:${address.port}`);
});

server.listen(1337, '0.0.0.0');
