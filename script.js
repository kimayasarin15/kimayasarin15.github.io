let modalButton = document.querySelector('.modal-button')
let modalDialog = document.querySelector('.modal-dialog')
let closeButton = modalDialog.querySelector('.close-button')

modalButton.addEventListener('click', () => {
    modalDialog.showModal()
})

closeButton.addEventListener('click', () => {
    modalDialog.close()
})

document.addEventListener('click', (event) => {
    if (event.target.tagName === 'DIALOG') {
        event.target.close()
    }
})