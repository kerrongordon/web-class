/*
    This addEventListener waits for the index.html to Load first before 
    running any javascript code.
*/

window.addEventListener('load', () => {

    /*
        Get the Id from the index.html page <canvas id="myCanvas"></canvas>
        you can use getElementById or querySelector to get an Id of the page

        examples -
                    const myCanvas = document.getElementById('myCanvas');
                    const myCanvas = document.querySelector('#myCanvas');
    */

    const myCanvas = document.querySelector('#myCanvas');

    const brush = document.querySelector('#brush');
    const sizeLabel = document.querySelector('#sizeLabel');
    const download = document.querySelector('#download');
    const slider = document.querySelector('.slider');
    const colorPicker = document.querySelector('.colorPicker');



    slider.addEventListener('mousemove', () => {
        sizeLabel.innerHTML = slider.value; 
    })



    // this tells our canvas that we will be using 2d objects 
    const context = myCanvas.getContext('2d');


    let isDrawing = false;



    /*
        This is a function name reSizeMyCanvas 
        it's use to get the width and height of the browser windows 
        and resize the <canvas id="myCanvas"></canvas> on the index.html page 

        example of how to make a function

            function reSizeMyCanvas() {  your code here  }
            const reSizeMyCanvas = () => { your code here }

    */


    const reSizeMyCanvas  = () => {
        myCanvas.height = window.innerHeight;
        myCanvas.width = window.innerWidth;
    }

    reSizeMyCanvas();



    /*
        This addEventListener runs every time we resize the browser window 
        and it calls the function reSizeMyCanvas to set the new window height and width

    */


    // window.addEventListener('resize', reSizeMyCanvas);
    


    const startDrawing = (e) => {
        isDrawing = true;
        draw(e)
    }

    const stopDrawing = () => {
        isDrawing = false;
        context.beginPath();
    }

    const draw = (e) => {
        if (!isDrawing) return;

        context.lineWidth = parseInt(slider.value);
        context.strokeStyle = colorPicker.value;
        context.lineCap = brush.options[brush.selectedIndex].value;        
        
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
        
    }


    myCanvas.addEventListener('mousedown', startDrawing)
    myCanvas.addEventListener('mouseup', stopDrawing)
    myCanvas.addEventListener('mousemove', draw)

    // for touch screen 
    myCanvas.addEventListener('touchstart', startDrawing)
    myCanvas.addEventListener('touchend', stopDrawing)
    myCanvas.addEventListener('touchmove', draw)


    const downloadImage = () => {
        const image = myCanvas.toDataURL('image/png');
        const anchor = document.createElement('a');
        anchor.setAttribute('download', 'Canvas.png');
        anchor.setAttribute('href', image);
        return anchor.click();
    }

    download.addEventListener('click', downloadImage);

});