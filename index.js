// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(str){
  return drivers.push(str)
}

function destructivelyPrependDriver(str) {
  return drivers.unshift(str)
}
