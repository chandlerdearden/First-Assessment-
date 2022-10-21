///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE


// Create for loop running length of array
// Create Variable called totalAcres
// Add all acres together by day
// reassign totalAcres variable 


let totalAcres = 0
 
for (i = 0; i < fujiAcres.length; i++) {
    totalAcres = fujiAcres[i] + galaAcres[i] + pinkAcres[i] + totalAcres 
}
console.log(totalAcres)
// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE



// create new variable
// take totalAcres and divide by 7
// log new variable

let averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres)



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// Create While loop
// acresLeft >= 0
// take acresleft and substract averageDailyAcres
// increase days by one ++

 while ( acresLeft >= 0) {
    acresLeft -= averageDailyAcres
    days ++
 }
console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE


// set up empy arrays
// created new variable to push to the arrays
// multiply index by 6.5 to get tons and set to new variable
// repeat for each orchard
// log new arrays

let fujiTons = []
let galaTons = []
let pinkTons = []
let dailyTons = 0

for (i = 0; i < fujiAcres.length; i++) {
     dailyTons = fujiAcres[i] * 6.5
     fujiTons.push(dailyTons)
     dailyTons = galaAcres[i] * 6.5
     galaTons.push(dailyTons)
    dailyTons = pinkAcres[i] * 6.5
    pinkTons.push(dailyTons)
}
// console.log(fujiTons)
// console.log(galaTons)
// console.log(pinkTons)


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 


// set variales to 0
// run for loop to add each index together
// outside of loop multiply total Tons by 2000 to get lbs
// log total pounds

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0 

for (let i = 0; i < fujiTons.length; i++) {
    fujiPounds = fujiTons[i] + fujiPounds
    galaPounds = galaTons[i] +  galaPounds
    pinkPounds = pinkTons[i] + pinkPounds
}
fujiPounds = fujiPounds * 2000
galaPounds = galaPounds * 2000
pinkPounds = pinkPounds * 2000
console.log(fujiPounds, " lbs")
console.log(galaPounds, " lbs")
console.log(pinkPounds, " lbs") 






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
// create new variables for each orchard
// times the total pounds by price
// log profits

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log('$',fujiProfit)
console.log('$',galaProfit)
console.log('$',pinkProfit)







// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// create new variable
// set it equal to all profits added together


 let totalProfit = fujiProfit + galaProfit + pinkProfit

 console.log('Total $',totalProfit)