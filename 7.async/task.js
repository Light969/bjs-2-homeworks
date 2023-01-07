class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, text, id) {
    if (id === undefined) {  
      throw new Error('Параметр id не передан');
    } else if (this.alarmCollection.some(clock => clock.id === id)) {
      console.error('Будильник с таким id уже присутствует');
    } else {
      this.alarmCollection.push({ time, text, id });
      console.log('Новый будильник');
    }
  }

  removeClock(id) {
    debugger;
    if (this.alarmCollection.filter(clock => clock.id != id)) {
      this.alarmCollection = this.alarmCollection.filter(clock => clock.id != id);
      console.log('Будильник успешно удалён');
    } else {
      console.log('Будильник не найден')
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

  // Не работает
  // start() {
  //   if (this.timerId === null) { 
  //     this.alarmCollection.forEach(checkClock(clock => clock.time === getCurrentFormattedTime()) {this.timerId = clock.func}); 
  //   }
  // }

}