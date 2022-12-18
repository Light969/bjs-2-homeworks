class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = undefined;
  }
  
  addClock(time, text, id) {
    if (this.alarmCollection.some(id => id === undefined)) {
      throw new Error ('Параметр id не передан');
    } else if (this.alarmCollection.some(id => id === id)) {
      throw new Error ('Будильник с таким id уже присутствует');
    } else {
      this.alarmCollection.push({ time, text });
      this.timerId = id;
      console.log('Новый будильник 1');
    }
  }


}