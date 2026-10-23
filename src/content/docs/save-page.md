---
title: Save the current page
description: Save the open browser tab into a Megamenu space with the add-on and the local helper.
---

Saving the open page uses two parts together:

1. The **browser add-on** reads the current tab.
2. The **local helper** writes the bookmark into Megamenu’s `data.json`.

The toolbar button has nothing to write until the helper is registered. The helper has nothing to receive until the add-on is installed.

## Install the add-on

- **Firefox and Zen:** [Omarchy Megamenu on Mozilla Add-ons](https://addons.mozilla.org/firefox/addon/omarchy-megamenu/). Czech listing: [addons.mozilla.org/cs](https://addons.mozilla.org/cs/firefox/addon/omarchy-megamenu/).
- **Temporary load from a checkout:** `about:debugging` → This Firefox → Load Temporary Add-on, and choose `extension/manifest.json`.
- **Chrome, Chromium, or Brave:** `chrome://extensions` → Developer mode → Load unpacked → the `extension/` folder.

The registration below is the one the menu button runs. It is for Firefox and Zen.

## Register the helper

Open Megamenu, open the chevron in the top bar, and click **Page save**. The tooltip still asks you to install the add-on. From a terminal, with the plugin installed:

```bash
python3 ~/.config/omarchy/plugins/gruut.megamenu/scripts/install-browser-host.py --firefox-only
```

From a checkout of the plugin:

```bash
python3 scripts/install-browser-host.py --firefox-only
```

When the button reads **Page save on**, Firefox and Zen can talk to `scripts/native-host.py`.

## Save a tab

The toolbar button shows the page title, then a space and a category. A space named **Seznam čtení** is created for this and is offered first. Saving the same URL into the same space again keeps the bookmark that is already there. Megamenu reads `data.json` the next time it opens, and fetches the favicon then.

![Save to Megamenu popup with the page title, a space, a category, and the Save page button](/save-popup.webp)

## Turn the helper off

```bash
python3 ~/.config/omarchy/plugins/gruut.megamenu/scripts/install-browser-host.py --remove
```

That deletes the host registration. The add-on stays in the browser until you remove it there.
