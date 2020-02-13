let timer = 60;
const numcount = document.getElementById('numcount');

setInterval(() => {

    let date = new Date();
    let hours = addZerotofront(date.getHours());
    let minutes = addZerotofront(date.getMinutes());
    let seconds = addZerotofront(date.getSeconds());

    numcount.innerHTML = `${hours}:${minutes}:${seconds}`;

}, 1000);



function addZerotofront(number) {
    if (number.toString().length == 1) {
        return number = '0' + number;
    }
    return number;
}