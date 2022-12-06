const changeName = document.querySelector('.name');
const nameInput = document.querySelector('.nameInput');

changeName.onmouseover = () => {
    changeName.textContent = 'Name your Character!';
};

changeName.onmouseout = () => {
    changeName.textContent = 'Name: ???';
};

changeName.onclick = () => {
    changeName.style.display = 'none';
    nameInput.style.display = 'flex';
};

function changeText(element) {
    const nombre = document.querySelector('.nombre');
    if (event.key === "Enter") {
        nameInput.style.display = 'none';
        nombre.style.display = 'flex';
    }
    nombre.innerHTML = element.value;
    
}
