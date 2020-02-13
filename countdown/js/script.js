let timer = 60;
const numcount = document.getElementById('numcount');

setInterval(() => {

    numcount.innerHTML = timer = timer - 1;

    if (timer <= 0) {
        timer = 60;
    }

}, 1000);