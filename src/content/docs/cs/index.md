---
title: Úvod
description: Menu pro Omarchy s prostory, šesti sloty Orbit, živými sloupci a uloženými příkazy.
---

Omarchy Megamenu je menu a widget do lišty pro [Omarchy](https://omarchy.org/). Odkazy, feedy, aplikace a příkazy v shellu zůstávají na tomhle počítači a vzhled se bere z aktivního tématu Omarchy.

![Megamenu s pruhem Nejčastější, šesti sloty Orbitu a sloupci kategorií](/megamenu.webp)

Otevřeš ho ikonou Megamenu v liště, nebo z terminálu:

```bash
omarchy-shell shell toggle gruut.megamenu
```

## Co v něm můžeš mít

- **Prostory** pro oddělené sady odkazů, feedů a aplikací. Přepínáš je `Tab` a `Shift+Tab`.
- **Quick Access Orbit**, šest připnutí na prostor, spouštění klávesami `1` až `6`.
- **Sloupce**, které jsou statický seznam, RSS nebo Atom feed, nebo GitHub repozitář.
- **Hledání** napříč prostory, akcemi Omarchy a nainstalovanými aplikacemi. Dotaz začínající `>` otevře plný pohled na akce.
- **Příkazy v shellu**, které běží v terminálu nebo na pozadí.
- **Import záložek** z nainstalovaných prohlížečů a doplněk, který uloží otevřenou kartu.

Záložky, kategorie a příkazy jsou v `~/.local/share/omarchy-megamenu/data.json`. Přepínač jazyka v horní liště střídá Auto, EN a CS.

[Instalace](/cs/install/) je jeden příkaz. Uložení karty, kterou právě čteš, má dvě části: [doplněk a místního pomocníka](/cs/save-page/).

Zdroj: [github.com/Morganczech/omarchy-megamenu](https://github.com/Morganczech/omarchy-megamenu). Firefox a Zen: [Omarchy Megamenu na Mozilla Add-ons](https://addons.mozilla.org/cs/firefox/addon/omarchy-megamenu/).
