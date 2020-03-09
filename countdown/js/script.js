let timeOfday = 'AM'
const numcount = document.getElementById('numcount');

setInterval(() => {

    let date = new Date();
    let hours = addZerotofront(date.getHours());
    let minutes = addZerotofront(date.getMinutes());
    let seconds = addZerotofront(date.getSeconds());


    if (hours > 12) {
        hours = hours - 12;
        timeOfday = "PM"
    }
    
    if (hours === 15 && minutes === 05) {
        numcount.innerHTML = 'Break Time';
    }

    numcount.innerHTML = `${hours}:${minutes}:${seconds} ${timeOfday}`;

}, 1000);


function addZerotofront(number) {
    if (number.toString().length == 1) {
        return number = '0' + number;
    }
    return number;
}
