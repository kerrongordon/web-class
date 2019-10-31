/*jshint esversion: 6 */

window.onload=function() { 

const form = document.getElementById('form');

const runForm = (e) => {
    e.preventDefault();
    const formItem = e.target;

    console.log(formItem);

    for (let i = 0; i < formItem.length; i++) {
        const element = formItem[i].value;
        console.log(element);
        data.push(element);        
    }
};

if (form) {
    form.addEventListener('submit', runForm);
}

   
};