const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Please type in a number: ", (answer) => {
      sum += parseInt(answer);
      console.log(answer);
      numsLeft -= 1;
      return addNumbers(sum, numsLeft, completionCallback);
    });
  } else { 
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
