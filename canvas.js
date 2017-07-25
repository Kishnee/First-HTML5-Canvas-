
/*$$$$$$$$$  FIRST PRACTICE  $$$$$$$$ */


var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//Switzerland Flag
c.fillStyle = 'red';
c.fillRect(100, 50, 400, 200);
c.fillStyle = 'white';
c.fillRect(200, 110, 200, 70);
c.fillStyle = 'white';
c.fillRect(265, 70, 70, 150);


// Mauritius Flag
c.fillStyle = 'red';
c.fillRect(800, 50, 400, 50);
c.fillStyle = 'blue';
c.fillRect(800, 100, 400, 50);
c.fillStyle = 'yellow';
c.fillRect(800, 150, 400, 50);
c.fillStyle = 'green';
c.fillRect(800, 200, 400, 50);




