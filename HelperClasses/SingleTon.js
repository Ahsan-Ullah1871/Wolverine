import moment from 'moment';
var React = require('react-native');

var {Dimensions,Platform, PixelRatio  } = React;
const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) 
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
export function dateConversionFromTimeStamp(bDate) {
  var ctime = new Date(bDate * 1000);
  let frmt = 'DD-MM-YYYY HH:mm';
  var formatted = moment(ctime).format(frmt);
  return formatted;
}
export function changeDateFormat(bDate, format) {
  var ctime = new Date(bDate);
  var formatted = moment(ctime).format(format);
  return formatted;
}
export function getTimeFormat(bDate) {
  var st = new Date(bDate * 1000);
  let sTime = st.toLocaleTimeString('en-US',{hour12: true, hour: "numeric",minute: "numeric"});
  return sTime;
}
export function getDatesArray() {
  let startDate = new Date();
  var stopDate = new Date();
  stopDate.setDate(stopDate.getDate() + 30);
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
      dateArray.push(new Date (currentDate));
      currentDate = currentDate.addDays(1);
  }
  return dateArray;
}
export function getNextDate(startDate) {
  let  nxtDt = new Date(startDate);;
  nxtDt.setDate(nxtDt.getDate() + 1);
  return nxtDt
}

Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days);
  return dat;
}

export function timeAgo(prevDate){
  const diff = Number(new Date()) - prevDate;
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;
  switch (true) {
      case diff < minute:
          const seconds = Math.round(diff / 1000);
           return `${seconds > 1 ? `${seconds} secs ago` : 'just now'}`
      case diff < hour:
          return Math.round(diff / minute) + ' mins ago';
      case diff < day:
          return Math.round(diff / hour) + ' hrs ago';
      case diff < month:
          return Math.round(diff / day) + ' days ago';
      case diff < year:
          return Math.round(diff / month) + ' mnths ago';
      case diff > year:
          return Math.round(diff / year) + ' years ago';
      default:
          return "";
  }
}
  