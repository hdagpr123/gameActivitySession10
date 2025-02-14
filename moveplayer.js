function movePlayer(direction) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const validDirections = ['up', 'down', 'left', 'right'];
            if (validDirections.includes(direction)) {
                console.log(`Player moved ${direction}`);
                resolve(`Player moved ${direction}`);
            } else {
                reject(new Error('Invalid direction'));
            }
        }, 1000);
    });
}
movePlayer('up')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });

movePlayer('left')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });

movePlayer('diagonal')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });