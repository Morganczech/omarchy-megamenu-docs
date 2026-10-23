---
title: Poznámky
description: V prostoru Note upravuješ obyčejné Markdown soubory, připneš je nahoru a novou založíš přes Ctrl+N.
---

Prostor **Note** má vlevo seznam poznámek a vpravo editor jedné z nich. Každá poznámka je obyčejný Markdown soubor ve složce, kterou si vybereš. Do `data.json` se nekopíruje. Odebrání pluginu soubory nesmaže.

![Prostor Note se seznamem, pinem na kartě a editorem](/notes.webp)

## Složky

**Složky** v hlavičce seznamu nastavují dvě věci:

- **Složka pro nové poznámky** je jediné místo, kam se založí nový soubor.
- **Číst také z těchto složek** vypíše `.md` soubory, které tam už jsou, včetně vnořených. Skryté názvy se přeskakují. Nové soubory se tam nezakládají.

## Psaní

`Ctrl+N`, nebo **+ Položka** v otevřeném prostoru Note, založí prázdnou poznámku, jakmile je nastavená složka pro zápis. První řádek jako `# Nadpis` v souboru zůstane a soubor se pojmenuje podle něj (`Nadpis.md`).

`Ctrl+S` uloží, když je kurzor v editoru. Zavření menu uloží poznámku, která má text. Prázdný koncept soubor nevytvoří.

YAML frontmatter na začátku souboru se zachová a v editoru se neukazuje. Poznámka, která je na úpravu tady příliš velká, zůstane jen ke čtení.

**Otevřít v Omawrite**, v editoru nebo v kontextovém menu poznámky, upraví tentýž soubor mimo menu. Po návratu se poznámka bez neuloženého textu načte znovu. Neuložený text zůstane a hláška řekne, že se soubor na disku změnil.

Pravý klik poznámku přejmenuje nebo ji přesune do koše. Koš se nejdřív zeptá. Zrušení soubor nechá být. Potvrzení ho pošle do systémového koše, odkud jde obnovit.

## Pin

Na kartě vpravo je ikona pinu. Kliknutí nechá poznámku nad ostatními. Naposledy připnutá je první. Další kliknutí pin odebere. Připnutá ikona má barvu karty, nepřipnutá je tlumená. Není to tlačítko.

Klávesy `1`–`6` poznámku neotevřou. V ostatních prostorech pořád spouštějí [Quick Access Orbit](/cs/spaces/). Prostor Note pruh Orbitu neukazuje.

Kategorie poznámek jsou ve stejném filtru pod hledáním jako v ostatních prostorech. Štítky zůstávají na kartách.

## Najít poznámku

Psaní v libovolném prostoru hledá název poznámky, jméno souboru nebo štítek. Výběr shody ji otevře v prostoru Note. Tělo souboru se neprohledává.

## Nová poznámka odkudkoli

**Super+N** je vypnuté, dokud ho nezapneš. Otevři dialog zkratky z horní lišty, použij řádek zkratky poznámky a ulož ho. Do `~/.config/hypr/bindings.lua` se zapíše samostatný blok a nová poznámka se otevře i když menu už běží. Uvnitř prostoru Note totéž udělá `Ctrl+N` bez té vazby.

## Další akce

Horní řada je zkratka, **+ Položka**, **+ Kategorie**, zavření a šipka. **Ukládání stránek**, jazyk a **Import** jsou pod šipkou, v každém prostoru.
