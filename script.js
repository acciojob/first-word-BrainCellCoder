function firstWord(s) {
  // your code here
	const sArray = s.split(" ");
	return sArray[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s))
