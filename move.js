 var context;
    var x=100;
    var y=200;
    var dx=5;
    var dy=5;
    
    function init()
    {
      context= myCanvas.getContext('2d');
      setInterval(draw,10);
    }
    
    function draw()
    {
      context.clearRect(0,0, 800,500);
      context.beginPath();
      context.fillStyle="red";
      // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
      context.rect(x, y, 50, 50);
      context.closePath();
      context.fill();
      // Boundary Logic
    if( x<0 || x>750) dx=-dx; 
    if( y<0 || y>450) dy=-dy; 
    x+=dx; 
    y+=dy;
    }