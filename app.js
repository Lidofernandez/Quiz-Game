//Questions part

var questions = [
	new Question("Before Mt. Everest was discovered, what was the highest mountain in the world?", ["Mt. Kilimanjaro", "No mountain"], "No mountain"),
	new Question("Does England have a 4th of July?", ["Yes","No"], "Yes"),
	new Question("What is Rupert the bear's middle name?", ["Bear","The"], "The")
];



//Quiz Creation

var quiz = new Quiz(questions);

//Show Quiz

QuizUI.displayNext()