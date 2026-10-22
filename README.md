# Dokumentace Omarchy Megamenu

Statický web v [Astro Starlight](https://starlight.astro.build/) pro [megamenu.rovix.eu](https://megamenu.rovix.eu). Angličtina je na kořeni, čeština na `/cs/`.

Plugin samotný zůstává v [omarchy-megamenu](https://github.com/Morganczech/omarchy-megamenu). Tahle složka je jen průvodce: [omarchy-megamenu-docs](https://github.com/Morganczech/omarchy-megamenu-docs).

## Místně

```bash
npm install
npm run dev
```

Produkční sestavení:

```bash
npm run build
```

Výstup je v `dist/`. Vyhledávání v hlavičce je v tom sestavení, ve vývojovém serveru Starlight ukáže jen upozornění.

## Nasazení

Repozitář je napojený na Cloudflare Workers Builds. Push na `main` spustí `npm run build` a potom `npx wrangler deploy`. `wrangler.jsonc` má doménu `megamenu.rovix.eu`. Zóna `rovix.eu` musí být na stejném účtu.

Místní zveřejnění:

```bash
npm run build && npm run deploy
```

Do navigace rovix.eu tenhle web nepatří.
