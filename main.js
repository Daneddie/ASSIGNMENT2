
// ANALYZING AND OPTIMIZING SCOPE: 
//  analyze and optimize the global scope for the following code block:
 
function redGreenBlueCount(arr) {
// The Red, Green and Blue variables have been moved into the function where they are implemented,  
// so as not to bloat the Global scope and take up memory.

  var RED = 0, GREEN = 1, BLUE = 2;
  var counter = new Array(3).fill(0);

  for (var i=0; i < arr.length; i++) {
    var curr = arr[i];
    if (curr == RED) {
      counter[RED]++;
    } else if (curr == GREEN) {
      counter[GREEN]++;
    } else if (curr == BLUE) {
      counter[BLUE]++;
    }    
 
  }
  return counter;
 
 }
 
 redGreenBlueCount([0,1,1,1,2,2,2]); // [1, 3, 3]


