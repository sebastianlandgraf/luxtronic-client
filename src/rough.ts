import { aFieldsErrorCodeDescription, getErrorDescription } from './error.js';
import { aFieldsHeatPumpType, getHeatPumpType } from './hptype.js';
import { parseFloat } from './parsers.js';
import {
  aFieldsBetriebsZustand,
  aFieldsBilanzStufe,
  aFieldsGrundAbschaltung,
  aFieldsHauptMenuStatus_Zeile1,
  aFieldsHauptMenuStatus_Zeile2,
  aFieldsHauptMenuStatus_Zeile3,
  aFieldsHeizModus,
  getBetriebsZustand,
  getBilanzStufe,
  getGrundAbschaltung,
  getHauptMenuStatus_Zeile1,
  getHauptMenuStatus_Zeile2,
  getHauptMenuStatus_Zeile3,
  getHeizModus,
} from './status.js';
import { dataTypes, getValueDefByIndex } from './valuedesc.js';

export function range(start: number, end: number, step: number): number[] {
  const ret = [];
  for (let i = start; i < end; i += step) {
    ret.push(i);
  }
  return ret;
}

function int2ip(addr: number): string {
  return [
    (addr >> 24) & 0xff,
    (addr >> 16) & 0xff,
    (addr >> 8) & 0xff,
    addr & 0xff,
  ].join('.');
}

export const rRangeFloatData = [
  122, 136, 137, 142, 143, 147, 159, 160, 162, 163, 168, 169, 173, 183, 184,
  187, 188, 189, 227, 228, 229, 231, 232, 233,
];
rRangeFloatData.push(...range(10, 29, 1));
rRangeFloatData.push(...range(151, 158, 1));
rRangeFloatData.push(...range(175, 182, 1));
rRangeFloatData.push(...range(193, 212, 1));
rRangeFloatData.push(...range(236, 246, 1));

export const rRangeIntData = [
  57, 59, 78, 79, 80, 117, 118, 119, 121, 123, 135, 144, 148, 149, 161, 190,
  191, 192, 230,
];
rRangeIntData.push(...range(81, 91, 1));
rRangeIntData.push(...range(100, 111, 1));
rRangeIntData.push(...range(125, 134, 1));
rRangeIntData.push(...range(217, 222, 1));

export const rRangeIPAddressData = [91, 92, 93, 94];

export const rRangeBoolData = [
  116, 124, 138, 139, 140, 146, 150, 170, 171, 172, 174, 182, 185, 186, 234,
  235,
];
rRangeBoolData.push(...range(29, 56, 1));
rRangeBoolData.push(...range(164, 168, 1));
rRangeBoolData.push(...range(212, 217, 1));

export const rRangeDateDiffData = [56, 58, 120, 141, 145, 158, 248];
rRangeDateDiffData.push(...range(60, 78, 1));

export const rRangeDateAbsolute = [134];
rRangeDateAbsolute.push(...range(95, 100, 1));
rRangeDateAbsolute.push(...range(111, 116, 1));
rRangeDateAbsolute.push(...range(222, 227, 1));

export function parseRough(aData: Readonly<number[]>) {
  for (let iIndex = 10; iIndex < aData.length; iIndex++) {
    const valName = getValueDefByIndex(iIndex);
    let sDetails = '';
    let type: dataTypes | undefined = undefined;
    if (rRangeDateDiffData.includes(iIndex)) {
      type = 'range';
      //const oValue = new Date(aData[iIndex] * 1000);

      // Total number of seconds in the difference
      const totalSeconds = aData[iIndex];

      // Total number of minutes in the difference
      const totalMinutes = Math.floor(totalSeconds / 60);

      // Total number of hours in the difference
      const totalHours = Math.floor(totalMinutes / 60);

      // Getting the number of seconds left in one minute
      const remSeconds = totalSeconds % 60;

      // Getting the number of minutes left in one hour
      const remMinutes = totalMinutes % 60;

      sDetails = `${totalHours}:${remMinutes}:${remSeconds}`;
    } else if (rRangeIntData.includes(iIndex)) {
      type = 'int';
      const oValue = Number(aData[iIndex]);
      sDetails = oValue.toString();
      // # Any detailed information
      if (aFieldsHeatPumpType.includes(iIndex))
        sDetails = getHeatPumpType(oValue);
      else if (aFieldsHauptMenuStatus_Zeile1.includes(iIndex))
        sDetails = getHauptMenuStatus_Zeile1(oValue);
      else if (aFieldsHauptMenuStatus_Zeile2.includes(iIndex))
        sDetails = getHauptMenuStatus_Zeile2(oValue);
      else if (aFieldsHauptMenuStatus_Zeile3.includes(iIndex))
        sDetails = getHauptMenuStatus_Zeile3(oValue);
      else if (aFieldsBilanzStufe.includes(iIndex))
        sDetails = getBilanzStufe(oValue);
      else if (aFieldsBetriebsZustand.includes(iIndex))
        sDetails = getBetriebsZustand(oValue);
      else if (aFieldsGrundAbschaltung.includes(iIndex))
        sDetails = getGrundAbschaltung(oValue);
      else if (aFieldsHeizModus.includes(iIndex))
        sDetails = getHeizModus(oValue);
      else if (aFieldsErrorCodeDescription.includes(iIndex))
        sDetails = getErrorDescription(oValue);
    } else if (rRangeIPAddressData.includes(iIndex)) {
      type = 'ip';
      const oValue = aData[iIndex] & 0xffffffff;
      sDetails = int2ip(oValue);
    } else if (rRangeDateAbsolute.includes(iIndex)) {
      type = 'range';
      const oValue = aData[iIndex];
      sDetails = new Date(oValue * 1000).toUTCString();
    } else if (rRangeBoolData.includes(iIndex)) {
      type = 'bool';
      const oValue = Number(aData[iIndex]);
      sDetails = oValue > 0 ? 'True' : 'False';
    } else if (rRangeFloatData.includes(iIndex)) {
      type = 'float';
      sDetails = parseFloat(aData, iIndex);
    }

    console.log(
      valName.ValueName,
      '(',
      valName.Description,
      ') =(',
      type,
      ')',
      sDetails,
    );
  }
}

export const relevantData = rRangeBoolData
  .concat(rRangeDateAbsolute)
  .concat(rRangeDateDiffData)
  .concat(rRangeFloatData)
  .concat(rRangeIntData)
  .concat(rRangeIPAddressData)
  .sort((a, b) => a - b);
