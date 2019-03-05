# MOXA Official Design System

> Node: v8.9.0, npm: 5.5.1

Use BrowserSync to serve static html, and use twig to generate html, postCSS as CSS compiler.

## Installation
### Clone the project
Clone the project
Go to project folder
Copy `.env.json.example` , and edit your desired port in it.

### Install
install node modules
```
npm install
```

run gulp
```
gulp
```

### Access
Once you set on the `.env.json` file, where you changed your port or leave it as is for default, you can access your site on:
```
http://localhost:3071/
```

## Template

### PostCSS
- SCSS
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/layout/grid/) - Grid system

### Twig
- [Twig](http://twig.sensiolabs.org/) - Template Engine

### Icon Font
place your `*.svg` files on `src/icons` while gulp is running, or re-run it with `gulp build`.

> **注意：** svg 請確認是 100x100 正方體且已建立外框，高度或是寬度擇一頂邊

## Gulp
### Options
- `gulp` to watch all your files
- `gulp build` when you first clone project, rebuild the project, or when you add some plugins and svg icons.

### Troubleshoot

##### Browsersync related?
install browsersync with
```
npm install -g browser-sync
```
## Git Tab Rules
For example: 

![](https://cl.ly/nQ8Y/Image%202017-10-31%20at%207.01.37%20PM.png)

- a: Milestone - Separate by milestone on gitlab
- b: Big Update in Current Milestone - New page build or big range component build (Exp. Product Single Page - 4 tags)
- c: Update version - Issues, bugs fix or style enhance 

