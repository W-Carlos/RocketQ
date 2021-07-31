import Modal from './modal.js'

const modal = Modal()

// Pegar todos os botões que existe com a class check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    // adicionar a escuta
    button.addEventListener("click", event => {
        // Abrir a modal
        modal.open()
    })
})

// Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", evente => {
        modal.open()
    })
})

