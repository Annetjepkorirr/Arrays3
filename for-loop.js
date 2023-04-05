// Write a function that accepts an array of strings and console.logs each element using a for loop.
let names= ["Mary","Jane","Peyer","Amanda","Anita"];
function mention(names){
for (let n =0;n<names.length; n++){ 
    console.log(names[n]);
}
}
mention(names)

// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let num=[30,10,4,7,12];
function numbers(num){
num.forEach((numbers)=>console.log(numbers*2))
}
numbers(num)

// // Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
let nums=[3,7,9,12,5,15];
function place(nums){
for(let r= 0;r<4; r++){
    nums[r]=nums[r]*8
}
nums[nums.length -2]+=5
nums[nums.length -1]+=5
console.log(nums);
}
place(nums)


// //     Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
function identify(arrNum){
   let i=0;
   while(i<arrNum.length){
       console.log(arrNum[i])
       if (i===4) {
           break;
       }
       i++
       
   }
}
identify(arrNum);


// // Write a function that takes in a an array of strings and use a continue statement when the item is at the second index


let fruits= ['apple','plum','banana','strawberries','kiwi']
function categories(fruits){
    for(let f=2;f<fruits.length;f++){
        if(f===2){
            continue;
        }
        console.log({"continue":fruits[f]})
    }
 }
categories(fruits);
