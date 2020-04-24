const dgram = require('dgram');
const packetPeer = require('../..').PacketPeer;

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  // eslint-disable-next-line no-console
  console.log(`[socket=${rinfo.address}:${rinfo.port}] data: "${msg.toString('hex')}"`);

  const decoded = packetPeer.get_var(msg);
  // eslint-disable-next-line no-console
  console.log(`[socket=${rinfo.address}:${rinfo.port}] decoded:`, decoded);

  const encoded = packetPeer.put_var(decoded);
  // eslint-disable-next-line no-console
  console.log(`[socket=${rinfo.address}:${rinfo.port}] encoded: ${encoded.toString('hex')}`);

  server.send(encoded, rinfo.port, rinfo.address);
});

server.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log(`[server] error: ${err.stack}`);
  server.close();
});

server.on('listening', () => {
  const address = server.address();
  // eslint-disable-next-line no-console
  console.log(`[server] listening ${address.address}:${address.port}`);
});

server.bind(1337);
