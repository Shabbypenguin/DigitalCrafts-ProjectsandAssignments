//Algorithm #1

const wordArr1 = ['dog', 'cat', 'fish', 'mango', 'ping', 'pong']const wordArr2 = ['fish', 'zebra', 'mango', 'khalifa', 'pong']
let combined = []

for (i=0; i<=wordArr1.length; i++){
    if (wordArr2.indexOf(wordArr1[i]) > -1){
        combined.push(wordArr1[i])
    }
}
const wordanswer = `The words that exist in both arrays are:<br> ${combined} `
document.getElementById("stringsSame").innerHTML = wordanswer


//Algorithm #2

const numArr1 = [10, 25, 66, 78, 13, 16, 2, 95, 31]

const max1 = getMax(numArr1)
const filteredTemp1 = removeMax(numArr1, max1)
const max2 = getMax(filteredTemp1)
const result = max1 + max2
const answer = `
    The biggest two numbers from: ${numArr1} added together is<br>
    ${result}`
document.getElementById("BiggerTwoNumbers").innerHTML = answer

//Start algorithm #3
const numArr2 = [10, 43, 64, 13, 12, 1, 67, 81, 51]

const maxnumber1 = getMax(numArr2)
const filteredTemp2 = removeMax(numArr2, maxnumber1)
const maxnumber2 = getMax(filteredTemp2)
const filteredTemp3 = removeMax(filteredTemp2, maxnumber2)
const maxnumber3 = getMax(filteredTemp3)

const result2 = maxnumber1 + maxnumber2 + maxnumber3
const answer2 = `
    The biggest three numbers from: ${numArr2} added together is<br>
    ${result2}`
document.getElementById("biggerThreeNumbers").innerHTML = answer2

//common functions

function getMax(tempArray) {
    let maxNumber = Math.max(...tempArray)
    return maxNumber
}

function removeMax(testArray, maxnumber) {
    let filtered = testArray.filter(function(value, index, arr){ 
        return value != maxnumber;
    })
    return filtered
}