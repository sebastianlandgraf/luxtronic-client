import { parseFloat } from './parsers';

export type dataTypes = 'range' | 'int' | 'ip' | 'date' | 'bool' | 'float';

export type ValueDescription = {
  index: number;
  ValueName: string;
  Description: string | null;
  type?: dataTypes;
  parser?: (aData: readonly number[], iIndex: number) => string;
  value?: string;
};

const aValueDefinition: ValueDescription[] = [
  {
    ValueName: 'UNKNOWN',
    Description: null,
    index: 0,
  },
  { ValueName: 'UNKNOWN', Description: null, index: 1 },
  { ValueName: 'UNKNOWN', Description: null, index: 2 },
  { ValueName: 'UNKNOWN', Description: null, index: 3 },
  { ValueName: 'UNKNOWN', Description: null, index: 4 },
  { ValueName: 'UNKNOWN', Description: null, index: 5 },
  { ValueName: 'UNKNOWN', Description: null, index: 6 },
  { ValueName: 'UNKNOWN', Description: null, index: 7 },
  { ValueName: 'UNKNOWN', Description: null, index: 8 },
  { ValueName: 'UNKNOWN', Description: null, index: 9 },
  {
    ValueName: 'Temperatur_TVL',
    Description: 'Vorlauftemperatur (°C)',
    index: 10,
    type: 'float',
    parser: parseFloat,
  },
  {
    ValueName: 'Temperatur_TRL',
    Description: 'Rücklauftemperatur(°C)',
    index: 11,
  },
  {
    index: 12,
    ValueName: 'Sollwert_TRL_HZ',
    Description: 'Rücklauftemperatur Soll (°C)',
  },
  {
    index: 13,
    ValueName: 'Temperatur_TRL_ext',
    Description: 'Rücklauftemperatur Soll extern (°C)',
  },
  {
    ValueName: 'Temperatur_THG',
    Description: 'Heizgastemperatur (°C)',
    index: 14,
  },

  {
    index: 15,
    ValueName: 'Temperatur_TA',
    Description: 'Aussentemperatur (°C)',
  },
  {
    index: 16,
    ValueName: 'Mitteltemperatur',
    Description: 'Mitteltemperatur Aussen 24h (°C)',
  },
  {
    index: 17,
    ValueName: 'Temperatur_TBW',
    Description: 'Warmwasser Ist (°C)',
  },
  {
    index: 18,
    ValueName: 'Einst_BWS_akt',
    Description: 'Warmwasser Soll (°C)',
  },
  {
    index: 19,
    ValueName: 'Temperatur_TWE',
    Description: 'Wärmequelle-Eintritt (°C)',
  },
  {
    index: 20,
    ValueName: 'Temperatur_TWA',
    Description: 'Wärmequelle-Austritt (°C)',
  },
  {
    index: 21,
    ValueName: 'Temperatur_TFB1',
    Description: 'Mischkreis 1 Vorlauftemperatur (°C)',
  },
  {
    index: 22,
    ValueName: 'Sollwert_TVL_MK',
    Description: 'Mischkreis 1 Vorlauf-Soll-Temperatur (°C)',
  },
  {
    index: 23,
    ValueName: 'Temperatur_RFV',
    Description: 'Raumtemperatur Raumstation 1 (°C)',
  },
  {
    index: 24,
    ValueName: 'Temperatur_TFB2',
    Description: 'Mischkreis 2 Vorlauftemperatur (°C)',
  },
  {
    index: 25,
    ValueName: 'Sollwert_TVL_MK2',
    Description: 'Mischkreis 2 Vorlauf-Soll-Temperatur (°C)',
  },
  {
    index: 26,
    ValueName: 'Temperatur_TSK',
    Description: 'Fühler Solarkollektor (°C)',
  },
  {
    index: 27,
    ValueName: 'Temperatur_TSS',
    Description: 'Fühler Solarspeicher (°C)',
  },
  {
    index: 28,
    ValueName: 'Temperatur_TEE',
    Description: 'Fühler externe Energiequelle (°C)',
  },
  {
    index: 29,
    ValueName: 'ASDin',
    Description: 'Eingang "Abtauende, Soledruck, Durchfluss" (1/0)',
  },
  {
    index: 30,
    ValueName: 'BWTin',
    Description: 'Eingang "Brauchwarmwasserthermostat" (1/0)',
  },
  {
    index: 31,
    ValueName: 'EVUin',
    Description: 'Eingang "EVU Sperre" (1/0)',
  },
  {
    index: 32,
    ValueName: 'HDin',
    Description: 'Eingang "Hochdruck Kältekreis" (1/0)',
  },
  {
    index: 33,
    ValueName: 'MOTin',
    Description: 'Eingang "Motorschutz OK" (1/0)',
  },
  {
    index: 34,
    ValueName: 'NDin',
    Description: 'Eingang "Niederdruck" (1/0)',
  },
  {
    index: 35,
    ValueName: 'PEXin',
    Description: 'Eingang "Überwachungskontakt für Potentiostat" (1/0)',
  },
  {
    index: 36,
    ValueName: 'SWTin',
    Description: 'Eingang "Schwimmbadthermostat" (1/0)',
  },
  {
    index: 37,
    ValueName: 'AVout',
    Description: 'Ausgang "Abtauventil" (1/0)',
  },
  {
    index: 38,
    ValueName: 'BUPout',
    Description: 'Ausgang "Brauchwasserpumpe/Umstellventil" (1/0)',
  },
  {
    index: 39,
    ValueName: 'HUPout',
    Description: 'Ausgang "Heizungsumwälzpumpe" (1/0)',
  },
  {
    index: 40,
    ValueName: 'MA1out',
    Description: 'Ausgang "Mischkreis 1 Auf" (1/0)',
  },
  {
    index: 41,
    ValueName: 'MZ1out',
    Description: 'Ausgang "Mischkreis 1 Zu" (1/0)',
  },
  {
    index: 42,
    ValueName: 'VENout',
    Description: 'Ausgang "Ventilation (Lüftung)" (1/0)',
  },
  {
    index: 43,
    ValueName: 'VBOout',
    Description: 'Ausgang "Solepumpe/Ventilator" (1/0)',
  },
  {
    index: 44,
    ValueName: 'VD1out',
    Description: 'Ausgang "Verdichter 1" (1/0)',
  },
  {
    index: 45,
    ValueName: 'VD2out',
    Description: 'Ausgang "Verdichter 2" (1/0)',
  },
  {
    index: 46,
    ValueName: 'ZIPout',
    Description: 'Ausgang "Zirkulationspumpe" (1/0)',
  },
  {
    index: 47,
    ValueName: 'ZUPout',
    Description: 'Ausgang "Zusatzumwälzpumpe" (1/0)',
  },
  {
    index: 48,
    ValueName: 'ZW1out',
    Description: 'Ausgang "Steuersignal Zusatzheizung v. Heizung" (1/0)',
  },
  {
    index: 49,
    ValueName: 'ZW2SSTout',
    Description: 'Ausgang "Steuersignal Zusatzheizung/Störsignal" (1/0)',
  },
  {
    index: 50,
    ValueName: 'ZW3SSTout',
    Description: 'Ausgang "Zusatzheizung 3" (1/0)',
  },
  {
    index: 51,
    ValueName: 'FP2out',
    Description: 'Ausgang "Pumpe Mischkreis 2" (1/0)',
  },
  {
    index: 52,
    ValueName: 'SLPout',
    Description: 'Ausgang "Solarladepumpe" (1/0)',
  },
  {
    index: 53,
    ValueName: 'SUPout',
    Description: 'Ausgang "Schwimmbadpumpe" (1/0)',
  },
  {
    index: 54,
    ValueName: 'MZ2out',
    Description: 'Ausgang "Mischkreis 2 Zu" (1/0)',
  },
  {
    index: 55,
    ValueName: 'MA2out',
    Description: 'Ausgang "Mischkreis 2 Auf" (1/0)',
  },
  {
    index: 56,
    ValueName: 'Zaehler_BetrZeitVD1',
    Description: 'Betriebsstunden Verdichter 1 (ddd hh:mm:ss)',
  },
  {
    index: 57,
    ValueName: 'Zaehler_BetrZeitImpVD1',
    Description: 'Impulse Versichter 1',
  },
  {
    index: 58,
    ValueName: 'Zaehler_BetrZeitVD2',
    Description: 'Betriebsstunden Verdichter 2 (ddd hh:mm:ss)',
  },
  {
    index: 59,
    ValueName: 'Zaehler_BetrZeitImpVD2',
    Description: 'Impulse Versichter 2',
  },
  {
    index: 60,
    ValueName: 'Zaehler_BetrZeitZWE1',
    Description: 'Betriebsstunden Zweiter Wärmeerzeuger 1 (ddd hh:mm:ss)',
  },
  {
    index: 61,
    ValueName: 'Zaehler_BetrZeitZWE2',
    Description: 'Betriebsstunden Zweiter Wärmeerzeuger 2 (ddd hh:mm:ss)',
  },
  {
    index: 62,
    ValueName: 'Zaehler_BetrZeitZWE3',
    Description: 'Betriebsstunden Zweiter Wärmeerzeuger 3 (ddd hh:mm:ss)',
  },
  {
    index: 63,
    ValueName: 'Zaehler_BetrZeitWP',
    Description: 'Betriebsstunden Wärmepumpe (ddd hh:mm:ss)',
  },
  {
    index: 64,
    ValueName: 'Zaehler_BetrZeitHz',
    Description: 'Betriebsstunden Heizung (ddd hh:mm:ss)',
  },
  {
    index: 65,
    ValueName: 'Zaehler_BetrZeitBW',
    Description: 'Betriebsstunden Warmwasser (ddd hh:mm:ss)',
  },
  {
    index: 66,
    ValueName: 'Zaehler_BetrZeitKue',
    Description: 'Betriebsstunden Kühlung (ddd hh:mm:ss)',
  },
  {
    index: 67,
    ValueName: 'Time_WPein_akt',
    Description: 'Wärmepumpe läuft seit (hh:mm:ss)',
  },
  {
    index: 68,
    ValueName: 'Time_ZWE1_akt',
    Description: 'Zweiter Wärmeerzeuger 1 läuft seit (hh:mm:ss)',
  },
  {
    index: 69,
    ValueName: 'Time_ZWE2_akt',
    Description: 'Zweiter Wärmeerzeuger 2 läuft seit (hh:mm:ss)',
  },
  {
    index: 70,
    ValueName: 'Timer_EinschVerz',
    Description: 'Netzeinschaltverzögerung (hh:mm:ss)',
  },
  {
    index: 71,
    ValueName: 'Time_SSPAUS_akt',
    Description: 'Schaltspielsperre AUS (hh:mm:ss)',
  },
  {
    index: 72,
    ValueName: 'Time_SSPEIN_akt',
    Description: 'Schaltspielsperre EIN (hh:mm:ss)',
  },
  {
    index: 73,
    ValueName: 'Time_VDStd_akt',
    Description: 'Verdichter Standzeit (hh:mm:ss)',
  },
  {
    index: 74,
    ValueName: 'Time_HRM_akt',
    Description: 'Heizungsregler Mehr-Zeit (hh:mm:ss)',
  },
  {
    index: 75,
    ValueName: 'Time_HRW_akt',
    Description: 'Heizungsregler Weniger-Zeit (hh:mm:ss)',
  },
  {
    index: 76,
    ValueName: 'Time_LGS_akt',
    Description: 'Thermische Desinfektion läuft seit (hh:mm:ss)',
  },
  {
    index: 77,
    ValueName: 'Time_SBW_akt',
    Description: 'Sperre Warmwasser (hh:mm:ss)',
  },
  { index: 78, ValueName: 'Code_WP_akt', Description: 'Wärmepumpentyp' },
  { index: 79, ValueName: 'BIV_Stufe_akt', Description: 'Bivalenzstufe' },
  { index: 80, ValueName: 'WP_BZ_akt', Description: 'Betriebszustand' },
  {
    index: 81,
    ValueName: 'SoftStand1',
    Description: 'Firmwareversion 1 Stelle',
  },
  {
    index: 82,
    ValueName: 'SoftStand2',
    Description: 'Firmwareversion 2 Stelle',
  },
  {
    index: 83,
    ValueName: 'SoftStand3',
    Description: 'Firmwareversion 3 Stelle',
  },
  {
    index: 84,
    ValueName: 'SoftStand4',
    Description: 'Firmwareversion 4 Stelle',
  },
  {
    index: 85,
    ValueName: 'SoftStand5',
    Description: 'Firmwareversion 5 Stelle',
  },
  {
    index: 86,
    ValueName: 'SoftStand6',
    Description: 'Firmwareversion 6 Stelle',
  },
  {
    index: 87,
    ValueName: 'SoftStand7',
    Description: 'Firmwareversion 7 Stelle',
  },
  {
    index: 88,
    ValueName: 'SoftStand8',
    Description: 'Firmwareversion 8 Stelle',
  },
  {
    index: 89,
    ValueName: 'SoftStand9',
    Description: 'Firmwareversion 9 Stelle',
  },
  {
    index: 90,
    ValueName: 'SoftStand10',
    Description: 'Firmwareversion 10 Stelle',
  },
  { index: 91, ValueName: 'AdresseIP_akt', Description: 'IP Adresse' },
  { index: 92, ValueName: 'SubNetMask_akt', Description: 'Subnetzmaske' },
  {
    index: 93,
    ValueName: 'Add_Broadcast',
    Description: 'Broadcast Adresse',
  },
  {
    index: 94,
    ValueName: 'Add_StdGateway',
    Description: 'Standard Gateway',
  },
  {
    index: 95,
    ValueName: 'ERROR_Time0',
    Description: 'Zeitstempel Fehler 0 im Speicher',
  },
  {
    index: 96,
    ValueName: 'ERROR_Time1',
    Description: 'Zeitstempel Fehler 1 im Speicher',
  },
  {
    index: 97,
    ValueName: 'ERROR_Time2',
    Description: 'Zeitstempel Fehler 2 im Speicher',
  },
  {
    index: 98,
    ValueName: 'ERROR_Time3',
    Description: 'Zeitstempel Fehler 3 im Speicher',
  },
  {
    index: 99,
    ValueName: 'ERROR_Time4',
    Description: 'Zeitstempel Fehler 4 im Speicher',
  },
  {
    index: 100,
    ValueName: 'ERROR_Nr0',
    Description: 'Fehlercode Fehler 0 im Speicher',
  },
  {
    index: 101,
    ValueName: 'ERROR_Nr1',
    Description: 'Fehlercode Fehler 1 im Speicher',
  },
  {
    index: 102,
    ValueName: 'ERROR_Nr2',
    Description: 'Fehlercode Fehler 2 im Speicher',
  },
  {
    index: 103,
    ValueName: 'ERROR_Nr3',
    Description: 'Fehlercode Fehler 3 im Speicher',
  },
  {
    index: 104,
    ValueName: 'ERROR_Nr4',
    Description: 'Fehlercode Fehler 4 im Speicher',
  },
  {
    index: 105,
    ValueName: 'AnzahlFehlerInSpeicher',
    Description: 'Anzahl der Fehler im Speicher',
  },
  {
    index: 106,
    ValueName: 'Switchoff_file_Nr0',
    Description: 'Grund Abschaltung 0 im Speicher',
  },
  {
    index: 107,
    ValueName: 'Switchoff_file_Nr1',
    Description: 'Grund Abschaltung 1 im Speicher',
  },
  {
    index: 108,
    ValueName: 'Switchoff_file_Nr2',
    Description: 'Grund Abschaltung 2 im Speicher',
  },
  {
    index: 109,
    ValueName: 'Switchoff_file_Nr3',
    Description: 'Grund Abschaltung 3 im Speicher',
  },
  {
    index: 110,
    ValueName: 'Switchoff_file_Nr4',
    Description: 'Grund Abschaltung 4 im Speicher',
  },
  {
    index: 111,
    ValueName: 'Switchoff_file_Time0',
    Description: 'Zeitstempel Abschaltung 0 im Speicher',
  },
  {
    index: 112,
    ValueName: 'Switchoff_file_Time1',
    Description: 'Zeitstempel Abschaltung 1 im Speicher',
  },
  {
    index: 113,
    ValueName: 'Switchoff_file_Time2',
    Description: 'Zeitstempel Abschaltung 2 im Speicher',
  },
  {
    index: 114,
    ValueName: 'Switchoff_file_Time3',
    Description: 'Zeitstempel Abschaltung 3 im Speicher',
  },
  {
    index: 115,
    ValueName: 'Switchoff_file_Time4',
    Description: 'Zeitstempel Abschaltung 4 im Speicher',
  },
  {
    index: 116,
    ValueName: 'Comfort_exists',
    Description: 'Comfort Platine installiert',
  },
  {
    index: 117,
    ValueName: 'HauptMenuStatus_Zeile1',
    Description: 'Status Zeile 1',
  },
  {
    index: 118,
    ValueName: 'HauptMenuStatus_Zeile2',
    Description: 'Status Zeile 2',
  },
  {
    index: 119,
    ValueName: 'HauptMenuStatus_Zeile3',
    Description: 'Status Zeile 3',
  },
  {
    index: 120,
    ValueName: 'HauptMenuStatus_Zeit',
    Description: 'Zeit seit / in (in Kombination mit Feld #118)',
  },
  {
    index: 121,
    ValueName: 'HauptMenuAHP_Stufe',
    Description: 'Stufe Ausheizprogramm',
  },
  {
    index: 122,
    ValueName: 'HauptMenuAHP_Temp',
    Description: 'Temperatur Ausheizprogramm (°C)',
  },
  {
    index: 123,
    ValueName: 'HauptMenuAHP_Zeit',
    Description: 'Laufzeit Ausheizprogramm',
  },
  {
    index: 124,
    ValueName: 'SH_BWW',
    Description: 'Brauchwasser aktiv/inaktiv Symbol',
  },
  { index: 125, ValueName: 'SH_HZ', Description: 'Heizung Symbol' },
  { index: 126, ValueName: 'SH_MK1', Description: 'Mischkreis 1 Symbol' },
  { index: 127, ValueName: 'SH_MK2', Description: 'Mischkreis 2 Symbol' },
  {
    index: 128,
    ValueName: 'Einst_Kurzrpgramm',
    Description: 'Einstellung Kurzprogramm',
  },
  {
    index: 129,
    ValueName: 'StatusSlave_1',
    Description: 'Status Slave 1',
  },
  {
    index: 130,
    ValueName: 'StatusSlave_2',
    Description: 'Status Slave 2',
  },
  {
    index: 131,
    ValueName: 'StatusSlave_3',
    Description: 'Status Slave 3',
  },
  {
    index: 132,
    ValueName: 'StatusSlave_4',
    Description: 'Status Slave 4',
  },
  {
    index: 133,
    ValueName: 'StatusSlave_5',
    Description: 'Status Slave 5',
  },
  {
    index: 134,
    ValueName: 'AktuelleTimeStamp',
    Description: 'Aktuelle Zeit der Wärmepumpe',
  },
  { index: 135, ValueName: 'SH_MK3', Description: 'Mischkreis 3 Symbol' },
  {
    index: 136,
    ValueName: 'Sollwert_TVL_MK3',
    Description: 'Mischkreis 3 Vorlauf-Soll-Temperatur (°C)',
  },
  {
    index: 137,
    ValueName: 'Temperatur_TFB3',
    Description: 'Mischkreis 3 Vorlauftemperatur (°C)',
  },
  {
    index: 138,
    ValueName: 'MZ3out',
    Description: 'Ausgang "Mischkreis 3 Zu" (1/0)',
  },
  {
    index: 139,
    ValueName: 'MA3out',
    Description: 'Ausgang "Mischkreis 3 Auf" (1/0)',
  },
  { index: 140, ValueName: 'FP3out', Description: 'Pumpe Mischkreis 3' },
  {
    index: 141,
    ValueName: 'Time_AbtIn',
    Description: 'Zeit bis Abtauen (hh:mm:ss)',
  },
  {
    index: 142,
    ValueName: 'Temperatur_RFV2',
    Description: 'Raumtemperatur Raumstation 2 (°C)',
  },
  {
    index: 143,
    ValueName: 'Temperatur_RFV3',
    Description: 'Raumtemperatur Raumstation 3 (°C)',
  },
  {
    index: 144,
    ValueName: 'SH_SW',
    Description: 'Schaltuhr Schwimmbad Symbol',
  },
  {
    index: 145,
    ValueName: 'Zaehler_BetrZeitSW',
    Description: 'Betriebsstundenzähler Schwimmbad (dd hh:mm:ss)',
  },
  {
    index: 146,
    ValueName: 'FreigabKuehl',
    Description: 'Freigabe Kühlung',
  },
  {
    index: 147,
    ValueName: 'AnalogIn',
    Description: 'Analoges Eingangssignal (V)',
  },
  { index: 148, ValueName: 'SonderZeichen', Description: '' },
  {
    index: 149,
    ValueName: 'SH_ZIP',
    Description: 'Zirkulationspumpen Symbol',
  },
  {
    index: 150,
    ValueName: 'WebsrvProgrammWerteBeobarten',
    Description: '',
  },
  {
    index: 151,
    ValueName: 'WMZ_Heizung',
    Description: 'Wärmemengenzähler Heizung (kWh)',
  },
  {
    index: 152,
    ValueName: 'WMZ_Brauchwasser',
    Description: 'Wärmemengenzähler Brauchwasser (kWh)',
  },
  {
    index: 153,
    ValueName: 'WMZ_Schwimmbad',
    Description: 'Wärmemengenzähler Schwimmbad (kWh)',
  },
  {
    index: 154,
    ValueName: 'WMZ_Seit',
    Description: 'Wärmemengenzähler Gesamt (kWh)',
  },
  {
    index: 155,
    ValueName: 'WMZ_Durchfluss',
    Description: 'Wärmemengenzähler Durchfluss (l/h)',
  },
  {
    index: 156,
    ValueName: 'AnalogOut1',
    Description: 'Analog Ausgang 1 (V)',
  },
  {
    index: 157,
    ValueName: 'AnalogOut2',
    Description: 'Analog Ausgang 2 (V)',
  },
  {
    index: 158,
    ValueName: 'Time_Heissgas',
    Description: 'Sperre zweiter Verdichter Heissgas',
  },
  {
    index: 159,
    ValueName: 'Temp_Lueftung_Zuluft',
    Description: 'Zulufttemperatur (°C)',
  },
  {
    index: 160,
    ValueName: 'Temp_Lueftung_Abluft',
    Description: 'Ablufttemperatur (°C)',
  },
  {
    index: 161,
    ValueName: 'Zaehler_BetrZeitSolar',
    Description: 'Betriebsstundenzähler Solar',
  },
  {
    index: 162,
    ValueName: 'AnalogOut3',
    Description: 'Analog Ausgang 3 (V)',
  },
  {
    index: 163,
    ValueName: 'AnalogOut4',
    Description: 'Analog Ausgang 4 (V)',
  },
  {
    index: 164,
    ValueName: 'Out_VZU',
    Description: 'Zuluft Ventilator (Abtaufunktion)',
  },
  { index: 165, ValueName: 'Out_VAB', Description: 'Abluft Ventilator' },
  {
    index: 166,
    ValueName: 'Out_VSK',
    Description: 'Ausgang "VSK" (1/0)',
  },
  {
    index: 167,
    ValueName: 'Out_FRH',
    Description: 'Ausgang "FRH" (1/0)',
  },
  {
    index: 168,
    ValueName: 'AnalogIn2',
    Description: 'Analog Eingang 2 (V)',
  },
  {
    index: 169,
    ValueName: 'AnalogIn3',
    Description: 'Analog Eingang 3 (V)',
  },
  { index: 170, ValueName: 'SAXin', Description: 'Eingang "SAX" (1/0)' },
  { index: 171, ValueName: 'SPLin', Description: 'Eingang "SPL" (1/0)' },
  {
    index: 172,
    ValueName: 'Compact_exists',
    Description: 'Lüftungsplatine verbaut',
  },
  {
    index: 173,
    ValueName: 'Durchfluss_WQ',
    Description: 'Durchfluss Wärmequelle (l/h)',
  },
  { index: 174, ValueName: 'LIN_exists', Description: 'LIN BUS verbaut' },
  {
    index: 175,
    ValueName: 'LIN_ANSAUG_VERDAMPFER',
    Description: 'Temperatur Ansaug Verdampfer (°C)',
  },
  {
    index: 176,
    ValueName: 'LIN_ANSAUG_VERDICHTER',
    Description: 'Temperatur Ansaug Verdichter (°C)',
  },
  {
    index: 177,
    ValueName: 'LIN_VDH',
    Description: 'Temperatur Verdichter Heizung (°C)',
  },
  { index: 178, ValueName: 'LIN_UH', Description: 'Überhitzung (K)' },
  {
    index: 179,
    ValueName: 'LIN_UH_Soll',
    Description: 'Überhitzung Soll (K)',
  },
  { index: 180, ValueName: 'LIN_HD', Description: 'Hochdruck (bar)' },
  { index: 181, ValueName: 'LIN_ND', Description: 'Niederdruck (bar)' },
  {
    index: 182,
    ValueName: 'LIN_VDH_out',
    Description: 'Ausgang "Verdichterheizung" (1/0)',
  },
  {
    index: 183,
    ValueName: 'HZIO_PWM',
    Description: 'Steuersignal Umwälzpumpe (%)',
  },
  {
    index: 184,
    ValueName: 'HZIO_VEN',
    Description: 'Ventilator Drehzahl (U/min)',
  },
  { index: 185, ValueName: 'HZIO_EVU2', Description: '' },
  {
    index: 186,
    ValueName: 'HZIO_STB',
    Description: 'Sicherheits-Temperatur-Begrenzer Fussbodenheizung',
  },
  {
    index: 187,
    ValueName: 'SEC_Qh_Soll',
    Description: 'Leistung Sollwert (kWh)',
  },
  {
    index: 188,
    ValueName: 'SEC_Qh_Ist',
    Description: 'Leistung Istwert (kWh)',
  },
  {
    index: 189,
    ValueName: 'SEC_TVL_Soll',
    Description: 'Temperatur Vorlauf Soll (°C)',
  },
  {
    index: 190,
    ValueName: 'SEC_Software',
    Description: 'Software Stand SEC Board',
  },
  {
    index: 191,
    ValueName: 'SEC_BZ',
    Description: 'Betriebszustand SEC Board',
  },
  { index: 192, ValueName: 'SEC_VWV', Description: 'Vierwegeventil' },
  {
    index: 193,
    ValueName: 'SEC_VD',
    Description: 'Verdichterdrehzahl (U/min)',
  },
  {
    index: 194,
    ValueName: 'SEC_VerdEVI',
    Description: 'Verdichtertemperatur EVI (Enhanced Vapour Injection) (°C)',
  },
  {
    index: 195,
    ValueName: 'SEC_AnsEVI',
    Description: 'Ansaugtemperatur EVI (°C)',
  },
  {
    index: 196,
    ValueName: 'SEC_UEH_EVI',
    Description: 'Überhitzung EVI (K)',
  },
  {
    index: 197,
    ValueName: 'SEC_UEH_EVI_S',
    Description: 'Überhitzung EVI Sollwert (K)',
  },
  {
    index: 198,
    ValueName: 'SEC_KondTemp',
    Description: 'Kondensationstemperatur (°C)',
  },
  {
    index: 199,
    ValueName: 'SEC_FlussigEx',
    Description: 'Flüssigtemperatur EEV (elektron. Expansionsventil) (°C)',
  },
  {
    index: 200,
    ValueName: 'SEC_UK_EEV',
    Description: 'Unterkühlung EEV (°C)',
  },
  {
    index: 201,
    ValueName: 'SEC_EVI_Druck',
    Description: 'Druck EVI (bar)',
  },
  {
    index: 202,
    ValueName: 'SEC_U_Inv',
    Description: 'Spannung Inverter (V)',
  },
  {
    index: 203,
    ValueName: 'Temperatur_THG_2',
    Description: 'Temperaturfühler Heissgas 2 (°C)',
  },
  {
    index: 204,
    ValueName: 'Temperatur_TWE_2',
    Description: 'Temperaturfühler Wärmequelleneintritt 2 (°C)',
  },
  {
    index: 205,
    ValueName: 'LIN_ANSAUG_VERDAMPFER_2',
    Description: 'Ansaugtemperatur Verdampfer 2 (°C)',
  },
  {
    index: 206,
    ValueName: 'LIN_ANSAUG_VERDICHTER_2',
    Description: 'Ansaugtemperatur Verdichter 2 (°C)',
  },
  {
    index: 207,
    ValueName: 'LIN_VDH_2',
    Description: 'Temperatur Verdichter 2 Heizung (°C)',
  },
  { index: 208, ValueName: 'LIN_UH_2', Description: 'Überhitzung 2 (K)' },
  {
    index: 209,
    ValueName: 'LIN_UH_Soll_2',
    Description: 'Überhitzung Soll 2 (K)',
  },
  { index: 210, ValueName: 'LIN_HD_2', Description: 'Hochdruck 2 (bar)' },
  {
    index: 211,
    ValueName: 'LIN_ND_2',
    Description: 'Niederdruck 2 (bar)',
  },
  {
    index: 212,
    ValueName: 'HDin_2',
    Description: 'Eingang "Druckschalter Hochdruck 2" (1/0)',
  },
  {
    index: 213,
    ValueName: 'AVout_2',
    Description: 'Ausgang "Abtauventil 2" (1/0)',
  },
  {
    index: 214,
    ValueName: 'VBOout_2',
    Description: 'Ausgang "Solepumpe/Ventilator 2" (1/0)',
  },
  {
    index: 215,
    ValueName: 'VD1out_2',
    Description: 'Ausgang "Verdichter 1 / 2" (1/0)',
  },
  {
    index: 216,
    ValueName: 'LIN_VDH_out_2',
    Description: 'Ausgang "Verdichter Heizung 2" (1/0)',
  },
  {
    index: 217,
    ValueName: 'Switchoff2_Nr0',
    Description: 'Grund Abschaltung 0 im Speicher',
  },
  {
    index: 218,
    ValueName: 'Switchoff2_Nr1',
    Description: 'Grund Abschaltung 1 im Speicher',
  },
  {
    index: 219,
    ValueName: 'Switchoff2_Nr2',
    Description: 'Grund Abschaltung 2 im Speicher',
  },
  {
    index: 220,
    ValueName: 'Switchoff2_Nr3',
    Description: 'Grund Abschaltung 3 im Speicher',
  },
  {
    index: 221,
    ValueName: 'Switchoff2_Nr4',
    Description: 'Grund Abschaltung 4 im Speicher',
  },
  {
    index: 222,
    ValueName: 'Switchoff2_Time0',
    Description: 'Zeitstempel Abschaltung 0 im Speicher',
  },
  {
    index: 223,
    ValueName: 'Switchoff2_Time1',
    Description: 'Zeitstempel Abschaltung 1 im Speicher',
  },
  {
    index: 224,
    ValueName: 'Switchoff2_Time2',
    Description: 'Zeitstempel Abschaltung 2 im Speicher',
  },
  {
    index: 225,
    ValueName: 'Switchoff2_Time3',
    Description: 'Zeitstempel Abschaltung 3 im Speicher',
  },
  {
    index: 226,
    ValueName: 'Switchoff2_Time4',
    Description: 'Zeitstempel Abschaltung 4 im Speicher',
  },
  {
    index: 227,
    ValueName: 'RBE_RT_Ist',
    Description: 'Raumtemperatur Istwert (°C)',
  },
  {
    index: 228,
    ValueName: 'RBE_RT_Soll',
    Description: 'Raumtemperatur Sollwert (°C)',
  },
  {
    index: 229,
    ValueName: 'Temp_BW_oben',
    Description: 'Temperatur Brauchwasser Oben (°C)',
  },
  {
    index: 230,
    ValueName: 'Code_WP_akt_2',
    Description: 'Wärmepumpen Typ 2',
  },
  {
    index: 231,
    ValueName: 'Freq_VD',
    Description: 'Verdichterfrequenz (Hz)',
  },
  { index: 232, ValueName: 'LIN_Temp_ND', Description: '' },
  { index: 233, ValueName: 'LIN_Temp_HD', Description: '' },
  { index: 234, ValueName: 'Abtauwunsch', Description: '' },
  { index: 235, ValueName: 'Abtauwunsch_2', Description: '' },
  { index: 236, ValueName: 'Freq_Soll', Description: '' },
  { index: 237, ValueName: 'Freq_Min', Description: '' },
  { index: 238, ValueName: 'Freq_Max', Description: '' },
  { index: 239, ValueName: 'VBO_Soll', Description: '' },
  { index: 240, ValueName: 'VBO_Ist', Description: '' },
  { index: 241, ValueName: 'HZUP_PWM', Description: '' },
  { index: 242, ValueName: 'HZUP_Soll', Description: '' },
  { index: 243, ValueName: 'HZUP_Ist', Description: '' },
  { index: 244, ValueName: 'Temperatur_VLMax', Description: '' },
  { index: 245, ValueName: 'Temperatur_VLMax_2', Description: '' },
  { index: 246, ValueName: 'SEC_EVi', Description: '' },
  { index: 247, ValueName: 'SEC_EEV', Description: '' },
  { index: 248, ValueName: 'Time_ZWE3_akt', Description: '' },
];

export function getValueDefByIndex(iIndex: number): ValueDescription {
  const retVal = {
    index: iIndex,
    ValueName: 'UNKNOWN',
    Description: null,
  };
  if (iIndex >= aValueDefinition.length) return retVal;

  return aValueDefinition[iIndex];
}

export function parse(data: readonly number[]) {
  aValueDefinition.forEach((valueDef) => {
    if (valueDef.parser) {
      valueDef.value = valueDef.parser(data, valueDef.index);
    }

    console.log(valueDef);
  });
}
