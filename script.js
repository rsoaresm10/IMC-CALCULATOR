import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'
import { notANumber , calculateIMC } from './utils.js'

//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



//3 maneiras de atribuir função a um evento

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
    
    if(weightOrHeightIsNotANumber) {
        AlertError.open()
    return;
    }

    AlertError.close()

    

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}


form.oninput = event => {
if (event)
AlertError.close()
}
function displayResultMessage (result) {
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message
   
    Modal.open()
}

