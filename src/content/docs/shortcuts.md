---
title: Keyboard shortcuts
description: Keys inside Megamenu, and the optional global shortcut that opens it from anywhere.
---

## Inside the menu

| Key | Action |
| --- | --- |
| Type text | Filter bookmarks and commands across all spaces, plus Omarchy actions and apps |
| `>` and a query | Search and launch Omarchy actions, installed applications, and saved commands |
| `1`–`6` | Launch quick-access slot 1–6 when search is empty |
| `Tab` / `Shift+Tab` | Next space / previous space |
| `↑` `↓` `←` `→` | Move between items, or between system apps in `>` mode |
| `Enter` | Launch the selected bookmark, command, or application |
| Right-click / `Alt+M` | Context menu: browser, copy, edit, move, delete |
| `Alt+E` | Edit the selected item |
| `Ctrl+N` | Add a bookmark, command, or local application |
| `Esc` | Close a modal, the context menu, or Megamenu |

You can also open the menu from a terminal:

```bash
omarchy-shell shell toggle gruut.megamenu
```

## Global shortcut

The **Set shortcut** button in the top bar binds a Hyprland shortcut, such as `SUPER + M` or `ALT + SPACE`. Saving it writes an omaplug block into `~/.config/hypr/bindings.lua`. Until you save, Megamenu leaves that file alone.

**Disable shortcut** on the same button removes the binding. Do that before you [remove the plugin](/install/) if a shortcut is still set.
