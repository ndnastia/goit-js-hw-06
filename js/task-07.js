const controlEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
controlEl.addEventListener('input', onControl);

function onControl(evt) {
    console.dir(evt.currentTarget.valueAsNumber);
    text.style.fontSize = evt.currentTarget.valueAsNumber + 'px';
    
}

