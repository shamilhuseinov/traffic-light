let color = "red"
const circle1= document.getElementById('first-circle')
const circle2= document.getElementById('second-circle')
const circle3= document.getElementById('third-circle')

function changeToRed(){
    circle1.classList.add('circle-1')
    circle2.classList.remove('circle-2')
    circle3.classList.remove('circle-3')
    color="yellow"
}

function changeToYellow(){
    circle1.classList.remove('circle-1')
    circle2.classList.add('circle-2')
    circle3.classList.remove('circle-3')
    color="green"
}

function changeToGreen(){
    circle1.classList.remove('circle-1')
    circle2.classList.remove('circle-2')
    circle3.classList.add('circle-3')
    color="red"
}

setInterval(()=>{
    switch(color){
        case "red":
            changeToRed();
            break;
        case "yellow":
            changeToYellow();
            break;
        case "green":
            changeToGreen();
            break;
        default:
            changeToRed();
    }
},3000)
