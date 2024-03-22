document.getElementById('generationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const generation = identifyGeneration(birthYear);
    document.getElementById('result').innerText = `You belong to the ${generation} generation.`;
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