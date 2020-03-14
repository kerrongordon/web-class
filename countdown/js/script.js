let timeOfday = 'AM'
const numcount = document.getElementById('numcount');
// let imgCount = 0;

setInterval(() => {

    let date = new Date();
    let hours = addZerotofront(date.getHours());
    let minutes = addZerotofront(date.getMinutes());
    let seconds = addZerotofront(date.getSeconds());


    if (hours > 12) {
        hours = hours - 12;
        timeOfday = "PM";

        if (hours === 3) {
            numcount.innerHTML = 'Break Time';
        } else {
            numcount.innerHTML = `${hours}:${minutes}:${seconds} ${timeOfday}`;
        }
    } else {

        numcount.innerHTML = `${hours}:${minutes}:${seconds} ${timeOfday}`;
    }


    // imgCount++;

    // let test = 60 / imgCount;

    // document.body.style.backgroundImage = `url('./../img/${imgCount}.jpg')`;
    // console.log(Math.round(test));



}, 1000);


function addZerotofront(number) {
    if (number.toString().length == 1) {
        return number = '0' + number;
    }
    return number;
}