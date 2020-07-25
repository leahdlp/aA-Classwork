// class Clock {
//   constructor() {
//     // 1. Create a Date object.
//     this.date = new Date();
//     // 2. Store the hours, minutes, and seconds.
//     this.hours = this.date.getHours();
//     this.minutes = this.date.getMinutes();
//     this.seconds = this.date.getSeconds();
    
//     // 3. Call printTime.
//     this.printTime();
//     // 4. Schedule the tick at 1 second intervals.
//     setInterval(this._tick.bind(this), 1000);
//   }

// // setInterval(function() { openUpPage("myURl") }, 20000);

//     printTime() {
//     // Format the time in HH:MM:SS
//     // Use console.log to print it.
//     let secs = this.seconds;
//     let mins = this.minutes;
//     let hours = this.hours;

//     if (this.seconds < 10) {
//         secs = `0${this.seconds}`;
//     } 
//     if (this.minutes < 10) {
//         mins = `0${this.minutes}`;
//     }  
//     if (this.hours < 10) {
//         hours = `0${this.hours}`;
//     }
//     console.log(`${hours}:${mins}:${secs}`);
    
//   }

//   _tick() {
//     // 1. Increment the time by one second.
//     // 2. Call printTime.
//     this.seconds += 1;

//     if (this.seconds === 60) {
//       this.seconds = 0;
//       this.minutes += 1;

//       if (this.minutes === 60) {
//         this.minutes = 0;
//         this.hours += 1;
//       }
//     }

//     this.printTime();
//   }
// }

// const clock = new Clock();
