// setting up variables to store targets
const numBank = document.getElementById("numBank")
let numBankArr=[]
const odds = document.getElementById("odds")
const evens = document.getElementById("evens")


// get number from input, add to number bank
// document.addEventListener
function addNumber(num, event){
    event.preventDefault()
    console.log(num)
    //add number to arry 
    numBankArr.push(num)
    //update html numBank element withj new arry 
    numBank.innerHTML=numBankArr.join(", ")
} 



    // EDGE case, make sure its a number!!
// make function that takes in a number and decides if even or odd (sort)
    // sort, take 1 number and sort (removing it from the bank)
    // when working and you have a promt try to break it down to attack it one part at a time 
let oddsArr=[]
let evensArr=[]

function sort1(){
let firstNum = numBankArr.shift()
if(firstNum % 2 == 0){
    evensArr.push(firstNum)
}else{
    oddsArr.push(firstNum)
}
numBank.innerHTML=numBankArr.join(", ")
odds.innerHTML=oddsArr.join(", ")
evens.innerHTML=evensArr.join(", ")
}



function sortAll() {
while (numBankArr.length >0) {
    sort1();
}
  }
  

