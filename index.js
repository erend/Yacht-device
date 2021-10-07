const spi = require('spi-device');

// The MCP3008 is on bus 0 and it's device 0
const RS485_00 = spi.open(0, 0, err => {
  // An SPI message is an array of one or more read+write transfers
  const message = [{
    sendBuffer: Buffer.from([0x01, 0xd0, 0x00]), // Sent to read channel 5
    receiveBuffer: Buffer.alloc(3),              // Raw data read from channel 5
    byteLength: 3,
    speedHz: 20000 // Use a low bus speed to get a good reading from the TMP36
  }];
  // const message = [{
  //   sendBuffer: Buffer.alloc(10, 0x00), 
  //   receiveBuffer: Buffer.alloc(10),              // Raw data read from channel 5
  //   byteLength: 10,
  // }];

  if (err) throw err;

  RS485.transfer(message, (err, msg) => {
    if (err) throw err;


    console.log('0 0', msg);
  });
});

const RS485_01 = spi.open(0, 1, err => {
  // An SPI message is an array of one or more read+write transfers
  const message = [{
    sendBuffer: Buffer.from([0x01, 0xd0, 0x00]), // Sent to read channel 5
    receiveBuffer: Buffer.alloc(3),              // Raw data read from channel 5
    byteLength: 3,
    speedHz: 20000 // Use a low bus speed to get a good reading from the TMP36
  }];
  // const message = [{
  //   sendBuffer: Buffer.alloc(10, 0x00), 
  //   receiveBuffer: Buffer.alloc(10),              // Raw data read from channel 5
  //   byteLength: 10,
  // }];

  if (err) throw err;

  RS485.transfer(message, (err, msg) => {
    if (err) throw err;


    console.log('0 1', msg);
  });
});

const RS485_10 = spi.open(1, 0, err => {
  // An SPI message is an array of one or more read+write transfers
  const message = [{
    sendBuffer: Buffer.from([0x01, 0xd0, 0x00]), // Sent to read channel 5
    receiveBuffer: Buffer.alloc(3),              // Raw data read from channel 5
    byteLength: 3,
    speedHz: 20000 // Use a low bus speed to get a good reading from the TMP36
  }];
  // const message = [{
  //   sendBuffer: Buffer.alloc(10, 0x00), 
  //   receiveBuffer: Buffer.alloc(10),              // Raw data read from channel 5
  //   byteLength: 10,
  // }];

  if (err) throw err;

  RS485.transfer(message, (err, msg) => {
    if (err) throw err;


    console.log('1 0', msg);
  });
});

const RS485_11 = spi.open(1, 1, err => {
  // An SPI message is an array of one or more read+write transfers
  const message = [{
    sendBuffer: Buffer.from([0x01, 0xd0, 0x00]), // Sent to read channel 5
    receiveBuffer: Buffer.alloc(3),              // Raw data read from channel 5
    byteLength: 3,
    speedHz: 20000 // Use a low bus speed to get a good reading from the TMP36
  }];
  // const message = [{
  //   sendBuffer: Buffer.alloc(10, 0x00), 
  //   receiveBuffer: Buffer.alloc(10),              // Raw data read from channel 5
  //   byteLength: 10,
  // }];

  if (err) throw err;

  RS485.transfer(message, (err, msg) => {
    if (err) throw err;


    console.log('1 1', msg);
  });
});