// EXERCISE 1

var twoPlusTwo;

function addNumbers(numberA, numberB) {
  return numberA + numberB;
}
var twoPlusTwo = addNumbers(2, 2);

console.log(addNumbers) // 4

// EXERCISE 2

function yell(our_yell_string){
  console.log(our_yell_string.toUpperCase ());
}
yell("test");

function yell10(x){
  console.log (x.repeat (10));
}
yell10 ("test");

// EXERCISE 3
function longest(x, y){
  if(x.length > y.length){
    return x;
  } else {
    return y;
  }
}

console.log longest ("Dana", "Nicole"));

// EXERCISE 4

function isVowel(x){
  if(x==="a"|| x==="e" || x==="i" || x==="o" || x==="u"){
    return true;
  }else if( x==="A || x==="E || x==="I" || x==="O" || x==="U"){
    return true;
  }  
  }
}
