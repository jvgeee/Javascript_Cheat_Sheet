//Javascript Cheat Sheet

// FETCHING

	// Get an element my ID
	document.getElementById("elementID");
	
	// Gets tags and puts them in an array
	var whatever = document.getElementsByTagName("img");
	
		// As this is an array, we can use a selector, like:
		var currentImage = document.getElementsByTagName("img")[0];
		// This gets the first image in the array storing the 'img' tags in the document
	
	// Gets the img elements that are children of #elementID and puts them in an array (even if only 1, it'll be in position 0)
	var whatever = document.getElementById("elementID"); whatever.getElementsByTagName("img"); 
	
	// Changes the class of an element to ".newclass"
	document.getElementById("changeThisElement").className = "newClass";
	
	// Changes element's style
	document.getElementById("changeThisElement").style.color = "green";
	
	// If style code has 2 words (e.g. background-color) use camel case (=> backgroundColour). Never use hyphens, as this means "minus". If we want to clear a style, we do:
	document.getElementById("changeThisElement").style.color = "";
	
	
	
	
// IF / ELSE
	
	if (statement in here returns true){} else{};
	
	// The most important thing to remember is that IF only runs if the () statement returns true. || and && are tricky here, and can never use =. Saying if(a=b) will always return true, as this sets a to the value of b. a==b compares the two.
	
	
	
	
	