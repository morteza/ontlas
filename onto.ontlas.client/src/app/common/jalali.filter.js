'use strict';

import JalaliCalendar from './jalali/calendar.js';

class JalaliDateFilter {
  constructor(input, format) {
    //console.log(moment);
    //this.moment = moment();
    this.input = input;
    this.format = format;
    this.calendar = new JalaliCalendar();
    this.months = ["",
      "فروردین", "اردیبهشت", "خرداد",
      "تیر", "مرداد", "شهریور",
      "مهر", "آبان", "آزاد",
      "دی", "بهمن", "اسفند"
    ];
  }

  convert() {
    var inpD = new Date();
    inpD.setTime(this.input);
    var d = inpD.getDay(),
    m = inpD.getMonth(),
    y = inpD.getFullYear(),
    jd = this.calendar.gregorian_to_jd(y,m,d),
    jalD = this.calendar.jd_to_persian(jd);
    var m_fa = this.months[jalD[1]];
    return (jalD[2]) + " " + m_fa + " " + (jalD[0]+1);
  }

  static factory(input, format) {
    let filter = new JalaliDateFilter(input, format);
    return filter.convert();
  }
}

JalaliDateFilter.factory.$inject = [
  'input', 'format'
];

export default JalaliDateFilter;
