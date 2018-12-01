# Shadows of Adam Mod - Harpy Remover

This is a mod for the turn-based RPG [Shadows of Adam](https://store.steampowered.com/app/506510/Shadows_of_Adam).
This mod replaces the Harpy sprite found in the Wind Tower with the Eagle Sprite.

## Installation
1. Copy the `ty-harpy-remover.pak` file in the `dist` folder to your `Patches` folder. The location of your patches folder varies depending on your operating system. See this forum topic for correct locations: https://steamcommunity.com/app/506510/discussions/0/154644787622084571/
2. Run the game! The mod will be applied automatically.
2. If you are running the game with the `ENABLE_DEVELOPER_MODE` flag enabled, you should see `"Harpy Remover" mod installed` in the Console tab.


## Building
This mod is built with the [Shadows of Adam Mod Builder](https://github.com/lTyl/Shadows-of-Adam-Mod-Builder).

To build, run `npm run build`.

**WARNING:** The input file must *always* be named `patch-file.js`. If it is not, the Shadows of Adam MOD API will be unable to read the .pak file and the mod will fail to install.