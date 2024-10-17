function isSameType(value1, value2) {
    // Convert the input values to numbers if possible
    const num1 = Number(value1);
    const num2 = Number(value2);

    // Check if both are NaN
    if (Number.isNaN(num1) && Number.isNaN(num2)) {
        return true;
    }

    // If one is NaN and the other is not, return false
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        return false;
    }

    // Check if both values have the same type (string, number, etc.)
    if (typeof value1 === typeof value2) {
        return true;
    }

    // Return false for any other cases
    return false;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));