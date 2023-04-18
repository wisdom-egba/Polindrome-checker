'use strict'

const input = document.getElementById('inputText').value

const btn = document.getElementById('submitBtn')

const display = document.querySelector('.display')


const checker = () => {
    const displayDiv = document.querySelector('.display')
    let input = document.getElementById('inputText')
    //collect value from input box
    let polindrome = input.value

    //rearrange input into lowerCase
    const word = polindrome.toLowerCase().replaceAll(' ', '').split('').join('').toString()
    // console.log(word);

    //rearrange and reverse input
    const checkWord =
        polindrome.toLowerCase().replaceAll(' ', '').split('').reverse().join('')

    // let newText = `<div>yes <span>${polindrome}</span> is a polindrome</div>`
    // let con1 = displayDiv.appendChild(newText)
    // console.log(checkWord);

    //Checks if word is equal checkword

    if (word === '') {
        display.textContent = ''
    } else if (word === checkWord) {

        display.textContent = `Yes '${polindrome}' is a Polindrome`
    } else {
        display.textContent = `No '${polindrome}' is not a Polindrome`
    }
    input.value = ''
}

//Check Polindrome button
btn.addEventListener('click', checker)