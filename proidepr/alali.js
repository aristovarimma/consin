const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Define a clipping path (example: a circle)
context.beginPath();
context.arc(100, 100, 50, 0, 2 * Math.PI);
context.clip();

// Now draw something that will be clipped within the circle
context.fillStyle = 'blue';
context.fillRect(50, 50, 100, 100);

// End clipping path (optional, but good practice)
context.closePath();
