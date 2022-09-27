let word = 'texto';
let wordArray= word.split('');
console.log(wordArray);

let actualRow = document.querySelector('.row')

wordArray.forEach(() => {
    actualRow.innerHTML += `<input type="text" maxlength="1" class="square">`
})

let squares = document.querySelectorAll('.square')
squares = [...squares]
console.log(squares)