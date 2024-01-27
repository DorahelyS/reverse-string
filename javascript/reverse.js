
//creating a function that takes in str as a parameter(this will be the word trying to update)
function reverseString(str) {
    //This line declares a variable reversed and initializes it with an empty string. 
    //This variable will be used to store the reversed string.
    let reversed = "";
    //This line starts a for loop. It initializes i to the length of the str minus 1 
    //(because array indices are zero-based) and iterates as long as i is greater than -1. 
    //It decrements i in each iteration. This loop effectively iterates through the 
    //characters of the string str in reverse order.
    for (let i = str.length - 1; i > -1; --i) {
        // Inside the loop, this line appends the character at index i of the string 
        //str to the reversed string. This effectively builds the reversed string character 
        //by character.
      //reversed = reversed + str[i];
      reversed = reversed.concat(str[i])
    }
  
    return reversed;
  }

console.log("before reversing: dorahely");
console.log(reverseString('dorahely'));

// REMEMBER TO WRITE FUNCTIONS 

