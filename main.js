let resultElement = document.querySelector('.result')
let mainContainer = document.querySelector('.main-container')
let rowId = 1;

let word = 'texto';
let wordArray= word.toUpperCase().split('');
console.log(wordArray);

let actualRow = document.querySelector('.row')

drawSquares(actualRow);
listenInput(actualRow);

addFocus(actualRow)

function listenInput(actualRow){
    let squares = actualRow.querySelectorAll('.square')
    squares = [...squares];

    let userInput = []

//Por cada elemento squares vamos a escuchar cuando alguien ingrese algo en su input
squares.forEach(element => {
    element.addEventListener('input', event=>{
        //Recoger el ingreso del usuario, este .target.value es una propiedad que pertenece a los input y es como se puede recoger lo que el usuario escribe en el input
        userInput.push(event.target.value.toUpperCase())
        console.log(userInput)
        if(event.target.nextElementSibling){
            event.target.nextElementSibling.focus();
        } else{

            // Cambiar estilos si existe la letra pero no esta en la poscion correcta
           let existIndexArray = existLetter(wordArray, userInput)
           existIndexArray.forEach(element => {
            squares[element].classList.add('gold');
           });

            //Comparar arreglos para cambiar estilos
           let rightIndex = compareArrays(wordArray, userInput)
           //Todos los elementos que tengan el indice correcto le vamos a agregar la clase green
           rightIndex.forEach(element => {
            squares[element].classList.add('green');
           })
           //Si los arreglos son iguales

           if(rightIndex.length == wordArray.length){
            resultElement.innerHTML = `
            <p>Ganaste</p>
            <button class="button">Reiniciar</button>`

            let resetBtn = document.querySelector('.button')

            resetBtn.addEventListener('click', () => {
                location.reload();
            });
            return;
           }

           //Crear una nueva fila
           let actualRow =  createRow()
           drawSquares(actualRow)
           listenInput(actualRow)
           addFocus(actualRow)

        }
    })
})
}


//Functions

//array1 es = wordArray, array2 = userInput
function compareArrays(array1, array2){
let iqualsIndex = []

    array1.forEach((element, index) => {
        if(element == array2[index]){
            console.log(`En la posición ${index} si son iguales`);
            iqualsIndex.push(index);
        } else{
            console.log(`En la posición ${index} NO son iguales`);
        }
    });
    return iqualsIndex;
}

function existLetter(array1, array2){
    let existIndexArray = [];
    array2.forEach((element, index)=>{
        if(array1.includes(element)){
            existIndexArray.push(index)
        }
    });
    return existIndexArray;
}

function createRow(){
    rowId++
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.setAttribute('id', rowId)
    mainContainer.appendChild(newRow)
    return newRow;
}

function drawSquares(actualRow){
    wordArray.forEach((item, index) => {
        if(index === 0){
            actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus">`
        } else{
            actualRow.innerHTML += `<input type="text" maxlength="1" class="square">`
        }
    })
}

function addFocus(actualRow){
    let focusElement = actualRow.querySelector('.focus')
    focusElement.focus();
}