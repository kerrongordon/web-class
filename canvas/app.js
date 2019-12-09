window.addEventListener('load', () => {

    let isDrawing = false;

    const brush = document.querySelector('#brush');
    const slider = document.querySelector('.slider');
    const myCanvas = document.querySelector('#myCanvas');
    const download = document.querySelector('#download');
    const sizeLabel = document.querySelector('#sizeLabel');
    const colorPicker = document.querySelector('.colorPicker');
    
    const context = myCanvas.getContext('2d');

    slider.addEventListener('mousemove', () => {
        sizeLabel.innerHTML = slider.value; 
    });

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

    const downloadImage = () => {
        const image = myCanvas.toDataURL('image/png');
        const anchor = document.createElement('a');
        anchor.setAttribute('download', 'Canvas.png');
        anchor.setAttribute('href', image);
        return anchor.click();
    }

    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    // for touch screen 
    myCanvas.addEventListener('touchmove', draw)
    myCanvas.addEventListener('touchend', stopDrawing)
    myCanvas.addEventListener('touchstart', startDrawing)

    // for mouse 
    myCanvas.addEventListener('mousemove', draw)
    myCanvas.addEventListener('mouseup', stopDrawing)
    myCanvas.addEventListener('mousedown', startDrawing)

    // download Image
    download.addEventListener('click', downloadImage);

});