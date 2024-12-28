import { getHeatPumpData } from './client.js';
import { parseRough } from './rough.js';

export class Heatpump {
  constructor() {}

  async test() {
    const data = await getHeatPumpData('192.168.1.11', 8888);

    // for (let i = 0; i < relevantData.length; i++) {
    //   console.log('Data received : ', relevantData[i], data[relevantData[i]]);
    // }
    parseRough(data);
  }
}

new Heatpump().test();
