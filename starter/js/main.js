/*jshint esversion: 8 */

window.onload = function() { 

const form = document.getElementById('form');

    const runForm = (e) => {
        e.preventDefault();
        const formItem = e.target;

        // console.log(e);
        console.log(formItem);

        for (let i = 0; i < formItem.length; i++) {
            const element = formItem[i].value;
            console.log(element);
            // data.push(element);        
        }
    };

    if (form) {
        form.addEventListener('submit', runForm);
    }


    // use a API on the about page 

    const page = document.getElementById('aboutPage');


    async function runApp() {
        const res = await fetch('https://official-joke-api.appspot.com/jokes/ten');
        const data = await res.json();

        const test = data.map(loadAll);

        function cardItem(e) {
            const card = document.createElement('div');
            const header = document.createElement('h4');
            const p = document.createElement('p');

            card.classList.add('card');
            header.innerHTML = 'Joke';

            p.innerHTML = e.setup;

            card.appendChild(header);
            card.appendChild(p);
            page.appendChild(card);
        }
        
        function loadAll(e) {
            console.log(e);
            cardItem(e);
        }

    }

    if (page) {
        runApp();
    }

   
};