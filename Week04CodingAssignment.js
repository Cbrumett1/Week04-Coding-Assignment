console.log ('Question 1:') 
var ages = [3, 9, 23, 64, 2, 8, 28, 93] // An array called ages is created containing seven indexes. 
console.log (ages);

console.log ('Question 1a:')
var last = ages[ages.length -1] // this calls the last index in the array.
var first = ages[ages.length - ages.length] // this calls the first index in the array.
var diff = last - first // this variable calculates the difference of the last index minus the first index.
console.log (`The difference between the first and last element is: ${diff}`);

console.log ('Question 1b:')
var ages = [3, 9, 23, 64, 2, 8, 28, 93]
ages.push (50) // Adding a new age to the array. This number will be pushed to the end of the array. 
console.log (ages)
// Repeat step 1 to find the difference between the first index and the last. 
var last = ages[ages.length -1] // this calls the last index in the array.
var first = ages[ages.length - ages.length] // this calls the first index in the array.
var diff = last - first // this variable calculates the difference of the last index minus the first index.
console.log (`The difference between the first and last element is: ${diff}`);
// The array is confirmed to be dynamic and works for arrays of diffenent lengths. 

console.log ('Question 1c:')
var ages = [3, 9, 23, 64, 2, 8, 28, 93]
ages.push (50) // Pushing a new age to the end of the array. 
var sum = 0, avg = 0.0
for (let i = 0; i < ages.length; i++) { // Using a for loop from 0 to length of the array. 
    sum = sum + ages[i] // this will add each age to the sum. 
}
avg = sum / ages.length // calculates average age of all ages that were inputted in the array. 
console.log (`The average age of elements is: ${avg}`);

console.log ('Question 2:')
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"] // A new array is formed consisting of these names. 
console.log (names);

console.log ('Question 2a:')
sum = 0
for (let i = 0; i < names.length; i++) {
    sum = sum + names[i].length //calculates the sum of total characters in the array. 
}
console.log (`The average letter per name in the names array is: ${sum/names.length}`); //calculates total characters
//in the array by the length of the array

console.log ('Question 2b:')
var con = names[0] 
var s = " "
for (i = 0; i < names.length; i++) {
    s += names[i]
}
console.log (names.join(' ')) //This will join the elements of the array together separated by a space in between each name.

console.log ('Question 3:')
console.log ("You can access the last element of any array by typing the respective array - 1")

console.log ('Question 4:')
console.log ("You can access the first element of any array by typing the respective array.length - array.length")

console.log ('Question 5:')
// Storing lengths of names in the nameLengths array 
var names = ["Kelly", "Sam", "Kate"]
var nameLengths = [names]
for (i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length //replaces the names in the array with the total characters of each name in
    //the array
}
console.log (nameLengths);

console.log ('Question 6:')
// Calculating sum of elements in the array
sum = 0
for (i = 0; i <nameLengths.length; i++) {
    sum = sum + nameLengths[i]
}
console.log (`The sum of all elements in the namelengths array is: ${sum}`);

console.log ("Question 7:");
//function to concatenate same word for (n) times. 
function concat_n_times (word, n) {
    var con = word;
    for (i = 1; i <= n; i++) {
        con = con.concat(word)
    }
return con;
}
console.log (`Concatenated words: ${concat_n_times("Hello", 2)}`); //This will concatenate the word "Hello" 
//two more times after the original Hello. 

console.log ("Question 8:")
function fullName(firstName, lastName) {
    return firstName.concat(" ", lastName)
}
console.log (`Full name is: ${fullName("Cody", "Brumett")}`);

//Function to check if the total sum of the elements in the array are greater than 100.
console.log ("Question 9:")
function isTotalGreaterThan100(array) {
    sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    if (sum > 100) {
        return true;
    }
    else {
        return false; 
    }
}

//Function to calculate the average of the elements in the array. 
console.log ("Question 10:")
function average(array) {
    sum = 0
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    return (sum / array.length)
}

//function to compare the two arrays and check to see if the average of the first array is greater than the second
//array. 
console.log ('Question 11:')
function compare_average(array1, array2) {
    if (average(array1) > average(array2)) {
        return true;
    } else {
        return false; 
    }
}

//Declaring and initializing two new array.
var myArray = [16, 69, 53, 2, 17]
var myArray2 = [38, 82, 91, 14] 

console.log (`Is the total sum of the elements greater than 100? ${isTotalGreaterThan100(myArray)}`);
console.log (`The average of the elements in the array is: ${average(myArray)}`);
console.log (`Is the average of the first array greater than the average of the second array? ${compare_average(myArray, myArray2)}`);

console.log ('Question 12:')
//Funtion willBuyDrink

function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside) && (moneyInPocket > 10.50)) {
        return true;
    } else {
        return false; 
    }
}
// Value initilization 
var isHotOutside = true
var moneyInPocket = 15.95
// Printing return value of function willBuyDrink
console.log (`Drink will be bought: ${willBuyDrink(isHotOutside, moneyInPocket)}`);

//My own function to compare the cost of Mizuno JPX 921 irons to TaylorMade P790 irons and print which set is cheaper.
console.log ('Question 13:')

var mizunoJpx921 = 874.95
var taylorMadeP790 = 1300.00
function golfEquipmentIronsCost (mizunoJpx921, taylorMadeP790) {
    if (mizunoJpx921 > taylorMadeP790) {
        return (taylorMadeP790) 
    } else {
        return (mizunoJpx921)
    }
}
console.log (golfEquipmentIronsCost(mizunoJpx921, taylorMadeP790))