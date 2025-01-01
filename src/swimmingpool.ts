import { parseFloat } from './parsers.js';

export class Swimmingpool {
  pumpActive: boolean;
  temperatureConected: boolean;
  energy: number;
  runtime: number;
  symbol: number;
  constructor(data: readonly number[]) {
    this.pumpActive = data[53] > 0;
    this.temperatureConected = data[36] > 0;
    this.energy = parseFloat(data[153]);
    this.runtime = data[145];
    this.symbol = data[144];
  }
}
