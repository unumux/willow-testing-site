// Theme Swapping
let stylesheetName,
    themeInputs = [
        document.querySelector("#themeOne"), 
        document.querySelector("#themeTwo"), 
        document.querySelector("#themeThree")
    ],
    stylesheetElement = document.querySelector("#stylesheet"),
    bodyElement = document.querySelector("body"),
    introSection = document.querySelector("#demoIntro"),
    introDisplayControl = document.querySelector("#introDisplay"),
    path = "/willow-testing-site/"


// Functions
const swapTheme = (el, theme) => {
    el.href = theme
}

const setThemeInSession = stylesheetName => {
    sessionStorage.setItem("selectedTheme", stylesheetName)
}

const setThemeButtonState = (selectedButton, buttons) => {
    buttons.forEach(button => {
        button.dataset.isActive = "false"
    })

    selectedButton.dataset.isActive = "true"
}

// Actions
// click events for radio buttons to change themes
themeInputs.forEach(theme => {
    theme.addEventListener("click", function() {
        stylesheetName = theme.dataset.stylesheet
    
        setThemeInSession(stylesheetName)
        setThemeButtonState(theme, themeInputs)
        swapTheme(stylesheetElement, `${path}styles/${stylesheetName}.min.css`)
    })
})

document.addEventListener("keypress", (e) => {
    e.preventDefault()
    
    if(event.keyCode == 49) {
        let theme = document.querySelector("#themeOne")
        setThemeInSession("styles")
        setThemeButtonState(theme, themeInputs)
        swapTheme(stylesheetElement, `${path}styles/styles.min.css`)
    }
    
    if(event.keyCode == 50) {
        let theme = document.querySelector("#themeTwo")
        setThemeInSession("unum")
        setThemeButtonState(theme, themeInputs)
        swapTheme(stylesheetElement, `${path}styles/unum.min.css`)
    }
    
    if(event.keyCode == 51) {
        let theme = document.querySelector("#themeThree")
        setThemeInSession("coloniallife")
        setThemeButtonState(theme, themeInputs)
        swapTheme(stylesheetElement, `${path}styles/coloniallife.min.css`)
    }

})

// for initial load of site or when navigating between pages
window.onload = () => {

    if(sessionStorage.getItem("selectedTheme")) {
        stylesheetName = sessionStorage.getItem("selectedTheme")
    } else {
        sessionStorage.setItem("selectedTheme", "styles")
        stylesheetName = sessionStorage.getItem("selectedTheme")
    }
        
    swapTheme(stylesheetElement, `${path}styles/${stylesheetName}.min.css`)
}

introDisplayControl.addEventListener("click", () => {    
    if(sessionStorage.getItem("controlIsOpen") == "true") {
        introSection.dataset.isOpen = sessionStorage.getItem("controlIsOpen")
    } else {
        introSection.dataset.isOpen = sessionStorage.getItem("controlIsOpen")
    }
})