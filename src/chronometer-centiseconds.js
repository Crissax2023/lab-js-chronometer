class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000);

  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime / 100)%100;

  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100;

    
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2,'00')

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;

  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiSeconds}`;
  }
}
