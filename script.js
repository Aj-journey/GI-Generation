document.getElementById('generationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const generation = identifyGeneration(birthYear);
    const resultElement = document.getElementById('result');
    resultElement.innerText = `You belong to the ${generation} generation.`;
    resultElement.classList.add('bounce-out'); // Apply bounce-in animation

     // Create firecracker elements
     createFirecrackers(resultElement);
    
});


function identifyGeneration(birthYear) {
    if (birthYear >= 1946 && birthYear <= 1964) {
        return "Baby Boomer";
    } else if (birthYear >= 1965 && birthYear <= 1980) {
        return "Generation X";
    } else if (birthYear >= 1981 && birthYear <= 1996) {
        return "Millennial";
    } else if (birthYear >= 1997 && birthYear <= 2012) {
        return "Generation Z";
    } else {
        return "Generation Unknown";
    }
}


function createFirecrackers(container) {
    const numFirecrackers = 3; // Number of firecrackers to create
    for (let i = 0; i < numFirecrackers; i++) {
        const firecracker = document.createElement('div');
        firecracker.classList.add('firecracker');
        container.appendChild(firecracker);
    }
}