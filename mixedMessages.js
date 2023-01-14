const messages = {
    signInfo : ['star', 'moon', 'sun', 'comet'],
    fortuneOutput : ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice : ['go out and eat', 'not read this', 'play more', 'trust no one']
}

function randomGenerator (array) {
    return Math.floor(Math.random()* array.length);

}

console.log(`Your sign right now is a "${messages.signInfo[randomGenerator(messages.signInfo)]}".`);
console.log(`You are having: "${messages.fortuneOutput[randomGenerator(messages.fortuneOutput)]}".`);
console.log(`You should: "${messages.advice[randomGenerator(messages.advice)]}".`);

