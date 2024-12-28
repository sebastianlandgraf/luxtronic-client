export const aFieldsHauptMenuStatus_Zeile1 = [117];
export const hStatusZeile1 = {
  0: 'Wärmepumpe läuft',
  1: 'Wärmepumpe steht',
  2: 'Wärmepumpe kommt',
  4: 'Fehler',
  5: 'Abtauen',
  6: 'Warte auf LIN-Verbindung',
  7: 'Verdichter heizt auf',
  8: 'Pumpenvorlauf',
};

export type hStatusZeile1Type = keyof typeof hStatusZeile1;

export function getHauptMenuStatus_Zeile1Code(
  data: ReadonlyArray<number>,
): hStatusZeile1Type {
  return data[aFieldsHauptMenuStatus_Zeile1[0]] as hStatusZeile1Type;
}

export function getHauptMenuStatus_Zeile1(
  code: hStatusZeile1Type | number,
): string {
  if (code in hStatusZeile1) {
    return hStatusZeile1[code as hStatusZeile1Type];
  }
  return 'UNKNOWN';
}

export function getHauptMenuStatusZeile1(data: ReadonlyArray<number>): string {
  return getHauptMenuStatus_Zeile1(getHauptMenuStatus_Zeile1Code(data));
}

export const aFieldsHauptMenuStatus_Zeile2 = [118];
export const hStatusZeile2 = {
  0: 'seit:',
  1: 'in:',
};

export type hStatusZeile2Type = keyof typeof hStatusZeile2;

export function getHauptMenuStatus_Zeile2Code(
  data: ReadonlyArray<number>,
): hStatusZeile2Type {
  return data[aFieldsHauptMenuStatus_Zeile2[0]] as hStatusZeile2Type;
}

export function getHauptMenuStatus_Zeile2(code: number): string {
  if (code in hStatusZeile2) {
    return hStatusZeile2[code as hStatusZeile2Type];
  }
  return 'UNKNOWN';
}

export function getHauptMenuStatusZeile2(data: ReadonlyArray<number>): string {
  return getHauptMenuStatus_Zeile2(getHauptMenuStatus_Zeile2Code(data));
}

export const aFieldsHauptMenuStatus_Zeile3 = [119];
export const hMode = {
  0: 'Heizbetrieb',
  1: 'keine Anforderung',
  2: 'Netz- Einschaltverzoegerung',
  3: 'Schaltspielzeit',
  4: 'EVU-Sperrzeit',
  5: 'Brauchwasser',
  6: 'Estrich Programm',
  7: 'Abtauen',
  8: 'Pumpenvorlauf',
  9: 'Thermische Desinfektion',
  10: 'Kuehlbetrieb',
  12: 'Schwimmbad/Photovoltaik',
  13: 'Heizen Ext.',
  14: 'Brauchwasser Ext.',
  16: 'Durchflussueberwachung',
  17: 'Elektrische Zusatzheizung',
  19: 'Warmw. Nachheizung',
};

export type hModeType = keyof typeof hMode;

export function getHauptMenuStatus_Zeile3Code(
  data: ReadonlyArray<number>,
): hModeType {
  return data[aFieldsHauptMenuStatus_Zeile3[0]] as hModeType;
}

export function getHauptMenuStatus_Zeile3(code: number): string {
  if (code in hMode) {
    return hMode[code as hModeType];
  }
  return 'UNKNOWN';
}
export function getHauptMenuStatusZeile3(data: ReadonlyArray<number>): string {
  return getHauptMenuStatus_Zeile3(getHauptMenuStatus_Zeile3Code(data));
}

export const aFieldsBilanzStufe = [79];
export const hBilanzStufe = {
  0: 'ein Verdichter darf laufen',
  1: 'zwei Verdichter dürfen laufen',
  2: 'zusätzlicher Wärmeerzeuger darf mitlaufen',
};

export type hBilanzStufeType = keyof typeof hBilanzStufe;

export function getBilanzStufe(code: number): string {
  if (code in hBilanzStufe) {
    return hBilanzStufe[code as hBilanzStufeType];
  }
  return 'UNKNOWN';
}

export const aFieldsBetriebsZustand = [80];
export const hFieldsBetriebsZustand = {
  0: 'Heizen',
  1: 'Warmwasser',
  2: 'Schwimmbad / Photovoltaik',
  3: 'EVU',
  4: 'Abtauen',
  5: 'Keine Anforderung',
  6: 'Heizen ext. Energiequelle',
  7: 'Kühlbetrieb',
};

export type hFieldsBetriebsZustandType = keyof typeof hFieldsBetriebsZustand;

export function getBetriebsZustand(code: number): string {
  if (code in hFieldsBetriebsZustand) {
    return hFieldsBetriebsZustand[code as hFieldsBetriebsZustandType];
  }
  return 'UNKNOWN';
}

export const aFieldsGrundAbschaltung = [
  106, 107, 108, 109, 110, 217, 218, 219, 220, 221,
];
export const hFieldsGrundAbschaltung = {
  0: 'Waermepumpe Stoerung',
  1: 'Anlagen Stoerung',
  2: 'Betriebsart Zweiter Waermeerzeuger',
  3: 'EVU-Sperre',
  5: 'Lauftabtau (nur LW-Geraete)',
  6: 'Temperatur Einsatzgrenze maximal',
  7: 'Temperatur Einsatzgrenze minimal',
  8: 'Untere Einsatzgrenze',
  9: 'Keine Anforderung',
};

export type hFieldsGrundAbschaltungType = keyof typeof hFieldsGrundAbschaltung;

export function getGrundAbschaltung(code: number): string {
  if (code in hFieldsGrundAbschaltung) {
    return hFieldsGrundAbschaltung[code as hFieldsGrundAbschaltungType];
  }
  return 'UNKNOWN';
}

export const aFieldsHeizModus = [125];
export const hFieldsHeizModus = {
  0: 'Abgesenkt',
  1: 'Normal',
  2: 'Aus',
};

export type hFieldsHeizModusType = keyof typeof hFieldsHeizModus;

export function getHeizModus(code: number): string {
  if (code in hFieldsHeizModus) {
    return hFieldsHeizModus[code as hFieldsHeizModusType];
  }
  return 'UNKNOWN';
}
