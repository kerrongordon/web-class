document.addEventListener('DOMContentLoaded', function() {


    // getToDayDate();

});

const max = 508;
const min = 0;
let count = 100;
const shape = document.getElementById('shape');

setInterval(() => {
    shape.setAttribute('stroke-dashoffset', count = count + 8.4);
    console.log(count);

    if (count >= max) {
        count = 100;
    }

}, 1000);