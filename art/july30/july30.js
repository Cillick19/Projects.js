
var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var c = canvas.getContext('2d');

var r1 = Math.random() * 20;
var r2 = Math.random() * 5;




//rectangles

for (var i = 0; i < r1; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var x2 = Math.random() * window.innerWidth;
  var y2 = Math.random() * window.innerHeight;
  var x3 = Math.random() * window.innerWidth;
  var y3 = Math.random() * window.innerHeight;

  c.fillStyle = 'rgba(255, 0, 0, 0.50)';
  c.fillRect(x, y, Math.random()* 100, Math.random() * 100);
  c.fillStyle = 'rgba(255, 255, 0, 0.5)';
  c.fillRect(x2, y2, Math.random()* 100, Math.random() * 100);
  c.fillStyle = 'rgba(0, 0, 255, 0.5)';
  c.fillRect(x3, y3, Math.random()* 100, Math.random() * 100);
}






//line
for(var i = 0; i < r2; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var x2 = Math.random() * window.innerWidth;
  var y2 = Math.random() * window.innerHeight;
  var x3 = Math.random() * window.innerWidth;
  var y3 = Math.random() * window.innerHeight;
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(x2, y2);
  c.lineTo(x3, y3);
  c.strokeStyle = getRandomColor();
  c.stroke();
}

//arc / Circle
for (var i = 0; i < 3; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();

}
