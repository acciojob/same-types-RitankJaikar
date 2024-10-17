function isSameType(value1, value2) {
	//your js code here'
	const num1 = Number(value1);
	const num2 = Number(value2);
	
	if(isNaN(num1) && isNaN(num2)) {
		return true;
	}

	if(typeof(value1)  === typeof(value2)) {
		return true;
	}

	return false;
}

// do not change the code below.
//let value1 = prompt("Enter Start of the Range.");
//let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
