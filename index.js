function hasTargetSum(array, target) {
  // Write your algorithm here
  for(firstIndex=0; firstIndex<array.length-1; firstIndex++){
    for(secondIndex=firstIndex+1; secondIndex<array.length; secondIndex++){
      if(array[firstIndex]+array[secondIndex]===target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Add your pseudocode here
  input an array of numbers and a target that you want to see if any values in the array added up will sum up to it
  you iterate through the array till the second to last item
  within each iteration, you iterate starting from the next point through every element after it
  you sum the first iteration and the second iteration to see if there is any sum that matches the target
  if not, you return false
*/

/*
  Add written explanation of your solution here
  The code will iterate from each value of the array till the second to last value and once again iterate from the second till last item
  It will add these two values through each iteration to see if they match the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
