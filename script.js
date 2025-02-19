// function sum(a,b){
//     return a / b;
// }
// console.log(sum(21,3));

function sumArray(arr){
     let sum = 0;
     for(let i= 0;i<arr.length; i++){
        sum = sum + arr[i];
     }
     return sum;
}
// console.log(sumArray([1,2,3,4,5]));
// Create a function that receives an array and returns the greatest value inside that array
function findMax(arr){
    let max = arr[0] 
    for( let i= 1; i<arr.length;i++){
        if(arr[i]>max){
            max= arr[i]
        }
    }
    return max;
}
console.log(findMax([3,22,5,7,9]));
// Create a function that receives an array and returns the smallest number from that array

function findSmallest(arr){
    let smallest = arr[0];
    for(let i =1;i<=5;i++){
        if(arr[i]<smallest){
            smallest = arr[i];
        }
    }
 return smallest
} console.log(findSmallest([3,22,5,7,9]))
// Create a function that receives an array of numbers and returns the average of the numbers
function getAverage(arr){

    let sum = 0;
    for( let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    
    return sum/arr.length;
}
console.log(getAverage([10,20,30,40,50]));



function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]); // Add each element from the end to the new array
    }
    return reversed;
}

// Example usage:
var array = [1, 3, 4, 3, 7, 8, 0, 12, 19];
var reversedArray = reverseArray(array);
console.log(reversedArray); // Output: [19, 12, 0, 8, 7, 3, 4, 3, 1]
function countCharacters(str){
    const stringWithoutSpaces = str.replace
    return stringWithoutSpaces.length;
}
const characterCount =countCharacters("11");
console.log(`The number of characters is ${characterCount}`);


// Create a function that displays an even number between 1 and 100

function displayEvenNumbers(){
    for(let i=2;i<=100;i+=2){
        console.log(i);
        
    }
}
displayEvenNumbers();
//Write a function that calculates the square of a number.
function squareNumber(num){
 return num*num;
}
console.log(squareNumber(5));
// Write a function that checks if a number is even.
function isEven(num){
    return num%2==0;
}
console.log(isEven(7));
// Write a function that checks if a number is odd
function isOdd(num){
    return num%2 !==0;
}
console.log(isOdd(7));
// Write a function that returns the maximum of two numbers.
function maxOfTwo(a,b){
    return Math.max(a,b);
}
console.log(maxOfTwo(9,50));
// Write a function that returns the minimum of two numbers.
function minOfTwo(a,b){
    return Math.min(a,b);
}
console.log(minOfTwo(9,50));
// Write a function that calculates the perimeter of a rectangle.
function calculatePerimeter(length,width){
 return 2*(length+width);
}
console.log(calculatePerimeter(4,5));
//Array Sum:
// Write a function that calculates the sum of all elements in an array.

// Even Numbers:
// Create a program that prints all even numbers from an array.

// Array Reverse:
// Implement a function to reverse the elements of an array.

// Array Filter:
// 1
function arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Example usage:
console.log(arraySum([1, 2, 3, 4, 5])); 


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); 

// 2
function printEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example usage:
console.log(printEvenNumbers([1, 2, 3, 4, 5, 6])); //


// 3

function reverseArray(arr) {
    return arr.reverse();
}

// Example usage:
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
// 4
function filterNumbers(arr, threshold) {
    return arr.filter(num => num > threshold);
}

// Example usage:
console.log(filterNumbers([5, 10, 15, 20, 25], 10)); // Output: [15, 20, 25]


// a)write  average function that show score of student
// b)write and modify student who get more score
// c)discuss function that is being declared

// a) Write an average function that shows the score of students
// for i perfer the first way ;

function calculateAverage(scores){
    let sum = 0;
    for( let i=0;i<scores.length;i++){
        sum = sum + scores[i];
    }
    
    return sum/scores.length;
}

console.log(calculateAverage([85,90,78,88,92]));


// function calculateAverage(scores) {
//     let total = scores.reduce((sum, score) => sum + score, 0);
//     return total / scores.length;
// }





// b) Write and Modify a Function to Find Students with the Highest Score
function getTopScorers(students) {
    let maxScore = Math.max(...students.map(student => student.score));
    return students.filter(student => student.score === maxScore);
}
// c) Discussing the Function Declaration
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 88 },
    { name: "David", score: 92 }
];

// console.log(" Average Score:", calculateAverage(students.map(s => s.score)));

console.log("Top Scorers:", getTopScorers(students));











// create function include condition and loop   
    //   a)write code of function that show admin and users  
//  b)use function and object showing user                            
    //    c) modify that function that declare users  
        //    d)discuss that function that declare user                                                                                                                          e)advantage of using function using filter,map,sort



// // a) Function that shows admin and users
// function showUsers(users) {
//     for (let user of users) {
//         if (user.role === "admin") {
//             console.log(`Admin: ${user.name}`);
//         } else {
//             console.log(`User: ${user.name}`);
//         }
//     }
// }
// // b) Using function and object to show users
// const usersList = [
//     { name: "Alice", role: "admin" },
//     { name: "Bob", role: "user" },
//     { name: "Charlie", role: "user" }
// ];

// showUsers(usersList);
// // // c) Modify the function to declare users
// function declareUsers(users) {
//     return users.map(user => {
//         return `${user.name} is a ${user.role}`;
//     });
// }

// console.log(declareUsers(usersList));
// // // d) Discussion of the function
// // // The declareUsers function takes an array of users.
// // // It uses map() to transform each user object into a string that describes the user.
// // // This makes it more readable and reusable.



// // // e) Advantages of using functions with filter, map, and sort
// // // filter
// const admins = usersList.filter(user => user.role === "admin");
// console.log(admins);
// // // map
// const userNames = usersList.map(user => user.name);
// console.log(userNames);
// // // sort
// const sortedUsers = usersList.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortedUsers);



    // another way
//     🔹 Showing Users:
// Admin: Alice
// User: Charlie
// User: Bob

// 🔹 Declaring Users:
// ['Alice is a admin', 'Charlie is a user', 'Bob is a user']

// 🔹 Filtering Admins:
// [{ name: 'Alice', role: 'admin', age: 25 }]

// 🔹 Sorting Users Alphabetically:
// [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]

// 🔹 Sorting Users by Age:
// [{ name: 'Bob', age: 22 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]




// create function include condition and loop   
    //   a)write code of function that show admin and users  
//  b)use function and object showing user                            
    //    c) modify that function that declare users  
        //    d)discuss that function that declare user                                                                                                                          e)advantage of using function using filter,map,sort
function showUsers(users){
    for(let user of users){
        if(user.role ==="admin"){
console.log(`admin : ${user.name}`);

        }else {
            console.log(`user:${user.name}`);

        }
           
            
     
    }
}
//  b)use function and object showing user  
const usersList = [
    {
        name:"sonia",
        role:"admin"
    }
];
showUsers(usersList);
// c) Modify the function to declare users
function declareUsers( users){
    return users.map(user=>{return `${user.name} is a ${user.role}`});
}
console.log({});
