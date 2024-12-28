export function parseFloat(aData: readonly number[], iIndex: number): string {
  const oValue = Number(aData[iIndex] / 10.0);
  return oValue.toString();
}
