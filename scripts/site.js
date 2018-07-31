// Mobile Menu
let header = document.querySelector(".willow-page-header")
let open = document.querySelector(".willow-page-header__content-open")
let close = document.querySelector(".willow-page-header__content-close")

if(open) {
    open.addEventListener("click", () => header.setAttribute("data-content-open", "true"))
    close.addEventListener("click", () => header.setAttribute("data-content-open", "false"))
}

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

// Theme Swapping
let stylesheetName,
    themeInputs = [
        document.querySelector("#greyRadio"), 
        document.querySelector("#unumRadio"), 
        document.querySelector("#colonialLifeRadio")
    ],
    stylesheetElement = document.querySelector("#stylesheet"),
    bodyElement = document.querySelector("body")

themeInputs.forEach(theme => { 
    theme.addEventListener("click", function() {
        stylesheetName = theme.dataset.stylesheet
    
        // for local session
        // setLocalTheme(stylesheetName)
    
        setThemeInSession(stylesheetName)
        matchSessionThemeToRadio(themeInputs, sessionStorage.getItem("selectedTheme")).checked = true

        startLoading(bodyElement)

        if(bodyElement.dataset.subpage !== null) {
            swapTheme(stylesheetElement, `../styles/${stylesheetName}.min.css`)
            setTimeout(function() { stopLoading(bodyElement) }, 500)
        } else {
            swapTheme(stylesheetElement, `styles/${stylesheetName}.min.css`)
            setTimeout(function() { stopLoading(bodyElement) }, 500)
        }
    })
})

window.onload = () => {
    startLoading(bodyElement)

    // for local session
    // stylesheetName = localStorage.getItem("selectedTheme")

    if(sessionStorage.getItem("selectedTheme")) {
        stylesheetName = sessionStorage.getItem("selectedTheme")
        matchSessionThemeToRadio(themeInputs, sessionStorage.getItem("selectedTheme")).checked = true
    } else {
        sessionStorage.setItem("selectedTheme", "styles")
        stylesheetName = sessionStorage.getItem("selectedTheme")
        matchSessionThemeToRadio(themeInputs, sessionStorage.getItem("selectedTheme")).checked = true
    }
        
    if(bodyElement.dataset.subpage !== null) {
        swapTheme(stylesheetElement, `../styles/${stylesheetName}.min.css`)
        stopLoading(bodyElement)
    } else {
        swapTheme(stylesheetElement, `styles/${stylesheetName}.min.css`)
        stopLoading(bodyElement)
    }
}

const swapTheme = (el, theme) => {
    el.href = theme
}

const stopLoading = (el) => {
    el.dataset.loading = false
}

const startLoading = (el) => {
    el.dataset.loading = true;
}

const setThemeInSession = stylesheetName => {
    sessionStorage.setItem("selectedTheme", stylesheetName)
}

const matchSessionThemeToRadio = (inputs, sessionStorageTheme) => inputs.find(
    input => input.dataset.stylesheet == sessionStorageTheme
)

// Local Storage Setting
//probably want session storage over local storage - so if a user closes their browser and reopens the demo site they will see the greyscale/starting theme first
// const setLocalTheme = stylesheetName => {
//     localStorage.setItem("selectedTheme", stylesheetName)
// }

// const matchLocalToRadio = (inputs, localstorageTheme) => inputs.find(
//     input => input.dataset.stylesheet == localstorageTheme
// )

// matchLocalToRadio(themeInputs, localStorage.getItem("selectedTheme")).checked = true
