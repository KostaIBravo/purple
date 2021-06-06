// create an array using literal syntax
/////////////   0       1        2          3
var colors = ["pink", "blue", "orange", "green"];

console.log(colors[0]);
console.log(colors[3]);

// check for how many items are in an array
console.log(colors.length);

// access the last value inside my array
console.log(colors[colors.length - 1]);

// adding a new color like so, will overwrite whatever is at that index
// SHOULD something already be there
console.log("colors before adding red:", colors);
colors[0] = "red";
console.log("colors after adding red:", colors);

// create an array using the array constructor
var arr = new Array(9);
console.log("arr:", arr);
console.log("arr.length", arr.length);
console.log("arr[0]", arr[0]);

var arrWithValues = new Array("muffin", "cupcake", "cookies", "canelés");
console.log("arrWithValue:", arrWithValues);

// ARRAY METHODS
// push & pop
// add a value to our end of the array
colors.push("turquoise", "salmon");
console.log("colors after push:", colors);

// remove the last value of an array
var colorWeJustPopped = colors.pop();
console.log("colors after pop:", colors);
console.log("colorWeJustPopped:", colorWeJustPopped);

// unshift & shift
// .unshift() to add a value to the beginning of an array:
colors.unshift("black");
console.log("colors after unshift:", colors);
console.log(colors[colors.length - 1]);

// .shift() removing and returning the first value inside of an array
console.log("colors before shift:", colors);
var colorWeJustShifted = colors.shift();
console.log("colors after shift", colors);
console.log("colorWeJustShifted:", colorWeJustShifted);

// .splice()
// mutates (changes) our original array
// first argument passed to splice: what index do we want to start splicing at
// second argument: how many should we splice out IF not specified everything
// will be taken out from that point forward
// OPTIONAL third argument, what to put in its place
console.log("colors before splicing", colors);
var removed = colors.splice(1, 2, "two items missing");
console.log("value of removed:", removed);
console.log("colors after splicing", colors);

// .slice()
// DOES NOT mutate/change our original array
// first argument we can optionally pass to slice defines where to(at what index) start
// copying values at
// second argument defines at what index to stop the copy
// no third argument

var colorsCopy = colors.slice();
colorsCopy.unshift("hotpink");
console.log("colors:", colors);
console.log("colorsCopy:", colorsCopy);

var myColors = colors.slice(1, 3);
console.log("colors:", colors);
console.log("myColors:", myColors);

// filter our array values
// to leave original array untouched and filter out values that match a certain condition
var pinkAndBlue = colors.filter(function (color) {
    return color === "blue" || color === "pink";
});

console.log("pinkAndBlue:", pinkAndBlue);
console.log("colors:", colors);

// loop over all our array values
for (var i = 0; i < colors.length; i++) {
    console.log("color value is:", colors[i]);
}

// reverse to reverse all values in our array BUT careful this mutates
console.log("colors before reverse", colors);
colors.reverse();
console.log("colors after reverse:", colors);
