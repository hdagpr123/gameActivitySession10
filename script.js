function calculateScore(events) {
    return new Promise((resolve) => {
        console.log("Calculating score...");
        setTimeout(() => {
            let score = events.length * 10; // Example scoring logic
            console.log(`Score calculated: ${score}`);
            resolve(score);
        }, 1500);
    });
}