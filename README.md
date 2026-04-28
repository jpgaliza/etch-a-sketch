# Etch-a-Sketch

A small browser-based Etch-a-Sketch project built with HTML, CSS, and vanilla JavaScript.

## Overview

This project renders a square drawing grid where each cell changes color when you move the mouse over it. You can also create a new grid with a custom size, from 1 to 100 squares per side.

## Features

- Interactive drawing with mouse hover
- Custom grid size prompt
- Automatic grid rebuild when a new size is selected
- Responsive board that stays inside the visible container

## How to use

1. Open `index.html` in a browser.
2. Move the mouse over the grid to draw.
3. Click `New Grid` to choose a new grid size.
4. Enter a number between 1 and 100.

## Files

- `index.html` - Page structure
- `style.css` - Layout and visual styling
- `script.js` - Grid creation and interaction logic

## Notes

The grid is built dynamically with JavaScript, and the board size is controlled with CSS Grid so each new layout stays aligned correctly.
