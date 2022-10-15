let resultElement = document.querySelector('.result')

let word = 'texto';
let wordArray= word.toUpperCase().split('');
console.log(wordArray);

let actualRow = document.querySelector('.row')

wordArray.forEach((item, index) => {
    if(index === 0){
        actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus">`
    } else{
        actualRow.innerHTML += `<input type="text" maxlength="1" class="square">`
    }
})

let focusElement = document.querySelector('.focus')
focusElement.focus();

let squares = document.querySelectorAll('.square')
squares = [...squares]

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
            <button class="button">Reiniciar</button>
            `
           }

/*            let resetBtn = document.querySelector('.button')

            resetBtn.addEventListener('click', () => {
                location.reload();
            }); */

           // Crear una nueva linea

        }
    })
})

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