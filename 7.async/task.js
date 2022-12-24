class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, text, id) {
    if (this.addClock.id === undefined) {
      throw new Error('Параметр id не передан');
    } else {
      this.alarmCollection.push({ time, text, id });
      // this.timerId = id;
      // this.alarmCollection.push({time, text, id});
      console.log('Новый будильник 1');
    }
  }
}