---
title: Příkazy
description: Přidej příkaz shellu do kategorie a spusť ho v terminálu nebo na pozadí.
---

Megamenu si do dat menu uloží text příkazu. Delší skript je obyčejný soubor, který si uložíš sám. Položka v menu potřebuje jen jeho název, nebo jeden řádek.

## Přidání z menu

1. Stiskni `Ctrl+N`, nebo **+ Položka**.
2. Vyber **Příkaz**.
3. **Název** je popisek v menu, třeba `Restic Backup`.
4. **Příkaz** je to, co se spustí. Může to být program, který už je na `PATH`, třeba `restic-backup`, nebo jeden řádek jako `notify-send "Backup finished"`.
5. **Pracovní adresář** je volitelný. Nastav ho, když má příkaz začít uvnitř projektu, třeba `pnpm dev` v `~/Work/my-app`.
6. Zvol, jak se spustí:
   - **Terminál** otevře výchozí terminál Omarchy přes `xdg-terminal-exec`, příkaz spustí přes `bash -lc` a po skončení počká na klávesu.
   - **Na pozadí** spustí stejný skript bez okna.
7. Vyber kategorii. Můžeš taky připnout slot Orbitu (`1`–`6`) a nastavit ikonu.
8. Ulož.

Spustíš ho kliknutím, `Enter`, nebo klávesou jeho slotu. `> restic` ho najde podle názvu i podle textu příkazu. Pravý klik zkopíruje příkaz, otevře úpravu, nebo položku smaže.

`~/.local/bin` je v Omarchy na `PATH` terminálu. Skript uložený tam, se spustitelným bitem, stačí volat jménem souboru:

```bash
install -m 755 ./restic-backup ~/.local/bin/restic-backup
```

Při volbě **Terminál** zůstane okno otevřené, takže skript nepotřebuje vlastní konec ve smyslu „stiskni klávesu“.

## Přidání z terminálu

Před tímhle zápisem Megamenu zavři a potom ho znovu otevři. `--space` a `--category` odpovídají názvům, které v menu vidíš. Stejný příkaz ve stejném prostoru se aktualizuje, druhá kopie se nepřidá.

```bash
python3 ~/.config/omarchy/plugins/gruut.megamenu/scripts/add-command.py \
  --title "Restic Backup" \
  --command restic-backup \
  --space "Home Lab" \
  --category General \
  --run terminal \
  --slot 3
```

`--run background` je běh bez okna. `--slot 0` nechá slot Orbitu prázdný.
