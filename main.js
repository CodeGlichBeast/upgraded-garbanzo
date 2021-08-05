canvas=document.getElementById("myCanvas");
ctx =canvas.getContext('2d');

car_width=75;
car_height=100;

car_x=5;
car_y=225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function add() {
	background_imgTag = new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src=greencar_image;
}


function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, car_x, car_y, car_width, car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	car_y = car_y - 10
	add()
}

function down()
{
	car_y = car_y + 10
	add()
}

function left()
{
	car_x = car_x - 10
	add()
}

function right()
{
	car_x = car_x + 10
	add()
}
