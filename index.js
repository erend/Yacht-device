// create an empty modbus client
const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();

// open connection to a serial port
client.connectRTUBuffered("/dev/ttySC0", { baudRate: 9800 }, read);

function write() {
    client.setID(1);

    // write the values 0, 0xffff to registers starting at address 5
    // on device number 1.
    client.writeRegisters(5, [0 , 0xffff])
        .then(read);
}

async function read() {
    await client.setID(2);

    console.log('id: ', client.getID());

    client.writeFC3 (2, 0, 1, (err, data) => {console.log('data[0]: ',data);});

    // try {
    //     const data = await client.readHoldingRegisters (0, 1);
    //     console.log('Direction: ', data.data[0]);
    //     console.log('Buffer: ', data.buffer);
    // } catch (error) {
    //     console.log('error', error);
    // }   

    // client.writeFC3 (1, 1, 1, (err, data) => {console.log('data[0]: ',data);})

    // set a timout for requests default is null (no timeout)
    // client.setTimeout(500);

    //Speed
    const forLoop = async () => {
        console.log('Start')
      
        for (let index = 0; 100; index++) {
        const data = await client.readHoldingRegisters (0, 1);
            console.log('data: ', data);
            console.log('Wind speed: ', data.data[0] / 10);
            console.log('Buffer: ', data.buffer);
        }
      
        console.log('End')
      }

    //Direction
    // const forLoop = async () => {
    //     console.log('Start')
        
    //     for (let index = 0; 100; index++) {
    //         //   const data = await client.writeFC3 (2, 0, 16, (err, data))
    //         // const data = await client.readHoldingRegisters (0, 1);
    //         try {
    //             const data = await client.readHoldingRegisters (0, 1);
    //             console.log('Direction: ', data.data[0]);
    //             console.log('Buffer: ', data.buffer);
    //         } catch (error) {
    //             console.log('error', error);
    //         }        
    //     }
        
    //     console.log('End')
    // }

    forLoop();

    
}

