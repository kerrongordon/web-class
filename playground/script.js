

function openAlert() {
    alert();
}

function openAlertWithText() {
    alert('this is an alert with some text');
}


function alertError(noName) {
    alert(`Plase enter your ${noName} Name`);
}

function enterName(fol) {
    let name = prompt(`What is your ${fol} Name`);
    return name;
}

function doWeHaveAName(name, type) {
    while (name === '') {
        alertError(type);
        name = enterName(type);
    }
    return name;
}

function openPrompt() {
    let firstName = enterName('First').trim();

    firstName = doWeHaveAName(firstName, 'First');

    let LastName = prompt(`Hi ${firstName} What is your last name`).trim();

    LastName = doWeHaveAName(LastName, 'Last');

    const outPutMessage = `Welcome to Simple Javascript class ${firstName} ${LastName}`;

    return document.getElementById('promptOutPut').innerHTML = outPutMessage;
}

