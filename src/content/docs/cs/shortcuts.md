---
title: Klávesové zkratky
description: Klávesy uvnitř Megamenu a volitelná globální zkratka, která ho otevře odkudkoli.
---

## Uvnitř menu

| Klávesa | Akce |
| --- | --- |
| Text | Filtruje záložky a příkazy ve všech prostorech a k tomu akce Omarchy a aplikace |
| `>` a dotaz | Hledá a spouští akce Omarchy, nainstalované aplikace a uložené příkazy |
| `1`–`6` | Spustí slot rychlého přístupu 1–6, když je hledání prázdné. Prostor Note tyhle klávesy nepoužívá |
| `Tab` / `Shift+Tab` | Další prostor / předchozí prostor |
| `↑` `↓` `←` `→` | Pohyb mezi položkami, v režimu `>` mezi systémovými aplikacemi |
| `Enter` | Spustí vybranou záložku, příkaz nebo aplikaci |
| Pravý klik / `Alt+M` | Kontextové menu: prohlížeč, kopírování, úprava, přesun, smazání |
| `Alt+E` | Upravit vybranou položku |
| `Ctrl+N` | Přidat záložku, příkaz nebo lokální aplikaci. V prostoru Note založí novou poznámku |
| `Ctrl+S` | Uloží otevřenou poznámku, když je kurzor v editoru |
| `SUPER + N` | Volitelné. Vypnuté, dokud v dialogu zkratky neuložíš zkratku poznámky. Otevře novou poznámku |
| `Esc` | Zavře dialog, kontextové menu nebo Megamenu |

Menu jde otevřít i z terminálu:

```bash
omarchy-shell shell toggle gruut.megamenu
```

## Globální zkratka

Tlačítko **Nastavit zkratku** v horní liště naváže zkratku v Hyprlandu, třeba `SUPER + M` nebo `ALT + SPACE`. Uložením se do `~/.config/hypr/bindings.lua` zapíše blok omaplug. Než zkratku uložíš, Megamenu ten soubor nemění.

Stejný dialog má samostatný řádek pro zkratku nové poznámky. Navržené klávesy jsou `SUPER + N`. Uložení toho řádku zapíše druhý blok a nenahradí zkratku, která otevírá menu. Co dělá, je na stránce [Poznámky](/cs/notes/).

**Vypnout zkratku** na stejném tlačítku vazbu odstraní. Když zkratka pořád platí, udělej to před [odebráním pluginu](/cs/install/).
