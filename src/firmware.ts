import { range } from './rough.js';

export const aFieldsFirmware = range(81, 90, 1);

export function getFirmwareVersion(data: readonly number[]): string {
  let firmwareVersion = '';
  aFieldsFirmware.forEach((iIndex) => {
    firmwareVersion += String.fromCharCode(data[iIndex]);
  });
  return firmwareVersion;
}
