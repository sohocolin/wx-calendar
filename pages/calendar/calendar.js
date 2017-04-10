// pages/calendar/calendar.js

import { 
    getCurrentDate,
    generateDays,
    translateFormateDate,
    nextMonth,
    lastMonth
} from './util'

Page({
  data:{
    date: '2017-05',
    week: ['日','一','二','三','四','五','六'],
    months: [{}]
  },

  onLoad:function(options){
    var currentDate = getCurrentDate()
    this.setData({
      date: currentDate.getYearMonth(),
      dateCN: translateFormateDate(currentDate.getYearMonth()),
      months: generateDays(currentDate.getYearMonth())
    })
  },

  bindPickerChange: function(e) {
    this.setData({
      months: generateDays(e.detail.value),
      date: e.detail.value,
      dateCN: translateFormateDate(e.detail.value)
    })
  },

  bindNextMonth: function() {
    this.setData({
      date: nextMonth(this.data.date),
      dateCN: translateFormateDate(nextMonth(this.data.date)),
      months: generateDays(nextMonth(this.data.date))
    })
  },

  bindLastMonth: function() {
    this.setData({
      date: lastMonth(this.data.date),
      dateCN: translateFormateDate(lastMonth(this.data.date)),
      months: generateDays(lastMonth(this.data.date))
    })
  },

  click: function(e) {
    console.log(e.currentTarget.dataset.item)
  }

})





