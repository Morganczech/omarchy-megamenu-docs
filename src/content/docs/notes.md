---
title: Notes
description: Edit plain Markdown files in the Note space, pin them to the top, and open a new one with Ctrl+N.
---

The **Note** space lists notes on the left and edits one on the right. Each note is a plain Markdown file in a folder you choose. The file is not copied into `data.json`. Removing the plugin does not delete it.

![Note space with the note list, a pin on each card, and the editor](/notes.webp)

## Folders

**Folders** in the list header sets two things:

- **Folder for new notes** is the only place a new file is created.
- **Also read these folders** lists `.md` files that are already there, including nested ones. Hidden names are skipped. Nothing new is written in those folders.

## Writing

`Ctrl+N`, or **+ Item** while the Note space is open, starts an empty note after a write folder is set. A first line such as `# Nadpis` stays in the file, and the file is named after that title (`Nadpis.md`).

`Ctrl+S` saves while the editor is focused. Closing the menu saves a note that has text. An empty draft creates no file.

YAML frontmatter at the top of a file is kept and is not shown in the editor. A note that is too large to edit here stays read-only.

**Open in Omawrite**, on the editor or in the note's context menu, edits the same file outside the menu. Coming back reloads a note that has no unsaved text. Unsaved text stays, and a notice says the file changed on disk.

Right-click a note to rename it or move it to the trash. Trash asks first. Cancel leaves the file. Confirm sends it to the system trash, where it can be restored.

## Pin

Each card has a pin icon on the right. Click it and that note stays above the others. The note you pinned last is first. Click the pin again to unpin. The icon takes the card's color while the note is pinned, and it is muted otherwise. It is not a button.

Keys `1`–`6` do not open notes. In other spaces those keys still launch the [Quick Access Orbit](/spaces/). The Note space does not show the orbit strip.

Note categories use the same filter row under the search field as other spaces. Badges stay on the cards.

## Find a note

Typing in any space matches a note's title, file name, or badge. Choosing a match opens it in the Note space. The body of the file is not searched.

## A new note from anywhere

**Super+N** is off until you turn it on. Open the shortcut dialog from the top bar, use the note-shortcut row, and save it. That writes a separate block in `~/.config/hypr/bindings.lua` and opens a new note even when the menu is already open. Inside the Note space, `Ctrl+N` does the same thing without that binding.

## More actions

The top row is the shortcut, **+ Item**, **+ Category**, close, and a chevron. **Page save**, the language, and **Import** are inside the chevron, in every space.
