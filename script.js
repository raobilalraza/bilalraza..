function countVowels() {
    
    const sentence = prompt("Please enter a sentence:");
    
    
    const lowerSentence = sentence.toLowerCase();
    
    
    let vowelCount = 0;

    
    for (let i = 0; i < lowerSentence.length; i++) {
        const char = lowerSentence[i];
        
        
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelCount++;
        }
    }

    alert(`Total number of vowels: ${vowelCount}`);
}
countVowels();
