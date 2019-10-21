
window.onload=function() { 

const submit = document.getElementById('submit');
const hero = document.getElementById('hero');

    if (submit) {
        submit.addEventListener('click', function(even) {
            even.preventDefault()
        });
    }


    if (hero) {
        console.log(hero);
        
        hero.addEventListener('mousemove', function(even){
            console.log('x ', even.screenX / 10 );
            console.log('y ', even.screenY / 10 );

            hero.style.backgroundPosition = `0px ${-even.screenY / 10}px`
        })
    }
};