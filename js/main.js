//problem 1
var studentName = {name: 'Michael', age: 27};

function getStudentName(obj) {
  return obj.name;
  }
  console.log(getStudentName(studentName));


//problem 2
var stringArray = ['javascript', 'is', 'not', 'python'];

function getTotalLetters(array) {
  var newString = array.join();
  var result = newString.replace(/[,_]/g, "");
  return result.length;
}
console.log(getTotalLetters(stringArray));


//problem 3
function createObject(name1, name2) {
  var obj = {};
  obj[name1] = name2;
  return obj;
}
console.log(createObject('city', 'Boulder'));


//problem 4
var letterArray = ['a', 'b', 'c', 'd', 'e'];

function getNegativeIndex(array, num) {
  return array[array.length + num];
}
console.log(getNegativeIndex(letterArray, -3));


//problem 5
function removeCharacter(str, character) {
  var result = str.split(character).join('');
  return result;
}
console.log(removeCharacter('javascript', 'a'));


//problem 6
var ages = {john: 10, jerry: 11, jenny: 12 };

function outputObject(obj) {
  var newKeyArray = Object.keys(obj);
  var str = "";
  for (var i = 0; i < newKeyArray.length; i++) {
    str += newKeyArray[i] + " is " + obj[newKeyArray[i]] + ", ";
  }
  return str;
  // for (var key in obj){
  //   return(key + "is" + obj[key]);
  //   }

}
console.log(outputObject(ages));


//problem 7
function getVowels(str) {
  var newStr = '';
  var sep = '';
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if(str.indexOf(vowels[i]) >= 0) {
      newStr += sep + "'" + vowels[i] + "'";
      sep = ', ';
    }
  }
  return "[" + newStr + "]";
}
console.log(getVowels('javascripting'));


//problem 8
function captureTwins (array) {
  for (var i = 0; i < array.length; i += 2) {
    if(array[i] !== array[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(captureTwins(['m', 'm', 'n', 'n', 's', 's']));


//problem 9
function testBooleanLogic (array) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] === true) {
      return true;
    }
  }
  return false;
}
console.log(testBooleanLogic([false, false, false, false]));


//problem 10
function getUniqueValues (array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if(result.indexOf(array[i]) < 0) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(getUniqueValues(['m', 'n', 'm', 'r', 'r', 's']));
