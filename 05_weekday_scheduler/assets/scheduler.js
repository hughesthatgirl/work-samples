const currentDay = document.querySelector('#currentDay');
const hoursList = document.querySelector('#hours');
const hoursArr = ['8','9', '10', '11', '12', '1', '2', '3', '4', '5']

dayjs.extend(window.dayjs_plugin_weekday);
dayjs.extend(window.dayjs_plugin_weekYear);
dayjs.extend(window.dayjs_plugin_weekOfYear);

currentDay.textContent = dayjs().format("MM-DD-YYYY");

const getHour = function(time){
    return dayjs().hour(time);
}

hoursArr.forEach(function(hour, index){
    const item = document.createElement('li');
    item.id = 'hour' + index;
    item.setAttribute('class', 'hour__item');
    item.textContent = getHour(index);
    hoursList.appendChild(item);
});