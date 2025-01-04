const container = document.querySelector('.container');

let startx = 0;
let currentrotation = 0;

const handleDragStart = (event) => {
    startx = event.clientX || event.touches[0].clientX;
};

const handleDragMove = (event) => {
    if (startX === 0) return;

    const currentX = event.clientX || event.touches[0].clientX;
    const deltaX = currentX - startx;

    currentRotation += deltaX + 0.1;
    container.computedStyleMap.transform = 'rotateY(${currentRotation}deg )';
    
    startx = currentX;
};

const handleDragEnd = () => {
    startx = 0;
};

//event listeners

container.addEventListener('mousedown', handleDragStart);
container.addEventListener('mousemove', handleDragMove);
container.addEventListener('mouseup', handleDragEnd);
container.addEventListener('mouseleave', handleDragEnd);

container.addEventListener('mousedown', handleDragStart);
container.addEventListener('mousedown', handleDragStart);
container.addEventListener('mousedown', handleDragStart); 