class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, func, id) {
    if (id === undefined) {  
      throw new Error('Параметр id не передан');
    } else if (this.alarmCollection.some(clock => clock.id === id)) {
      console.error('Будильник с таким id уже присутствует');
    } else {
      this.alarmCollection.push({ time, func, id });
      console.log('Новый будильник');
    }
  }

  removeClock(id) {
    let lengthAlarmClock = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(clock => clock.id != id);
    return this.alarmCollection.length != lengthAlarmClock;
  }

  getCurrentFormattedTime() {
    let now = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit", 
      minute: "2-digit"
    });
    console.log('Текущее время: ' + now);
    return now;
  }

  // start() {
  //   if (this.timerId === null) { 
  //     return console.log('Значение отсутствует');  
  //   } 
  //     this.timerId = setInterval(() => this.alarmCollection.forEach(phoneAlarm.checkClock()), 2000);
  // } 

  // checkClock() {
	//  for (let i = 0; i < this.alarmCollection.length; i++) { 
	// 	if (this.alarmCollection[i].time === phoneAlarm.getCurrentFormattedTime()) {
	// 	    return this.alarmCollection[i].func;  
	// 	}
	//  }
  // }

  start() {
    if (this.timerId === null) {
      return console.log('Значение отсутствует');
    }
    // this.timerId = setInterval(() => this.alarmCollection.forEach(() => this.alarmCollection.time === this.getCurrentFormattedTime() ? this.alarmCollection.func : undefined), 2000);
    this.timerId = setInterval(() => this.alarmCollection.forEach(clock => clock.time === this.getCurrentFormattedTime() ? clock.func() : undefined), 2000);
  }
  

  stop() {
    if (this.timerId != null) {
      clearInterval(this.timerId);
      this.timerId = null;
      }	
    }
    
  printAlarms() {
    this.alarmCollection.forEach(clock => console.log({id: clock.id, time: clock.time}));  
    }
  
  clearAlarms() {
    this.stop(); 
    this.alarmCollection = [];
    }
}