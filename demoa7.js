/*有种业务情景，需要用户选定开始和截止日期，默认开始日期今天，截止日期一个月后。
根据理解的不同可以简单点的直接+30天或+1月，也可以是下个月的当天：如5.21一个月后6.21，5.31一个月后6.30。
关于最后一条理解的实现，js没有原生的选取一个月后的api,自己实现咯。
原理一：
将日设为0则会获得上个月最后一天的日期
//计算下个月的天数
var nextMonthDate = new Date(year, month + 2, 0);
这一段代码将月份+2，然后将日设为0就可以得到下个月的最后一天，这样就可以知道下个月有多少天
原理二：
如果今天表示的天大于下个月的天数，那么返回下个月的最后一天，如1月30号返回2月28号
反之返回今天表示的天在下个月所表示的天，如1月12号返回2月12号
如果有需要可以自己将获得的日期减去一天，如1月12号返回2月11号，这一点没有在代码中体现
*/

//获取指定日期的下个月日期

function getNextMonth(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    //计算下个月的天数
    var nextMonthDate = new Date(year, month + 2, 0);
    var nextMonthDays = nextMonthDate.getDate();
    nextMonthDate.setDate(day>nextMonthDays? nextMonthDays:day);
    return nextMonthDate;
}