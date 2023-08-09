/*
This is a random message generator containing three separate data types. 
This program will produce random nonsensical jokes. 
*/

//Array of first part of joke
const jokePartOne = ['Knock knock. Who\'s there? ', 'Why did the ', 'Why don\'t scientists ', 'What did one ocean say to ', 'A priest, a rabbi, and a minister walk into a bar... ']

//Array of second part of joke
const jokePartTwo = ['Lettuce. Lettuce who? ', 'chicken cross the road? ', 'trust atoms? ', 'the other ocean? ', 'The bartender looks up and says ']

//Array of punchline
const jokePunchLine = ['Lettuce in, it\'s cold out here! ', 'To get to the other side! ', 'Because they make up everything. ', 'Nothing, they just waved. ', '"What is this, a joke?" ']

//Function that takes in three arrays for each part of a joke, and generates a random joke
const randomJokes = (partOne, partTwo, partThree) => {
    randNum1 = Math.floor(Math.random() * 5);
    randNum2 = Math.floor(Math.random() * 5);
    randNum3 = Math.floor(Math.random() * 5);
    return (partOne[randNum1] + partTwo[randNum2] + partThree[randNum3]);
}

//Log random joke to the console. 
console.log(randomJokes(jokePartOne, jokePartTwo, jokePunchLine));