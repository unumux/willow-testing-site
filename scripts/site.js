let header = document.querySelector(".willow-page-header");
let open = document.querySelector(".willow-page-header__content-open");
let close = document.querySelector(".willow-page-header__content-close");

if(open) {
    open.addEventListener("click", () => header.setAttribute("data-content-open", "true"));
    close.addEventListener("click", () => header.setAttribute("data-content-open", "false"));
}

// declare dialog open, close and content
let openDialogButton = document.querySelector("#openDialogButton");
let closeDialogButton = document.querySelector("#closeDialogButton");
let dialog = document.querySelector(".willow-dialog");

if(openDialogButton) {
    // open the dialog content
    openDialogButton.addEventListener("click", () => dialog.setAttribute("data-dialog-close", "false"));
    
    // close the dialog content
    closeDialogButton.addEventListener("click", () => dialog.setAttribute("data-dialog-close", "true"));
}
    
// declare modal open, close and content
let openModalButton = document.querySelector("#openModalButton");
let closeModalButton = document.querySelector("#closeModalButton");
let closeModalButton2 = document.querySelector("#closeModalButton2");

let modal = document.querySelector(".willow-modal");

if(openModalButton) {
    // opens the modal content
    openModalButton.addEventListener("click", () => modal.setAttribute("data-modal-close", "false"));
    
    // closes the modal content
    closeModalButton.addEventListener("click", () => modal.setAttribute("data-modal-close", "true"));
    closeModalButton2.addEventListener("click", () => modal.setAttribute("data-modal-close", "true"));
}
