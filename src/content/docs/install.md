---
title: Install and remove
description: Add Omarchy Megamenu with the plugin command, update it, move the bar icon, and remove it.
---

Megamenu needs Omarchy 4.x (quickshell, Hyprland, and the `omarchy` CLI).

## Install

```bash
omarchy plugin add https://github.com/Morganczech/omarchy-megamenu --enable
```

The bar icon opens the menu. You can also bind a global shortcut later from the **Set shortcut** button. That write to `~/.config/hypr/bindings.lua` happens only after you save a shortcut.

## Update and move

```bash
omarchy plugin update gruut.megamenu
omarchy bar move gruut.megamenu --section left
```

`--section` accepts the bar section you want the icon in.

## Remove

If a global shortcut is set, turn it off first with the shortcut button (**Disable shortcut**).

```bash
omarchy plugin remove gruut.megamenu
```

### Manual removal

```bash
rm -rf ~/.config/omarchy/plugins/gruut.megamenu
```

Then remove `"gruut.megamenu"` from `~/.config/omarchy/shell.json`. If you saved a shortcut, also remove the `-- omaplug-shortcut-start: gruut.megamenu` block from `~/.config/hypr/bindings.lua`. Finish with:

```bash
omarchy restart shell
```

Your menu data stays in `~/.local/share/omarchy-megamenu/data.json`. Removing the plugin leaves that file in place.

## What Omarchy already provides

- `python3` for bookmark import, the shortcut helper, and the browser save host
- `curl` for favicons, cached in `~/.local/share/omarchy-megamenu/favicons/`
- `wl-copy` for copying a URL, desktop id, or command
- `xdg-open` and `gtk-launch` for URLs and `.desktop` applications
- `xdg-terminal-exec` for saved commands that open a terminal
