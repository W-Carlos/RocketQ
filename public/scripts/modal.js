export default function Modal(){
    function open(){
        //funcionalidade de atribuir a classe active para abrir a modal
        document.querySelector('.modal-wrapper').classList.add("active")
    }
    function close(){
        //funcionalidade de remover a classe active e fechar a modal
    }

    return {
        open,
        close
    }
}