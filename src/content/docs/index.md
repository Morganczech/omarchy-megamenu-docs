---
title: Introduction
description: A theme-aware menu for Omarchy with spaces, a six-slot orbit, live columns, and saved commands.
---

Omarchy Megamenu is a menu and bar widget for [Omarchy](https://omarchy.org/). It keeps links, feeds, apps, and shell commands on this computer, and it follows the active Omarchy theme.

![Megamenu with the Frequent strip, six orbit slots, and category columns](/megamenu.webp)

Open it from the Megamenu icon in the bar, or from a terminal:

```bash
omarchy-shell shell toggle gruut.megamenu
```

## What you can keep in it

- **Spaces** for separate sets of links, feeds, and apps. Switch with `Tab` and `Shift+Tab`.
- **Quick Access Orbit**, six pins per space, launched with `1` through `6`.
- **Columns** that are a static list, an RSS or Atom feed, or a GitHub repository.
- **Search** across spaces, Omarchy actions, and installed applications. A query that starts with `>` opens the full actions view.
- **Shell commands** that run in a terminal or in the background.
- **Bookmark import** from installed browsers, and a browser add-on that saves the tab you have open.

Bookmarks, categories, and commands stay in `~/.local/share/omarchy-megamenu/data.json`. The language control in the top bar cycles Auto, EN, and CS.

[Install it](/install/) with one command. Saving the tab you are reading is the step with two parts: the [add-on and the local helper](/save-page/).

Source: [github.com/Morganczech/omarchy-megamenu](https://github.com/Morganczech/omarchy-megamenu). Firefox and Zen: [Omarchy Megamenu on Mozilla Add-ons](https://addons.mozilla.org/firefox/addon/omarchy-megamenu/).
