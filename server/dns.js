const dns = require('dns');

dns.lookup('localhost', { family: 4 }, (err, address, family) => {
  console.log('DNS lookup address: %j family: IPv%s', address, family);
});

dns.resolve4('localhost', (err, addresses) => {
  if (err) throw err;
  console.log(`DNS resolve addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});