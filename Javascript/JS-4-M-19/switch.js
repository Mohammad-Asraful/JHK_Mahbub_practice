var color = "yellow";
if (color == "blue") {
    console.log("color is blue")
} else if (color == "red") {
    console.log("Color is red")
} else if (color == "green") {
    console.log("color is green")
} else if (color == "white") {
    console.log("Color is white")
} else if (color == "megenta") {
    console.log("color is megenta")
} else if (color == "yellow") {
    console.log("color is yellow")
} else {
    console.log("color is black")
}


// switch case
var color = "green";
switch (color) {
    case "blue":
        console.log("color is blue")
        break;
    case "red":
        console.log("color is red")
        break;
    case "white":
        console.log("color is white")
        break;
    case "green":
        console.log("color is green")
        break;
    case "yellow":
        console.log("color is yellow")
        break;

    default:
        console.log("color is black")
        break;
}


// // // exercise
var numbers = 05;
switch (numbers) {
    case 1:
        console.log(`Today is Saturday`);
        break;
    case 2:
        console.log(`Today is Sunday`);
        break;
    case 3:
        console.log(`Today is Monday`)
        break;
    case 4:
        console.log(`Today is Tuesday`);
        break;
    case 5:
        console.log(`Today is Wednessday`);
        break;
    case 6:
        console.log(`Today is Thursday`);
        break;
    case 7:
        console.log(`Today is Friday`);
        break;

    default:
        console.log(`Invalid day.`)
        break;
}