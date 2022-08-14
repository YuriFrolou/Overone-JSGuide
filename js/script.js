let flower = "rose";

// switch...case
switch (flower) {
    case "rose":
        console.log("Roses are red");
        break;
    case "violet":
        console.log("Violets are blue");
        break;
    case "sunflower":
        console.log("Sunflowers are yellow");
        break;
    default:
        console.log("Please select another flower");
}

// if...else
if (flower === "rose") {
    console.log("Roses are red");
} else if (flower === "violet") {
    console.log("Violets are blue");
} else if (flower === "sunflower") {
    console.log("Sunflowers are yellow");
} else {
    console.log("Please select another flower");
}

const userNumber = +prompt("Введите число от 1 до 10 включительно");
switch (userNumber) {
    case 3:
    case 8:
        console.log('You won!');
        break;
    default:
        console.log('You lose!');
}