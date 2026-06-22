# Mi Salud Mobile

This legacy Expo SDK 40 client has been restored for local development.

## Start

1. Start `mi-salud-admin` first on port `1337`.
2. Install dependencies with Yarn.
3. Run:

```powershell
npm run start:legacy -- --web
```

The web client opens at `http://localhost:19006`. Native development is
available at the LAN address printed by Expo. In development, the client
automatically points to the backend host used by Expo on port `1337`.

For a standalone build, set `expo.extra.api` in `app.json` to the deployed
backend URL before building.

## Verify a web build

```powershell
npm run build:web:legacy
```

Expo SDK 40 is retained for compatibility with the existing application. A
future production release should migrate incrementally to a supported Expo SDK.
