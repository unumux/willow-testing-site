// Modal
// declare modal open, close and content
let openModalButton = document.querySelector("#openModalButton")
let closeModalButton = document.querySelector("#closeModalButton")
let closeModalButton2 = document.querySelector("#closeModalButton2")

let modal = document.querySelector(".willow-modal")

if(openModalButton) {
    // opens the modal content
    openModalButton.addEventListener("click", () => modal.setAttribute("data-modal-close", "false"))
    
    // closes the modal content
    closeModalButton.addEventListener("click", () => modal.setAttribute("data-modal-close", "true"))
    closeModalButton2.addEventListener("click", () => modal.setAttribute("data-modal-close", "true"))
}
