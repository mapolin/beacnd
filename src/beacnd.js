// @flow

import TTFB from './ttfb'
import TTFMP from './ttfmp'
import TTFI from './ttfi'
import TTFL from './ttfl'

interface Mark {
  TTFB(): TTFB;
  TTFMP(): TTFMP;
  TTFI(): TTFI;
  TTFL(): TTFL;
}

class Beacnd {
  url: string
  send (type: string, data: {}) {
    if (navigator.sendBeacon && this.url) {
      const payload = new Blob([JSON.stringify(data)], { type: 'application/json' })
      return navigator.sendBeacon(this.url, payload)
    } else {
      return 'Beacon is not supported'
    }
  }
}

export default Beacnd