// Alle Texte der App (Deutsch). Neue Texte hier ergänzen.
export const de = {
  appName: 'Moto Kult Schwenningen',
  tagline: 'Das Festival für Young- und Oldtimer',
  datum: '12. und 13. Juni 2027',
  zeiten: 'Samstag und Sonntag, 10 bis 18 Uhr',
  ort: 'Südwest Messegelände, Villingen-Schwenningen',
  zumProgramm: 'Zum Programm',
  tabStart: 'Start',
  tabProgramm: 'Programm',
  tabFavoriten: 'Favoriten',
  filterTag: 'Tag',
  filterKategorie: 'Kategorie',
  alle: 'Alle',
  samstag: 'Samstag',
  sonntag: 'Sonntag',
  zuruecksetzen: 'Filter zurücksetzen',
  suchen: 'Suche in Titel und Beschreibung',
  treffer: 'Programmpunkte',
  keineTreffer: 'Keine Programmpunkte für diese Auswahl.',
  detail: 'Details',
  zurueckZurListe: 'Zurück zur Liste',
  uhr: 'Uhr',
  bis: 'bis',
  favoritSetzen: 'Als Favorit merken',
  favoritEntfernen: 'Favorit entfernen',
  meinTagesplan: 'Mein Tagesplan',
  keineFavoriten: 'Noch keine Favoriten. Tippe im Programm auf den Stern, um Programmpunkte zu merken.',
  katTalk: 'Talk & Know-how',
  katWork: 'Workshop & Praxis',
  katShow: 'Show & Parade',
  katMarkt: 'Teilemarkt & Expo',
} as const;

export type TextKey = keyof typeof de;
export function t(key: TextKey): string {
  return de[key];
}
