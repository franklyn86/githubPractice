/*

Avery is at it again.

The group is placing bets on how many times she's going to say the same word.

Write a function that takes a word, and the amount of times she's going to say
that word as a variable.

*/

function stuttering(word, times) {
	var str = "";
	for (var i = 0; i < times; i++) {
		if(i>0) str += " "; 
		str += word; 
	}

	return str;
}

console.log(stuttering('Hi ', 5))
// outputs Hi Hi Hi Hi Hi 
console.log(stuttering('Javascript ', 2))
// outputs Javascript Javascript
