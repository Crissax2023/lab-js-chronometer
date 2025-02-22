class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {
    // ... your code goes here
    const start = setInterval(() => {

      this.currentTime++

    },1000)

  }

  getMinutes() {
    // ... your code goes here
    const minutes = this.currentTime / 60
    return Math.floor(minutes)

  }

  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime % 60
    return seconds

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

      return value.toString().padStart(2,'0')

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;


  }
}
