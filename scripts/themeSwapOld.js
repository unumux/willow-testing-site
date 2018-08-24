// Theme Swapping
let stylesheetName,
    themeInputs = [
        document.querySelector("#greyRadio"), 
        document.querySelector("#unumRadio"), 
        document.querySelector("#colonialLifeRadio")
    ],
    stylesheetElement = document.querySelector("#stylesheet"),
    bodyElement = document.querySelector("body"),
    section = document.querySelector("#section"),
    sectionControl = document.querySelector("#sectionControl");


// Functions
const swapTheme = (el, theme) => {
    el.href = theme
}

const setThemeInSession = stylesheetName => {
    sessionStorage.setItem("selectedTheme", stylesheetName)
}

const matchSessionThemeToRadio = (inputs, sessionStorageTheme) => inputs.find(
    input => input.dataset.stylesheet == sessionStorageTheme
)

const setControlStateInSession = state => {
    sessionStorage.setItem("controlIsOpen", state)
}

const setControlInnerHTML = text => {
    sectionControl.innerHTML = text
}

// Actions
// click events for radio buttons to change themes
themeInputs.forEach(theme => {
    theme.addEventListener("click", function() {
        stylesheetName = theme.dataset.stylesheet
    
        // for local session
        // setLocalTheme(stylesheetName)
    
        setThemeInSession(stylesheetName)
        matchSessionThemeToRadio(themeInputs, sessionStorage.getItem("selectedTheme")).checked = true

        swapTheme(stylesheetElement, `/styles/${stylesheetName}.min.css`)
    })
})

// for initial load of site or when navigating between pages
window.onload = () => {
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
        
    swapTheme(stylesheetElement, `/styles/${stylesheetName}.min.css`)

    // set session storage for the theme controls being open or closed
    if(!sessionStorage.getItem("controlIsOpen")) {
        setControlStateInSession(false);
    }
    
    if(sessionStorage.getItem("controlIsOpen") == "false") {
        section.dataset.isOpen = false
        setControlInnerHTML("Show Theme Controls")
    } else {
        section.dataset.isOpen = true
        setControlInnerHTML("Hide Theme Controls")
    }
}
console.log(sessionStorage)
// Local Storage Setting
// using sessionStorage instead for now
// leaving localStorage code here in case we decide to switch back
// const setLocalTheme = stylesheetName => {
//     localStorage.setItem("selectedTheme", stylesheetName)
// }

// const matchLocalToRadio = (inputs, localstorageTheme) => inputs.find(
//     input => input.dataset.stylesheet == localstorageTheme
// )

// matchLocalToRadio(themeInputs, localStorage.getItem("selectedTheme")).checked = true


document.querySelector("#sectionControl").addEventListener("click", () => {    
    if(sessionStorage.getItem("controlIsOpen") == "true") {
        setControlInnerHTML("Show Theme Controls")
        setControlStateInSession(false)
        section.dataset.isOpen = sessionStorage.getItem("controlIsOpen")
    } else {
        setControlInnerHTML("Hide Theme Controls")
        setControlStateInSession(true)
        section.dataset.isOpen = sessionStorage.getItem("controlIsOpen")
    }
})
