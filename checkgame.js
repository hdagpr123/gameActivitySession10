function checkGameOver(GameOver) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (GameOver) {
                console.log("Game over!");
                resolve("Game over!");
            } else {
                console.log("Continue playing...");
                resolve("Continue playing...");
            }
        }, 1000); 
    });
}