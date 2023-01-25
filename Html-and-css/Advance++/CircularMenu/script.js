
const handlerButton = document.getElementById("handler");
const container = document.getElementById("container");

handlerButton.onclick = () => {
    container.classList.toggle("active");
    handlerButton.classList.toggle("active");
}