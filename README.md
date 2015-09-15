# NRK APIs for Node.JS

[![Build status](https://img.shields.io/wercker/ci/55f0586d21e2917016104fd1.svg "Build status")](https://app.wercker.com/project/bykey/7235be533901a41e049d3bdc727ea66b)
[![NPM downloads](https://img.shields.io/npm/dm/nrk.svg "NPM downloads")](https://www.npmjs.com/package/nrk)
[![NPM version](https://img.shields.io/npm/v/nrk.svg "NPM version")](https://www.npmjs.com/package/nrk)
[![Node version](https://img.shields.io/node/v/nrk.svg "Node version")](https://www.npmjs.com/package/nrk)
[![Dependency status](https://img.shields.io/david/Starefossen/node-nrk.svg "Dependency status")](https://david-dm.org/Starefossen/node-nrk)

Node.JS wrapper for various (undocumented) API from the Norwegian Broadcast
Corporation (NRK). Since NRK does not publicly document any of their APIs, this
effort is by analyzing source code of various NRK.no sites, GitHub and other
search engines, as well as analyzing traffic from various NRK applications.

## Requirements

* Node.JS >= v4.0.0
* io.js >= v1.0.0

## Install

```
$ npm install nrk --save
```

## Usage

```js
const nrk = require('nrk');
```

### Environment

* `NRK_TV_API` (default: `https://tv.nrk.no`)
* `NRK_TV_MOBIL` (default: `undefined`)
* `NRK_PS_API` (default: `http://v8.psapi.nrk.no`)

### TV APIs

API endpoints used by https://tv.nrk.no. Some API endpoints documentation can be
found [here](http://v8.psapi.nrk.no/Help).

* `nrk.tv.autocomplete()`
* `nrk.tv.programs()`
* `nrk.tv.program()`
* `nrk.tv.series()`

### TV APIs (mobile)

API endpoints used by the NRK TV app for iOS and Android.

* `nrk.tv.mobil.categories()`
* `nrk.tv.mobil.programs()`
* `nrk.tv.mobil.series()`
* `nrk.tv.mobil.search()`

## Legal

NRK is a registered trademark of the Norwegian Broadcast Corporation which is
not affiliated with this product. Content from NRK APIs may be copyrighted.

## [MIT Licensed](https://github.com/Starefossen/node-nrk/blob/master/LICENSE)
