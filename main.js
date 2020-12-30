var canvas=document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")
var color=document.getElementById("coin").value
var lastX,lastY,curX,curY

if(screen.width<992){
    document.getElementById("mycanvas").width=screen.width-70
    document.getElementById("mycanvas").height=screen.height-200
    document.body.style.overflow="hidden"
}




canvas.addEventListener("touchstart",ts)

function ts(e){
    color=document.getElementById("coin").value
    lastX=e.touches[0].clientX-canvas.offsetLeft
    lastY=e.touches[0].clientY-canvas.offsetTop
console.log("Someone should keep their nosy fingers of this phone")
}
canvas.addEventListener("touchmove",tm)
function tm(e){
    curX=e.touches[0].clientX-canvas.offsetLeft
    curY=e.touches[0].clientY-canvas.offsetTop
    
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=3
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(curX,curY)
        ctx.stroke()
    
    lastX=curX
    lastY=curY
}