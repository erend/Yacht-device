// create an empty modbus client
const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();

// open connection to a serial port
client.connectRTUBuffered("/dev/ttySC0", { baudRate: 9600 }, read);

function write() {
    client.setID(1);

    // write the values 0, 0xffff to registers starting at address 5
    // on device number 1.
    client.writeRegisters(5, [0 , 0xffff])
        .then(read);
}

function read() {
    client.setID(2);

    // set a timout for requests default is null (no timeout)
    client.setTimeout(500)

    // read the 2 registers starting at address 5
    // on device number 1.
    // console.log('id:', client.getID());
    // client.setID(2);
    // console.log('now id:', client.getID());
    // client.readHoldingRegisters(0, 5)
    //     .then(console.log);
    // client.writeFC3(2, 0x1000, 8, console.log);

    const forLoop = async () => {
        console.log('Start')
      
        for (let index = 0; 100; index++) {
        //   const data = await client.writeFC3 (2, 0, 16, (err, data))
        const data = await client.readHoldingRegisters (0, 1);
          console.log('Wind speed: ', data.data[0] / 10);
          console.log('Buffer: ', data.buffer);
        }
      
        console.log('End')
      }

    forLoop();

    
}

