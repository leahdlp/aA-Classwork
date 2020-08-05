import React from 'react';
// import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.tick = this.tick.bind(this);
        this.intervalId;
    }
    
    tick() {
        
        this.setState( 
            { 
                date: new Date()
            } 
            ) 
            
        }
        
    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000); 
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return ( 
            <div className="clock">
                <h1>Clock</h1>
                <span> 
                <h2>Time:</h2>
                {this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()}
                </span>
            </div> 
        );
    }
}

// Date.prototype.getDay()
// Date.prototype.getDate()
// Date.prototype.getMonth()
// Date.prototype.getFullYear()

export default Clock;




// class Clock {
//     constructor(){
        
//         let dateObj = new Date();
        
//         this.hours = dateObj.getHours();
//         this.minutes = dateObj.getMinutes();
//         this.seconds = dateObj.getSeconds();
        
//         this._tick = this._tick.bind(this)
//         this.printTime();
//         setInterval(this._tick, 1000); 
//     }

//     printTime() { 
//         console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//     }
    
//     _tick() {
//         this.seconds++; 
//         if (this.seconds === 60) {
//             this.seconds = 1; 
//             this.minutes++; 
//             if (this.minutes === 60) { 
//                 this.minutes = 0; 
//                 this.hours++; 
//             }
//         }
//         this.printTime()
//     }
// }

// const timer = new Clock();
