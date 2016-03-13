/* First Task */
function isInt(x) {
 return x % 1 === 0;
}

function isPositive(x) {
  return x > 0 ;
}

function pow(base, exponent) {
 var result = 1;
 if (!isPositive(exponent) || !isInt(exponent)) {
  result = -1;
} else {
  for (var i = 0; i < exponent; i++) {
   result *= base;
 } 
}
return result;
}

function firstTaskMain() {
 console.log('Task 1 execute result:'); 
 var base = prompt("Enter base.", "");
 var exponent = prompt("Enter exponent. Please, avoid floating and negative numbers.", "");
 var result = pow(base, exponent);
 if (result == -1) {
  alert("Unacceptable input! Please, try again.");
  console.log("Failed");
} else {  
  console.log("Result = ", result);
}
}
/* Second Task */
function fillArray() {
 var arrNames = [];
 for (var i = 0; i < 5; i++) {
  arrNames.push(prompt("Enter name.", ""));
}
return arrNames;
}

function secondTaskMain() {
 console.log('Task 2 execute result:');
 var arrNames = fillArray(); 
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
