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
    let l = this.alarmCollection.length;
    if (this.alarmCollection.filter(clock => clock.id != id)) {
      this.alarmCollection = this.alarmCollection.filter(clock => clock.id != id);
	  if (this.alarmCollection.length === l) {
		  console.log('Будильник не найден');
		  return this.alarmCollection;
	  }  
      console.log('Будильник успешно удалён');
	    return this.alarmCollection;
    } 
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
    } this.alarmCollection.forEach(func(clock => clock.time != getCurrentFormattedTime()) { console.log(clock.time); });
  } 

  // start() {
  //   if (this.timerId === null) {
  //     // this.alarmCollection.forEach(checkClock(clock => clock.time === getCurrentFormattedTime()) {this.timerId = clock.func}); 

  //     // this.timerId = this.alarmCollection[0].func;
  //     // console.log(this.timerId);
  //     console.log('Будильник');
  //   }
  // }

}