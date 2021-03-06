# angular-mapboxgl-directive
AngularJS directive for Mapbox GL

[![NPM version][npm-image]][npm-url]
<!-- [![Bower version][bower-image]][bower-url] -->
[![License][license-image]](LICENSE)

### Installation

NPM
```shell
npm install angular-mapboxgl-directive --save
```

Bower
```shell
bower install angular-mapboxgl-directive --save
```

### Get Started

Include files in your `index.html`:
```html
<script src="angular-mapboxgl-directive.min.js"></script>

<link href="angular-mapboxgl-directive.css" rel="stylesheet" />
```

Add `mapboxgl-directive` module in your AngularJS project:
```javascript
var app = angular.module('YourProject', ['mapboxgl-directive']);
```

### Usage

```html
<mapboxgl></mapboxgl>
```
or
```html
<div mapboxgl></div>
```

### See [Wiki](https://github.com/Naimikan/angular-mapboxgl-directive/wiki) for complete reference.

### Developing
Install dependencies, build the source files and preview

```shell
git clone https://github.com/Naimikan/angular-mapboxgl-directive.git
npm install & bower install
grunt & grunt preview
```

<!-- Urls -->
[npm-image]: https://img.shields.io/npm/v/angular-mapboxgl-directive.svg?style=flat-square
[bower-image]: https://img.shields.io/bower/v/angular-mapboxgl-directive.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/angular-mapboxgl-directive.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/angular-mapboxgl-directive
[bower-url]: https://bower.io/search/?q=angular-mapboxgl-directive
