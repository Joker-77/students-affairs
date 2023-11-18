import ar from "date-fns/locale/ar-SA";
import { format } from "date-fns";
export class DateHelper {
  static getDay(day: number) {
    return days[day];
  }

  static getQuarterHourTimes() {
    var quarterHours = ["00", "15", "30", "45"];
    var times = [];
    for (var i = 8; i < 16; i++) {
      for (var j = 0; j < 4; j++) {
        if (i < 10) {
          times.push({
            label: "0" + i + ":" + quarterHours[j],
            value: "0" + i + ":" + quarterHours[j],
          });
        } else
          times.push({
            label: i + ":" + quarterHours[j],
            value: i + ":" + quarterHours[j],
          });
      }
    }
    return times;
  }

  static getTimeOfDay() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = m < 10 ? `0${m}` : m;
    h = h < 10 ? `0${h}` : h;
    return h + ":" + m;
  }

  static getCurrentDate() {
    let str = format(new Date(), "cccc dd-LL-yyyy", { locale: ar });
    return str;
  }

  static getTimeOfSpecificDate(e) {
    return `${e.split("T")[1].split(".")[0].split(":")[0]}:${
      e.split("T")[1].split(".")[0].split(":")[1]
    }`;
  }
  static getArabicDatefromDate(date) {
    let _date = new Date(date);
    let str = format(_date, "cccc dd-LL-yyyy", { locale: ar });
    return str;
  }
}
