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
    let L = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(clock => clock.id != id);
	  return this.alarmCollection.length != L;
  }

  getCurrentFormattedTime() {
    let now = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit", 
      minute: "2-digit"
    });
    console.log('Текущее время: ' + now);
    return now;
  }

  start() {
    if (this.timerId === null) { 
      return console.log('Значение отсутствует');  
    } this.timerId = setInterval(() => this.alarmCollection.forEach(phoneAlarm.checkClock()), 2000);
  } 

  checkClock() {
	  for (let i = 0; i < this.alarmCollection.length; i++) { 
		if (this.alarmCollection[i].time === phoneAlarm.getCurrentFormattedTime()) {
		    return this.alarmCollection[i].func;  
		}
	  }
  }

  // Пока не получилось реализовать стрелочную функцию 
  //checkClock = () => this.alarmCollection[i].time === phoneAlarm.getCurrentFormattedTime() ? this.alarmCollection[i].func : undefined;

}