export function getTime(date: any) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date(date);
    return (months[now.getMonth()] + ' ' + now.getDate() + ',' + now.getFullYear());
}


