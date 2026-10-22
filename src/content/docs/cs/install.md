---
title: Instalace a odebrání
description: Přidej Omarchy Megamenu příkazem pluginu, aktualizuj ho, přesuň ikonu v liště a odeber ho.
---

Megamenu potřebuje Omarchy 4.x (quickshell, Hyprland a CLI `omarchy`).

## Instalace

```bash
omarchy plugin add https://github.com/Morganczech/omarchy-megamenu --enable
```

Ikona v liště menu otevře. Globální zkratku můžeš později nastavit tlačítkem **Nastavit zkratku**. Zápis do `~/.config/hypr/bindings.lua` proběhne až ve chvíli, kdy zkratku uložíš.

## Aktualizace a přesun

```bash
omarchy plugin update gruut.megamenu
omarchy bar move gruut.megamenu --section left
```

`--section` je úsek lišty, do kterého chceš ikonu dát.

## Odebrání

Když je nastavená globální zkratka, nejdřív ji vypni tlačítkem zkratky (**Vypnout zkratku**).

```bash
omarchy plugin remove gruut.megamenu
```

### Ruční odebrání

```bash
rm -rf ~/.config/omarchy/plugins/gruut.megamenu
```

Pak odeber `"gruut.megamenu"` ze `~/.config/omarchy/shell.json`. Pokud jsi zkratku ukládal, smaž taky blok `-- omaplug-shortcut-start: gruut.megamenu` ze `~/.config/hypr/bindings.lua`. Nakonec:

```bash
omarchy restart shell
```

Data menu zůstávají v `~/.local/share/omarchy-megamenu/data.json`. Odebrání pluginu ten soubor nesmaže.

## Co už v Omarchy je

- `python3` pro import záložek, pomocníka zkratky a hosta pro ukládání z prohlížeče
- `curl` pro favicony, ukládané do `~/.local/share/omarchy-megamenu/favicons/`
- `wl-copy` pro kopírování URL, desktop id nebo příkazu
- `xdg-open` a `gtk-launch` pro URL a aplikace `.desktop`
- `xdg-terminal-exec` pro uložené příkazy, které otevírají terminál
