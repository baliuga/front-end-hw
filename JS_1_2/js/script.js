function isInt(x) {
 return x % 1 === 0;
}

function pow() {
 console.log('Task 1 execute result:');
 var result = 1;
 var base = prompt("Enter base.", "");
 var exponent = prompt("Enter exponent. Please, avoid floating and negative numbers.", "");
 if (exponent < 0 || !isInt(exponent)) {
  alert("Unacceptable input! Please, try again.");
  console.log("Failed");
 } else {
  for (var i = 0; i < exponent; i++) {
   result *= base;
  }
  console.log("Result = ", result);
 }
}

function authorization() {
 console.log('Task 2 execute result:');
 var arrNames = [];
 for (var i = 0; i < 5; i++) {
  arrNames.push(prompt("Enter name.", ""));
 }
 var userName = prompt("Please, enter YOUR name.", "");
 var flag = false;
 for (var i = 0; i < arrNames.length; i++) {
  if (arrNames[i] == userName) {
   alert(userName + ", you are logged in successfully!");
   console.log("Authorization succeed");
   flag = true;
   break;
  }
 }
 if (!flag) {
  alert("Oops, you are not in the list!");
  console.log("Authorization failed");
 }
}