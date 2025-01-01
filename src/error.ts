import { range } from './rough.js';
import { parseDate } from './parsers.js';

export const aFieldsErrorCodeDescription = range(100, 104, 1);
export const aFieldsErrorDate = range(95, 99, 1);
export const errorCodes = {
  701: 'Niederdruckstörung Bitte Inst. rufen;Niederdruckpressostat im Kältekreis hat mehrmals angesprochen (LW) oder länger als 20 Sekunden (SW). WP auf Leckage, Schaltpunkt Pressostat, Abtauung und TA-min überprüfen.',
  702: 'Niederdrucksperre RESET automatisch. nur bei L/W-Geräten möglich: Niederdruck im Kältekreis hat angesprochen. Nach einiger Zeit automatischer WP-Neuanlauf. WP auf Leckage, Schaltpunkt Pressostat, Abtauung und TA-min überprüfen.',
  703: 'Frostschutz Bitte Inst. rufen. nur bei L/W-Geräten möglich: Läuft die Wärmepumpe und wird die Temperatur im Vorlauf < 5 °C, wird auf Frostschutz erkannt.  WP-Leistung, Abtauventil und Heizanlage überprüfen.',
  704: 'Heissgasstörung Reset in hh:mm. Maximale Temperatur im Heissgas-Kältekreis überschritten. Automatischer WP-Neuanlauf nach hh:mm. Kältemittelmenge, Verdampfung, Überhitzung Vorlauf, Rücklauf und WQ-min überprüfen.',
  705: 'Motorschutz VEN Bitte Inst. rufen. nur bei L/W-Geräten möglich: Motorschutz des Ventilators hat angesprochen. Ventilator überprüfen.',
  706: 'Motorschutz BSUP Bitte Inst. rufen. nur bei S/W- und W/W-Geräten möglich: Motorschutz der Sole- oder Brunnenwasserumwälzpumpe oder des Verdichters hat angesprochen. Eingestellte Werte, Verdichter, BOSUP überprüfen.',
  707: 'Codierung WP Bitte Inst. rufen. Bruch oder Kurzschluss der Kodierungsbrücke in WP nach der Ersteinschaltung. Kodierungswiderstand in WP, Stecker und Verbindungsleitung überprüfen.',
  708: 'Fühler Rücklauf Bitte Inst. rufen. Bruch oder Kurzschluss des Rücklauffühlers. Rücklauffühler, Stecker und Verbindungsleitung überprüfen.',
  709: 'Fühler Vorlauf Bitte Inst. rufen. Bruch oder Kurzschluss des Vorlauffühlers. Keine Störabschaltung bei S/W- und W/W-Geräten. Vorlauffühler, Stecker und Verbindungsleitung überprüfen.',
  710: 'Fühler Heissgas Bitte Inst. rufen. Bruch oder Kurzschluss des Heissgasfühlers im Kältekreis. Heissgasfühler, Stecker und Verbindungsleitung überprüfen.',
  711: 'Fühler Aussentemp. Bitte Inst. rufen. Bruch oder Kurzschluss des Aussentemperaturfühlers. Keine Störabschaltung. Festwert auf -5 °C. Aussentemperaturfühler, Stecker und Verbindungsleitung überprüfen.',
  712: 'Fühler Warmwasser Bitte Inst. rufen. Bruch oder Kurzschluss des Warmwasserfühlers. Keine Störabschaltung.. Warmwasserfühler, Stecker und Verbindungsleitung überprüfen.',
  713: 'Fühler WQ-Ein Bitte Inst. rufen. Bruch oder Kurzschluss des Wärmequellenfühlers (Eintritt). Wärmequellenfühler, Stecker und Verbindungsleitung überprüfen',
  714: 'Heissgas WW Reset in hh:mm. Thermische Einsatzgrenze der WP überschritten. Warmwasserbereitung gesperrt für hh:mm. Durchfluss Warmwasser, Wärmetauscher, Warmwasser-Temperatur und Umwälzpumpe Warmwasser überprüfen.',
  715: 'Hochdruck-Abschalt. RESET automatisch. Hochdruckpressostat im Kältekreis hat angesprochen. Nach einiger Zeit automatischer WP-Neuanlauf Durchfluss HW, Überströmer, Temperatur und Kondensation überprüfen.',
  716: 'Hochdruckstörung Bitte Inst rufen. Hochdruckpressostat im Kältekreis hat mehrfach angesprochen. Durchfluss HW, Überströmer, Temperatur und Kondensation überprüfen.',
  717: 'Durchfluss-WQ Bitte Inst rufen. Durchflussschalter bei W/W-Geräten hat während der Vorspülzeit oder des Betriebs angesprochen. Durchfluss, Schaltpunkt DFS, Filter, Luftfreiheit überprüfen',
  718: 'Max. Aussentemp. RESET automatisch. nur bei L/W-Geräten möglich: Aussentemperatur hat zulässigen Maximalwert überschritten.. Aussentemperatur und eingestellten Wert überprüfen.',
  719: 'Min. Aussentemp. RESET automatisch. nur bei L/W-Geräten möglich: Aussentemperatur hat zulässigen Minimalwert unterschritten.. Aussentemperatur und eingestellten Wert überprüfen.',
  720: 'WQ-Temperatur RESET automatisch in hh:mm. nur bei S/W- und W/W-Geräten möglich: Temperatur am Verdampferaustritt ist auf WQ-Seite mehrfach unter den Sicherheitswert gefallen. Automatischer WP-Neuanlauf nach hh:mm. Durchfluss, Filter, Luftfreiheit, Temperatur überprüfen.',
  721: 'Niederdruckabschaltung RESET automatisch. Niederdruckpressostat im Kältekreis hat angesprochen. Nach einiger Zeit automatischer WP-Neuanlauf (SW und WW). Schaltpunkt Pressostat, Durchfluss WQ-Seite überprüfen.',
  722: 'Tempdiff Heizwasser Bitte Inst rufen. Temperaturspreizung im Heizbetrieb ist negativ (=fehlerhaft). Funktion und Platzierung der Vor- und Rücklauffühler überprüfen.',
  723: 'Tempdiff Warmw. Bitte Inst rufen.  Temperaturspreizung im Warmwasserbetrieb ist negativ (=fehlerhaft). Funktion und Platzierung der Vor- und Rücklauffühler überprüfen.',
  724: 'Tempdiff Abtauen Bitte Inst rufen. Temperaturspreizung im Heizkreis ist während des Abtauens > 15 K (=Frostgefahr). Funktion und Platzierung der Vor- und Rücklauffühler, Förderleistung HUP, Überströmer und Heizkreise überprüfen.',
  725: 'Anlagefehler WW Bitte Inst rufen. Warmwasserbetrieb gestört, gewünschte Speichertemperatur ist weit unterschritten. Umwälzpumpe WW, Speicherfüllung, Absperrschieber und 3-Wege-Ventil überprüfen. Heizwasser und WW entlüften.',
  726: 'Fühler Mischkreis 1 Bitte Inst rufen. Bruch oder Kurzschluss des Mischkreisfühlers. Mischkreisfühler, Stecker und Verbindungsleitung überprüfen.',
  727: 'Soledruck Bitte Inst rufen. Soledruckpressostat hat während Vorspülzeit oder während des Betriebs angesprochen. Soledruck und Soledruckpressostat überprüfen.',
  728: 'Fühler WQ-Aus Bitte Inst. rufen. Bruch oder Kurzschluss des Wärmequellenfühlers am WQ-Austritt Wärmequellenfühler, Stecker und Verbindungsleitung überprüfen.',
  729: 'Drehfeldfehler Bitte Inst rufen. Verdichter nach dem Einschalten ohne Leistung. Drehfeld und Verdichter überprüfen.',
  730: 'Leistung Ausheizen Bitte Inst rufen. Das Ausheizprogramm konnte eine VL-Temperaturstufe nicht im vorgegebenen Zeitintervall erreichen. Ausheizprogramm läuft weiter..  Leistungsbedarf während des Ausheizens überprüfen.',
  732: 'Störung Kühlung Bitte Inst rufen. Die Heizwassertemperatur von 16 °C wurde mehrfach unterschritten. Mischer und Heizungsumwälzpumpe überprüfen.',
  733: 'Störung Anode Bitte Inst. rufen. Störmeldeeingang der Fremdstromanode hat angesprochen. Verbindungsleitung Anode und Potenziostat überprüfen. WW-Speicher füllen.',
  734: 'Störung Anode Bitte Inst. rufen. Fehler 733 liegt seit mehr als zwei Wochen an und Warmwasserbereitung ist gesperrt. Fehler vorübergehend quittieren, um Warmwasserbereitung wieder freizugeben. Fehler 733 beheben.',
  735: 'Fühler Ext. En Bitte Inst rufen. nur bei eingebauter Comfort-/Erweiterungs-Platine möglich: Bruch oder Kurzschluss des Fühlers ?Externe Energiequelle?. Fühler ?Externe Energiequelle?, Steckerund Verbindungsleitung überprüfen.',
  736: 'Fühler Solarkollektor Bitte Inst rufen. nur bei eingebauter Comfort-/Erweiterungs-Platine möglich: Bruch oder Kurzschluss des Fühlers ?Solarkollektor?. Fühler ?Solarkollektor?, Stecker undVerbindungsleitung überprüfen.',
  737: 'Fühler Solarspeicher Bitte Inst rufen. nur bei eingebauter Comfort-/Erweiterungs-Platine möglich: Bruch oder Kurzschluss des Fühlers ?Solarspeicher?. Fühler ?Solarspeicher?, Stecker und Verbindungsleitung überprüfen.',
  738: 'Fühler Mischkreis2 Bitte Inst rufen. nur bei eingebauter Comfort-/Erweiterungs-Platine möglich: Bruch oder Kurzschluss des Fühlers ?Mischkreis2?. Fühler ?Mischkreis2?, Stecker und Verbindungsleitung überprüfen.',
  750: 'Fühler Rücklauf extern Bitte Inst. rufen. Bruch oder Kurzschluss des externen Rücklauffühlers. Externer Rücklauffühler, Stecker und Verbindungsleitung überprüfen.',
  751: 'Phasenüberwachungsfehler. Phasenfolgerelais hat angesprochen. Überprüfung Drehfeld und Phasenfolgerelais.',
  752: 'Phasenüberwachungs / Durchflussfehler. Phasenfolgerelais oder Durchflussschalter hat angesprochen. siehe Fehler Nr. 751 und Nr. 717',
  755: 'Verbindung zu Slave verloren Bitte Inst. rufen. Ein Slave hat für mehr als 5 Minuten nicht geantwortet. Netzwerkverbindung, Switch und IP-Adressen prüfen. Gegebenenfalls WP-Suche erneut ausführen.',
  756: 'Verbindung zu Master verloren Bitte Inst. rufen. Ein Master hat für mehr als 5 Minuten nicht geantwortet. Netzwerkverbindung, Switch und IP-Adressen prüfen. Gegebenenfalls WP-Suche erneut ausführen.',
  757: 'ND-Störung bei WW-Gerät. Niederdruckpressostat bei WW-Gerät hat mehrmals oder länger als 20 Sekunden angesprochen. Bei 3maligem Auftreten dieser Störung kann die Anlage nur vom authorisierten Servicepersonal freigeschaltet werden!',
  758: 'Störung Abtauung. Die Abtauung wurde 5mal in Folge über zu niedrige Vorlauftemperatur beendet. Durchfluss prüfen Vorlaufsensor prüfen',
  759: 'Meldung TDI. Thermische Desinfektion konnte 3mal in Folge nicht korrekt durchgeführt werden. Einstellung Zweiter Wärmeerzeuger und Sicherheitstemperaturbegrenzer prüfen',
  760: 'Störung Abtauung. Abtauung wurde 5mal in Folge über Maximalzeit beendet (starker Wind trifft auf Verdampfer). Ventilator und Verdampfer vor starkem Wind schützen',
  761: 'LIN-Verbindung unterbrochen. LIN-Timeout. Kabel/Kontakt prüfen',
  762: 'Fühler Ansaug Verdichter. Fühlerfehler Tü (Ansaug Verdichter). Fühler prüfen, evtl. tauschen',
  763: 'Fühler Ansaug-Verdampfer. Fühlerfehler Tü1 (Ansaug Verdampfer). Fühler prüfen, evtl. tauschen',
  764: 'Fühler Verdichterheizung. Fühlerfehler Verdichterheizung. Fühler prüfen, evtl. tauschen',
  765: 'Überhitzung. Überhitzung länger als 5 Minuten unter 2K. Bei Ersteinschaltung. Drehfeld prüfen, sonst Kundendienst rufen',
  766: 'Einsatzgrenzen-VD. Betrieb 5 Minuten außerhalb des Einsatzbereichs des Verdichters. Drehfeld prüfen',
  767: 'STB E-Stab. STB des Heizstabs am SEC wurde aktiviert. Heizstab überprüfen und Sicherung wieder reindrücken',
  770: 'Niedrige Überhitzung. Überhitzung liegt über einen längeren Zeitraum unter dem Grenzwert. Temperaturfühler, Drucksensor und Expansionsventil prüfen',
  771: 'Hohe Überhitzung. Überhitzung liegt über einen längeren Zeitraum über dem Grenzwert. Temperaturfühler, Drucksensor, Füllmenge und Expansionsventil prüfen',
  776: 'Einsatzgrenzen-VD. Verdichter arbeitet über längeren Zeitraum außerhalb seiner Einsatzgrenzen. Thermodynamik prüfen',
  777: 'Expansionsventil. Expansionsventil defekt. Expansionsventil, Verbindungskabel und ggf. SEC-Board prüfen',
  778: 'Fühler Niederdruck. Niederdruckfühler defekt. Sensor, Stecker und Verbindungsleitung prüfen',
  779: 'Fühler Hochdruck. Hochdruckfühler defekt. Sensor, Stecker und Verbindungsleitung prüfen',
  780: 'Fühler EVI. EVI-Fühler defekt. Sensor, Stecker und Verbindungsleitung prüfen',
  781: 'Fühler Flüssig, vor Ex-Ventil. Temperaturfühler Flüssig vor Ex-Ventil defekt. Sensor, Stecker und Verbindungsleitung prüfen',
  782: 'Fühler EVI Sauggas. Temperaturfühler EVI Sauggas defekt. Sensor, Stecker und Verbindungsleitung prüfen',
  783: 'Kommunikation SEC - Inverter. Kommunikation zwischen SEC u. Inverter gestört. Verbindungskabel, Entstörkondensatoren und Verkabelung prüfen',
  784: 'VSS gesperrt. Inverter gesperrt. Komplette Anlage 2 Minuten lang spannungslos schalten. Bei wiederholtem Auftreten Inverter und Verdichter prüfen',
  785: 'SEC-Board defekt. Fehler im SEC Board festgestellt. SEC Board austauschen',
  786: 'Kommunikation SEC - Inverter. Störung der Kommunikation zwischen SEC und HZIO von SEC festgestellt. Kabelverbindung HZ/IO SEC-Board prüfen',
  787: 'VD Alarm. Verdichter meldet Fehler. Störung quittieren. Falls Fehler mehrfach auftritt, autorisiertes Servicepersonal (= Kundendienst) rufen',
  788: 'Schwerw. Inverter. Fehler. Fehler im Inverter Inverter prüfen',
  789: 'LIN/Kodierung nicht vorhanden. Bedienteil konnte keine Kodierung feststellen. Entweder ist die LIN-Verbindung unterbrochen oder der Kodierungswiderstand wird nicht erkannt. Verbindungskabel LIN / Kodierwiderstand prüfen',
  790: 'Schwerw. Inverter Fehler. Fehler in der Stromversorgung des Inverters / Verdichters. Verkabelung, Inverter und Verdichter prüfen',
  791: 'ModBus Verbindung verloren. SEC-Board seit einiger Zeit nicht mehr erreichbar. 791 wird ausgelöst, wenn zwar eine HZIO-Platine gefunden worden ist (ohne separate Kodierung), allerdings kein SEC-Board daran erkannt werden kann. Sofern es sich um die SECKonfiguration handelt, das ModBus-Kabel zwischen HZIO und SEC Board prüfen. Ebenso das SEC-Board prüfen, ob alles blinkt, wie es soll Falls es KEINE Konfiguration mit SEC-Board ist (z.B., weil es sich um ein P184-Gerät handelt), dann den Kodierungswiderstand der HZIO prüfen',
  792: 'LIN-Verbindung unterbrochen. Es konnte keine Grundplatine und auch sonst keine Konfiguration gefunden werden. Kodierungsstecker auf LINPlatine(n) prüfen',
  793: 'Schwerw. Inverter. Fehler Temperaturfehler im Inverter. Fehler behebt sich selbst',
};

export type hErrorCodeType = keyof typeof errorCodes;

export function getErrorCode(
  data: ReadonlyArray<number>,
  index: number,
): number {
  if (index < 0 || index >= aFieldsErrorCodeDescription.length) return -1;

  return data[aFieldsErrorCodeDescription[index]];
}

export function getErrorDescription(errorCode: number): string {
  if (errorCode in errorCodes) {
    return errorCodes[errorCode as hErrorCodeType];
  }
  return 'UNKOWN ERROR';
}

export function getErrorDesc(
  data: ReadonlyArray<number>,
  index: number,
): string {
  return getErrorDescription(getErrorCode(data, index));
}

export class Error {
  index: number;
  code: number;
  description: string;
  timestamp: Date;

  constructor(index: number, data: ReadonlyArray<number>) {
    this.index = index;
    this.code = getErrorCode(data, index);
    this.description = getErrorDescription(this.code);
    this.timestamp = parseDate(data[aFieldsErrorDate[index]]);
  }
}
