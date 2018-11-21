class Beacnd {
  send(type, data) {
    if (navigator.sendBeacon && this.url) {
      const payload = new Blob([JSON.stringify(data)], { type: 'application/json' });
      return navigator.sendBeacon(this.url, payload);
    } else {
      return 'Beacon is not supported';
    }
  }
}

export default Beacnd;