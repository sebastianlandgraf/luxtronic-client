import * as net from 'net';
import { Buffer } from 'buffer';

export async function getHeatPumpData(
  host: string,
  port: number,
): Promise<number[]> {
  // Count Datafields
  let iDataFields: number = 0;
  // Received Data
  let aData: number[] = [];

  aData = await new Promise((resolve, reject) => {
    // Socket
    const client = new net.Socket();
    // Connect to Heatpump
    client.connect(port, host, () => {
      // Send to get state
      client.write(Buffer.from([0x00, 0x00, 0x0b, 0xbc])); // 3004 in big-endian
      client.write(Buffer.from([0x00, 0x00, 0x00, 0x00])); // 0 in big-endian
    });

    // Check received packet, 4 Byte as Int must be equal 3004
    client.on('data', (data) => {
      if (data.readInt32BE(0) !== 3004) {
        console.error('Error during request occurred.');
        client.destroy();
        reject();
      }

      // Receive 4 Bytes as Integer
      const iStat = data.readInt32BE(4);
      iDataFields = data.readInt32BE(8);

      // Add all Fields to an array
      for (let i = 0; i < iDataFields; i++) {
        aData.push(data.readInt32BE(12 + i * 4));
      }

      client.destroy();

      console.log('                    State : ', iStat);
      console.log('Number of fields received : ', iDataFields);
      console.log('\n');

      resolve(aData);
    });

    client.on('close', () => {
      console.log('Connection closed');
    });
  });

  return aData;
}

//getHeatPumpData('192.168.1.11', 8888);
