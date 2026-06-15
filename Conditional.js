console.log("if-else statement");
var light = "Green";

if (light == "Green") {
    console.log("Go!");
} 
else if (light == "Yellow") {
    console.log("Slow down!");
} 
else if (light == "Red") {
    console.log("Stop!");
} 
else {
    console.log("Invalid traffic light");
}
console.log("switch statement");
let signal = "Green";

switch (signal) {
    case "Green":
        console.log("Go!");
        break;
    case "Yellow":
        console.log("Slow down!");
        break;
    case "Red":
        console.log("Stop!");
        break;
    default:
        console.log("Invalid traffic light");
}