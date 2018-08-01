// Dialog
// declare dialog open, close and content
let openDialogButton = document.querySelector("#openDialogButton")
let closeDialogButton = document.querySelector("#closeDialogButton")
let dialog = document.querySelector("#dialog")

if(openDialogButton) {
    // open the dialog content
    openDialogButton.addEventListener("click", () => dialog.setAttribute("data-dialog-close", "false"))
    
    // close the dialog content
    closeDialogButton.addEventListener("click", () => dialog.setAttribute("data-dialog-close", "true"))
}

// declare complex dialog open, close and content
let openComplexDialogButton = document.querySelector("#openComplexDialogButton")
let closeComplexDialogButton = document.querySelector("#closeComplexDialogButton")
let complexDialog = document.querySelector("#complexDialog")

if(openComplexDialogButton) {
    // open the dialog content
    openComplexDialogButton.addEventListener("click", () => complexDialog.setAttribute("data-dialog-close", "false"))
    
    // close the dialog content
    closeComplexDialogButton.addEventListener("click", () => complexDialog.setAttribute("data-dialog-close", "true"))
}
