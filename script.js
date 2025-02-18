// function sum(a,b){
//     return a / b;
// }
// console.log(sum(21,3));

function sumArray(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5]));
