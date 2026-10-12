# Moto Kult Schwenningen – Event-App

Expo SDK 57, TypeScript, Expo Router. Alle Texte stehen in `lib/i18n.tsx`, die Programmdaten in `lib/program.ts`.

## Starten (z. B. in GitHub Codespaces)
1. `npm install`
2. `npm run typecheck`
3. `npx expo start --tunnel` und den QR-Code mit Expo Go scannen

## Build für die Abgabe
1. `npx expo login`
2. `npx eas-cli build --platform android --profile preview`
