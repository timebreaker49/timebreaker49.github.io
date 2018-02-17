

		var words = ["Final Fantasy", "Halo", "Zelda"];
		var wins = 0;
		var missCount = 0; 	
		var userGuess = [];
		var guessedLetters = [];


		//gets the computer to choose a random word from the array above
			var chosenWord = words[Math.floor(Math.random() * words.length)];
			console.log(chosenWord);
	
		//takes the computer's choice and converts it to an array	
			var choiceToArray = chosenWord.split('');
			console.log(choiceToArray);

		//converts word choice to array
			var wordLength = choiceToArray.length;
			console.log(wordLength);
		//displaying blanks to user
			for (var i = 0; i <= choiceToArray.length; i++) {
				if (choiceToArray[i] === " ") {
					userGuess[i] = " ";
				} else {
					userGuess[i] = " _ ";
				};
				document.querySelector("#blanks").innerHTML = userGuess.join("");
			};	



		document.onkeyup = function(event)	{
		
		// user's input	
			var userGuess = event.key;
			console.log(userGuess);
		//loop where the user input is checked against the chosenWord
	


		//pushes a letter to the above array
			function addLetter (letter) {
				guessedLetters.push (letter)
				console.log("letters guessed: " + guessedLetters)
			};

			addLetter(userGuess);

			document.querySelector("#guessed-letters").innerHTML = guessedLetters;

		//want to replace letter in correct place
			function getAllIndexes(choiceToArray, userGuess) {
				var indexes = [], i = -1;
				while ((i = choiceToArray.indexOf(userGuess, i + 1)) != -1) {
					indexes.push(i);
				}
				return indexes;
			}
			var indexes = getAllIndexes(choiceToArray, userGuess);
			console.log(indexes);



			
			function updateArray (choiceToArray, userGuess) {
				if (choiceToArray.indexOf(userGuess) === -1) {
					choiceToArray.splice(userGuess);
					console.log(choiceToArray) 
					} else if (choiceToArray.indexOf(userGuess) > -1) {
							console.log("nada");
						}
					}
			updateArray(choiceToArray, userGuess);
			
		};
			

			

		/*	for (i = 0; i < choiceToArray.length; i++) {
				if (userGuess === choiceToArray[i]) {
					userGuess.splice(i,1); 
				}
			} */ 



//var audio = new Audio('audio_file.mp3');
//audio.play();


             var html = "<p>Wins: " + wins + "</p>" +
                        "<p>Misses: " + missCount + "<p>" +
                        "<p>Word length: " + chosenWord.length + "</p>";
             
             document.querySelector("#results").innerHTML = html;

