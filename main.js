// const trafficLight = {
//     red: document.getElementById("red"),
//     yellow: document.getElementById("yellow"),
//     green: document.getElementById("green"),
//     intervalId: null,
//     currentColor: null,
  
//     switchToRed() {
//       this.red.classList.add("red");
//       this.yellow.classList.remove("yellow");
//       this.green.classList.remove("green");
//       this.currentColor = "red";
//     },
  
//     switchToYellow() {
//       this.red.classList.remove("red");
//       this.yellow.classList.add("yellow");
//       this.green.classList.remove("green");
//       this.currentColor = "yellow";
//     },
  
//     switchToGreen() {
//       this.red.classList.remove("red");
//       this.yellow.classList.remove("yellow");
//       this.green.classList.add("green");
//       this.currentColor = "green";
//     },
  
//     start() {
//       this.intervalId = setInterval(() => {
//         switch (this.currentColor) {
//           case "red":
//             this.switchToYellow();
//             break;
//           case "yellow":
//             this.switchToGreen();
//             break;
//           case "green":
//             this.switchToRed();
//             break;
//           default:
//             this.switchToRed();
//         }
//       }, 3000);
//     },
//   };
  
//  trafficLight.start();

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
