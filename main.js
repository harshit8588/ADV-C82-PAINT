mouseEvent = ;

canvas = 
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e){
    radius = document.getElementById(r1).value;
    color = document.getElementById(c1).value;
    width_of_the_line = document.getElementById(w1).value;
    mouseEvent = "mouseDown";
}

function my_mousemove(e){

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        console.log("current positon of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;
        ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , radius , 0 , 2 * Math.PI);
        ctx.stroke();
    }
}