"use strict"

// selectors
const boldButton = document.querySelector(".bold-button");
const italicButton = document.querySelector(".italic-button")
const underlineButton = document.querySelector(".underline-button")
const colorButton = document.querySelector(".color-button")

// functions
const textEditor = function(element, formatation) {
    element.addEventListener("click", () => {
        document.execCommand(formatation)
    })
}

const colorEditor = function() {
    colorButton.addEventListener("input", () => {
        document.execCommand("forecolor", false, colorButton.value)
    })
}

// execution
const init = function() {
    textEditor(boldButton, "bold");
    textEditor(italicButton, "italic");
    textEditor(underlineButton, "underline")
    colorEditor()
}

init()
