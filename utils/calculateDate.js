/**
 * 获取指定日期的相对某一天
 */
export function GetDateStr(current,AddDayCount) {
    let dd = new Date(current);
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    let y = dd.getFullYear();
    let m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
    let d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
    return y+"-"+m+"-"+d;
}

/**
 * 获取某一个月最后一天
 */
export function getLastMonthDay(current){
    let dd = new Date(current);
    let year=dd.getFullYear();
    let month=dd.getMonth()+1
    let day = new Date(year,month,0);
    let lastdate = day.getDate() //获取当月最后一天日期
    return year + '-' + month + '-' + (lastdate > 9 ? lastdate : ('0' + lastdate))
}

/**
 *获取几个月前的日期
 *{param:DateTime} date 输入日期(YYYY-MM-DD)
 *{param:number } monthNum 月数
 */
export function GetPreMonthDay(current, monthNum) {
    let dd = new Date(current);
    let year=dd.getFullYear();
    let month=dd.getMonth()+1
    let day = dd.getDay()
    var days = new Date(year, month, 0).getDate(); //获取当前日期中月的天数

    var year2 = year;
    var month2 = parseInt(month) - monthNum;
    if (month2 <= 0) {
        var absM = Math.abs(month2);
        year2 = parseInt(year2) - Math.ceil(absM / 12 == 0 ? 1 : parseInt(absM) / 12);
        month2 = 12 - (absM % 12);
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}

/**
 *获取几个月后的日期
 *{param:DateTime} date 输入日期(YYYY-MM-DD)
 *{param:number } monthNum 月数
 */
export function GetNextMonthDay(current, monthNum) {
    let dd = new Date(current);
    let year=dd.getFullYear();
    let month=dd.getMonth()+1
    let day = dd.getDay()
    var days = new Date(year, month, 0).getDate(); //获取当前日期中月的天数

    var year2 = year;
    var month2 = parseInt(month) + parseInt(monthNum);
    if (month2 > 12) {
        year2 = parseInt(year2) + parseInt((parseInt(month2) / 12 == 0 ? 1 : parseInt(month2) / 12));
        month2 = parseInt(month2) % 12;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }

    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}