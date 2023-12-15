let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count++
    countEl.innerHTML = count
}

function save() {
    countstr = count + " - "
    saveEl.innerHTML += countstr
    countEl.innerHTML = 0
    count = 0
}