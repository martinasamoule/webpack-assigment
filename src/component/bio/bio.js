import './style.scss';
function component() {
    const element = document.createElement("div");
  
    element.innerHTML = "Hii from body";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());