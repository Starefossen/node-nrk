# node-nrk

Node.JS wrapper for various (undocumented) API from the Norwegian Broadcast
Corporation (NRK). Since NRK does not publicly document any of their APIs, this
effort is by analyzing source code of various NRK.no sites, GitHub and other
serarch engines, as well as analysing traffic from various NRK applications.

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
