const spi = require('spi-device');

// The MCP3008 is on bus 0 and it's device 0
const RS485 = spi.open(0, 0, err => {
  // An SPI message is an array of one or more read+write transfers
  // const message = [{
  //   sendBuffer: Buffer.from([0x01, 0xd0, 0x00]), // Sent to read channel 5
  //   receiveBuffer: Buffer.alloc(3),              // Raw data read from channel 5
  //   byteLength: 3,
  //   speedHz: 20000 // Use a low bus speed to get a good reading from the TMP36
  // }];
  const message = [{
    sendBuffer: Buffer.alloc(10, 0x00), 
    receiveBuffer: Buffer.alloc(10),              // Raw data read from channel 5
    byteLength: 10,
  }];

  if (err) throw err;

  RS485.transfer(message, (err, message) => {
    if (err) throw err;


    console.log('recived', message);
  });
});