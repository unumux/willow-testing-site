// Theme Swapping
let stylesheetName,
    themeInputs = [
        document.querySelector("#greyRadio"), 
        document.querySelector("#unumRadio"), 
        document.querySelector("#colonialLifeRadio")
    ],
    stylesheetElement = document.querySelector("#stylesheet"),
    bodyElement = document.querySelector("body")

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

// Actions
// click events for radio buttons to change themes
themeInputs.forEach(theme => {
    theme.addEventListener("click", function() {
        stylesheetName = theme.dataset.stylesheet
    
        // for local session
        // setLocalTheme(stylesheetName)
    
        setThemeInSession(stylesheetName)
        matchSessionThemeToRadio(themeInputs, sessionStorage.getItem("selectedTheme")).checked = true

        swapTheme(stylesheetElement, `/willow-testing-site/styles/${stylesheetName}.min.css`)
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
        
    swapTheme(stylesheetElement, `/willow-testing-site/styles/${stylesheetName}.min.css`)
}

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
