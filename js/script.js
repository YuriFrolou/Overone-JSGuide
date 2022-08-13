const color = 'yellow';

//Конструкция if...else
if (color === 'red') {
    console.log('Stop!');
} else if (color === 'yellow') {
    console.log('Get ready!');
} else if (color === 'green') {
    console.log('Go!');
} else {
    console.log('Incorrect color');
}

// Тернарный оператор
(color === 'red') ? console.log('Stop!') :
    (color === 'yellow') ? console.log('Get ready!') :
        (color === 'green') ? console.log('Go!') : console.log('Incorrect color');

// Конструкция switch..case
switch (color) {
    case 'red':
        console.log('Stop!');
        break;
    case 'yellow':
        console.log('Get ready!');
        break;
    case 'green':
        console.log('Go!');
        break;
    default:
        console.log('Incorrect color');
}