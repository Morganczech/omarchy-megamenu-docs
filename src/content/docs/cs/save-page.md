---
title: Uložení aktuální stránky
description: Ulož otevřenou kartu prohlížeče do prostoru Megamenu. Potřebuješ doplněk a místního pomocníka.
---

Uložení otevřené stránky stojí na dvou částech najednou:

1. **Doplněk v prohlížeči** přečte aktuální kartu.
2. **Místní pomocník** zapíše záložku do `data.json` v Megamenu.

Tlačítko v liště prohlížeče nemá kam zapisovat, dokud pomocník není zaregistrovaný. Pomocník nemá co přijmout, dokud není nainstalovaný doplněk.

## Instalace doplňku

- **Firefox a Zen:** [Omarchy Megamenu na Mozilla Add-ons](https://addons.mozilla.org/cs/firefox/addon/omarchy-megamenu/). Anglický výpis: [addons.mozilla.org](https://addons.mozilla.org/firefox/addon/omarchy-megamenu/).
- **Dočasné načtení z checkoutu:** `about:debugging` → Tento Firefox → Načíst dočasný doplněk a vyber `extension/manifest.json`.
- **Chrome, Chromium nebo Brave:** `chrome://extensions` → režim pro vývojáře → Načíst rozbalené → složka `extension/`.

Registrace níže je ta, kterou spouští tlačítko v menu. Platí pro Firefox a Zen.

## Registrace pomocníka

Otevři Megamenu, v horní liště rozbal šipku a klikni na **Ukládání stránek**. Tooltip pořád připomíná, že doplněk je potřeba zvlášť. Z terminálu, když je plugin nainstalovaný:

```bash
python3 ~/.config/omarchy/plugins/gruut.megamenu/scripts/install-browser-host.py --firefox-only
```

Z checkoutu pluginu:

```bash
python3 scripts/install-browser-host.py --firefox-only
```

Když tlačítko ukazuje **Ukládání zapnuto**, Firefox a Zen mluví se `scripts/native-host.py`.

## Uložení karty

Tlačítko v liště ukáže název stránky, pak prostor a kategorii. Pro tohle se zakládá prostor **Seznam čtení** a nabízí se jako první. Stejná URL ve stejném prostoru znovu ponechá záložku, která tam už je. Megamenu načte `data.json` při příštím otevření a tehdy stáhne i faviconu.

![Okno Save to Megamenu s názvem stránky, prostorem, kategorií a tlačítkem Save page](/save-popup.webp)

## Vypnutí pomocníka

```bash
python3 ~/.config/omarchy/plugins/gruut.megamenu/scripts/install-browser-host.py --remove
```

Tím se smaže registrace hosta. Doplněk v prohlížeči zůstane, dokud ho neodebereš tam.
