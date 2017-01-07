//Functions for DOM
function incrementPressed(){
  document.getElementById("demo").innerHTML = increment();
}

function decrementPressed(){
  document.getElementById("demo").innerHTML = decrement();
}

function resetPressed(){
  document.getElementById("demo").innerHTML = reset();
}

//Counter
const createCounter = () => {
  
  let counter = 0;
  
  return {
    increment : () => {
      counter = counter + 1;
      return counter;
    },
    decrement : () => {
      counter = counter - 1;
      return counter;
    },
    reset : () => counter = 0
  };
}

const counter = createCounter();
const increment = counter.increment;
const decrement = counter.decrement;
const reset = counter.reset;