function isSameType(value1, value2) {
	// Convert prompt input to actual numbers if applicable
	const num1 = parseFloat(value1);
	const num2 = parseFloat(value2);
	
	// Check if both are NaN
	if (Number.isNaN(num1) && Number.isNaN(num2)) {
		return true;
	}

	// Check if both are numbers after conversion
	if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
		return true;
	}

	// Otherwise, check if both values have the same type (as strings, objects, etc.)
	if (typeof value1 === typeof value2) {
		return true;
	}
	
	// Return false if none of the above conditions are met
	return false;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
