---
title: Shell commands
description: Add a shell command to a category and run it in a terminal or in the background.
---

Megamenu stores the command text in your menu data. A longer script is an ordinary file you save yourself. The menu entry only needs the name or the one-liner.

## Add one from the menu

1. Press `Ctrl+N`, or **+ Item**.
2. Choose **Command**.
3. **Title** is the label in the menu, for example `Restic Backup`.
4. **Command** is what runs. That can be a program already on `PATH`, such as `restic-backup`, or a single line such as `notify-send "Backup finished"`.
5. **Working directory** is optional. Set it when the command has to start inside a project, for example `pnpm dev` in `~/Work/my-app`.
6. Choose how it runs:
   - **Terminal** opens the default Omarchy terminal with `xdg-terminal-exec`, runs the command with `bash -lc`, and waits for a key after it finishes.
   - **Background** runs the same script with no window.
7. Pick a category. You can also pin an orbit slot (`1`–`6`) and set an icon.
8. Save.

Launch it by clicking, with `Enter`, or with its orbit key. `> restic` finds it by title or by the command text. Right-click to copy the command, edit it, or delete it.

`~/.local/bin` is on the terminal `PATH` in Omarchy. A script saved there, with the executable bit set, can be launched by its file name alone:

```bash
install -m 755 ./restic-backup ~/.local/bin/restic-backup
```

The terminal window stays open when **Terminal** is selected, so the script itself does not need a “press a key” ending.

## Add one from the terminal

Close Megamenu before this write, then open it again afterwards. `--space` and `--category` match the names you see in the menu. The same command in the same space is updated instead of added twice.

```bash
python3 ~/.config/omarchy/plugins/gruut.megamenu/scripts/add-command.py \
  --title "Restic Backup" \
  --command restic-backup \
  --space "Home Lab" \
  --category General \
  --run terminal \
  --slot 3
```

`--run background` is the no-window choice. `--slot 0` leaves the orbit pin unset.
