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
  // removeClock(id) {
  //   if (this.alarmCollection.filter(clock => clock.id === id)) {
  //     console.log('Звонок успешно удалён');
  //     return this.alarmCollection.splice(clock.id, 1)[0];
  //   }
  //     console.log('Звонок не найден')
  // }

  removeClock(id) {
    for (let i = 0; i < this.alarmCollection.length; i++) {
      if (this.alarmCollection[i].id === id) {
        console.log('Будильник успешно удалён');
        return this.alarmCollection.splice(i, 1)[0]; 
      }
    }
    console.log('Будильник не найден')
  }

  getCurrentFormattedTime() {
    let now = new Date();
    let nowHours = String(now.getHours());
    let nowMinutes = String(now.getMinutes());
    let timeNow = nowHours + ':' + nowMinutes;
    return console.log('Текущее время: ' + timeNow);
  }

  // start() {
  //   checkClock() {
  //      for (let i = 0; i < this.alarmCollection.length; i++) {
  //       if (this.alarmCollection[i].time === timeNow) {
  //         return this.alarmCollection[i].text;
  //       }
  //     }
  //   }
  // }
}