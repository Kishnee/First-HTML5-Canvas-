var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

		//Declaration of all variable
		var x = Math.random() * innerWidth;
		var y = Math.random() * innerHeight;
		var dx = (Math.random() - 0.5) * 8;
		var dy = (Math.random() -0.5) * 8;
		var r = 50;

function animate(){
	requestAnimationFrame(animate)
		                                     //r= radius

		ctx.beginPath();
		//ctx.clearRect(0, 0, innerWidth, innerHeight);       unable comment to make only 1 bouncing ball
		ctx.arc(x, y, r, Math.PI*2, false);
		ctx.fillStyle ='pink';
		ctx.fill();

		if(x + r > innerWidth || x - r < 0){

			dx = -dx;
		}

		if(y + r > innerHeight || y - r < 0){
			dy = -dy;
		}

		x += dx;
		y += dy;
	
}
animate();




