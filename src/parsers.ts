export function parseFloat(aData: number): number {
  return aData / 10.0;
}

export function parseInt(aData: readonly number[], iIndex: number): string {
  return aData[iIndex].toString();
}

export function parseRange(aData: readonly number[], iIndex: number): string {
  const totalSeconds = aData[iIndex];

  // Total number of minutes in the difference
  const totalMinutes = Math.floor(totalSeconds / 60);

  // Total number of hours in the difference
  const totalHours = Math.floor(totalMinutes / 60);

  // Getting the number of seconds left in one minute
  const remSeconds = totalSeconds % 60;

  // Getting the number of minutes left in one hour
  const remMinutes = totalMinutes % 60;
  return `${totalHours}:${remMinutes}:${remSeconds}`;
}

export function parseIp(aData: readonly number[], iIndex: number): string {
  const addr = aData[iIndex] & 0xffffffff;
  return [
    (addr >> 24) & 0xff,
    (addr >> 16) & 0xff,
    (addr >> 8) & 0xff,
    addr & 0xff,
  ].join('.');
}

export function parseBool(aData: readonly number[], iIndex: number): string {
  return aData[iIndex] === 1 ? 'true' : 'false';
}

export function parseDate(oValue: number): Date {
  return new Date(oValue * 1000);
}
