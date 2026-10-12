import { colors } from './theme';
import type { TextKey } from './i18n';

export type Tag = 'Samstag' | 'Sonntag';
export type Kategorie = 'talk' | 'work' | 'show' | 'markt';

export type Programmpunkt = {
  id: string;
  tag: Tag;
  start: string;
  ende: string;
  titel: string;
  kategorie: Kategorie;
  beschreibung: string;
};

export const KATEGORIEN: { key: Kategorie; textKey: TextKey; color: string }[] = [
  { key: 'talk', textKey: 'katTalk', color: colors.talk },
  { key: 'work', textKey: 'katWork', color: colors.work },
  { key: 'show', textKey: 'katShow', color: colors.show },
  { key: 'markt', textKey: 'katMarkt', color: colors.markt },
];

export const TAGE: Tag[] = ['Samstag', 'Sonntag'];

// Programmdaten aus Learning Case 1 (lokal in der App, 14 Programmpunkte)
const DATEN: Programmpunkt[] = [
  { id: 'sa-1', tag: 'Samstag', start: '10:00', ende: '11:00', kategorie: 'show',
    titel: 'Eröffnungskorso der Klassiker',
    beschreibung: 'Das Festival startet mit einem gemeinsamen Korso historischer Fahrzeuge über das Messegelände. Besitzer präsentieren ihre gepflegten Klassiker und bringen die Besucher gleich zu Beginn in Festivalstimmung. Entlang der Strecke gibt es beste Fotomöglichkeiten für Groß und Klein.' },
  { id: 'sa-2', tag: 'Samstag', start: '11:15', ende: '12:30', kategorie: 'markt',
    titel: 'Teilemarkt-Auftakt: Raritäten und Ersatzteile',
    beschreibung: 'Zum Auftakt des Teilemarkts bieten Händler und Privatleute seltene Ersatzteile, Zubehör und Fundstücke an. Wer nach einem bestimmten Bauteil für sein Projekt sucht, findet hier oft das passende Stück. Stöbern, fachsimpeln und handeln gehören ausdrücklich dazu.' },
  { id: 'sa-3', tag: 'Samstag', start: '12:45', ende: '14:00', kategorie: 'work',
    titel: 'Workshop: Zündanlage am Oldtimer einstellen',
    beschreibung: 'In diesem praxisnahen Workshop lernen Teilnehmer, Zündzeitpunkt und Schließwinkel an einem Oldtimer korrekt einzustellen. Erfahrene Schrauber zeigen Schritt für Schritt, wie sich Startprobleme und unruhiger Leerlauf beheben lassen. Eigene Fragen zum Fahrzeug sind ausdrücklich willkommen.' },
  { id: 'sa-4', tag: 'Samstag', start: '14:15', ende: '15:00', kategorie: 'talk',
    titel: 'Talk: H-Kennzeichen und Oldtimer-Versicherung',
    beschreibung: 'Dieser Vortrag erklärt verständlich, welche Voraussetzungen ein Fahrzeug für das H-Kennzeichen erfüllen muss. Dazu gibt es Hinweise zu Gutachten, Steuervorteilen und der passenden Versicherung. Im Anschluss bleibt Zeit für Fragen aus dem Publikum.' },
  { id: 'sa-5', tag: 'Samstag', start: '15:15', ende: '16:15', kategorie: 'work',
    titel: 'Familien-Schrauberwerkstatt',
    beschreibung: 'Kinder und Jugendliche dürfen unter Anleitung selbst Hand anlegen und erste Handgriffe an Motorrädern und Mopeds ausprobieren. Sie lernen Werkzeuge kennen, wechseln Kerzen und ziehen Schrauben mit dem richtigen Drehmoment an. Eltern sind herzlich eingeladen, gemeinsam mitzumachen.' },
  { id: 'sa-6', tag: 'Samstag', start: '16:30', ende: '17:10', kategorie: 'show',
    titel: 'Youngtimer-Show: Ikonen der 80er und 90er',
    beschreibung: 'Auf der Showfläche rollen die Youngtimer der 1980er und 1990er Jahre in einer fahrenden Parade vor. Sportliche Kompakte, kantige Limousinen und frühe Cabrios zeigen, warum diese Epoche heute so begehrt ist. Moderatoren erzählen Wissenswertes zu Technik und Geschichte der Fahrzeuge.' },
  { id: 'sa-7', tag: 'Samstag', start: '17:15', ende: '18:00', kategorie: 'talk',
    titel: 'Talk: Klassiker in der Zukunft',
    beschreibung: 'Wie fährt man seinen Klassiker auch künftig legal und zuverlässig? Der Vortrag beleuchtet synthetische Kraftstoffe, Umweltzonen und Möglichkeiten der Umrüstung auf Elektroantrieb. Dabei werden Chancen, Kosten und rechtliche Grenzen sachlich gegenübergestellt und diskutiert.' },
  { id: 'so-1', tag: 'Sonntag', start: '10:00', ende: '11:00', kategorie: 'talk',
    titel: 'Talk: Kaufberatung für Oldtimer und Youngtimer',
    beschreibung: 'Ein Vortrag für alle, die sich ihren ersten Oldtimer oder Youngtimer zulegen möchten. Es geht um Rostvorsorge, Zustandsnoten, Unterlagen und realistische Unterhaltskosten. Mit praktischen Checklisten gelingt der Kauf deutlich sicherer und entspannter.' },
  { id: 'so-2', tag: 'Sonntag', start: '11:15', ende: '12:30', kategorie: 'work',
    titel: 'Workshop: Vergaser reinigen und synchronisieren',
    beschreibung: 'Im Workshop wird ein Vergaser gemeinsam zerlegt, gereinigt und wieder korrekt zusammengebaut. Anschließend zeigen die Kursleiter, wie mehrere Vergaser synchronisiert werden und der Motor ruhig läuft. Teilnehmer erhalten wertvolle Tipps für die Pflege zu Hause.' },
  { id: 'so-3', tag: 'Sonntag', start: '12:45', ende: '14:00', kategorie: 'markt',
    titel: 'Sonntagsmarkt: Zubehör, Literatur und Modellautos',
    beschreibung: 'Am Sonntag lädt der Teilemarkt erneut zum Stöbern nach Zubehör, Fachliteratur, Werkzeug und Modellautos ein. Zahlreiche Aussteller zeigen außerdem Pflegeprodukte, Restaurierungsangebote und Merchandising rund ums Thema. Ein Rundgang lohnt sich für Sammler und Selbstschrauber gleichermaßen.' },
  { id: 'so-4', tag: 'Sonntag', start: '14:15', ende: '15:30', kategorie: 'show',
    titel: 'Große Parade der Young- und Oldtimer',
    beschreibung: 'Zum Höhepunkt des Wochenendes fahren Young- und Oldtimer in einer großen Parade über das Gelände. Das Publikum sieht Fahrzeuge aus acht Jahrzehnten in Bewegung und hört die typischen Motorklänge. Eine Moderation stellt die Besonderheiten der einzelnen Modelle vor.' },
  { id: 'so-5', tag: 'Sonntag', start: '15:45', ende: '16:45', kategorie: 'work',
    titel: 'Workshop: Lack- und Chrompflege',
    beschreibung: 'Dieser Praxiskurs zeigt, wie Lack, Chrom und Leder an historischen Fahrzeugen schonend gepflegt werden. Die Teilnehmer üben das Polieren an Probeflächen und lernen passende Mittel kennen. Am Ende steht ein Tipp-Überblick für die Pflege im Alltag und über den Winter.' },
  { id: 'so-6', tag: 'Sonntag', start: '16:45', ende: '17:25', kategorie: 'talk',
    titel: 'Talk: Bordnetz und Kabelbaum im Klassiker',
    beschreibung: 'Alte Kabelbäume und schwache Bordnetze sind häufige Ursachen für Pannen bei Klassikern. Der Vortrag erklärt verständlich, wie sich Fehler systematisch finden und beheben lassen. Auch sinnvolle Modernisierungen, etwa bei Beleuchtung und Zündung, werden vorgestellt.' },
  { id: 'so-7', tag: 'Sonntag', start: '17:30', ende: '18:00', kategorie: 'show',
    titel: 'Publikumspreis und Abschlussausfahrt',
    beschreibung: 'Zum Abschluss des Festivals werden die schönsten Fahrzeuge ausgezeichnet und noch einmal der Menge präsentiert. Das Publikum stimmt zuvor selbst über seine Favoriten ab. Anschließend verabschiedet sich das Festival mit einem gemeinsamen Ausrollen der Fahrzeuge.' },
];

// Chronologisch: erst Tag, dann Uhrzeit
export function vergleiche(a: Programmpunkt, b: Programmpunkt): number {
  const ta = TAGE.indexOf(a.tag);
  const tb = TAGE.indexOf(b.tag);
  if (ta !== tb) return ta - tb;
  return a.start.localeCompare(b.start);
}

export const PROGRAMM: Programmpunkt[] = [...DATEN].sort(vergleiche);

export function findePunkt(id: string | undefined): Programmpunkt | undefined {
  return PROGRAMM.find((p) => p.id === id);
}

export function kategorieInfo(k: Kategorie) {
  return KATEGORIEN.find((x) => x.key === k) ?? KATEGORIEN[0];
}
