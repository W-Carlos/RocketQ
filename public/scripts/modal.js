export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //funcionalidade de atribuir a classe active para abrir a modal
        modalWrapper.classList.add("active")
    }
    function close(){
        //funcionalidade de remover a classe active e fechar a modal
        modalWrapper.classList.remove("active")
    }

    return {
        open,
        close
    }
}