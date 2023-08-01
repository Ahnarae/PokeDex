import pokedex from './pokedex.json' assert {type: 'json'}
const max = pokedex.length
let current = max
function show() {
    let pokemon = pokedex.find(p => p.id == current)
    const image = document.getElementById("image")
    const url = (current < 100 ? (current < 10 ? "00" : "0") : "") + current
    image.setAttribute("src" , "./assets/images/"  + url + ".png")
    const name = document.getElementById("name")
    name.innerHTML = pokemon.name.english
    const description = document.getElementById("description")
    description.innerHTML = pokemon.type.join('-')
}
function left() {
    current = current - 1
    if (current==0) {
        current=max
    }
    show()
}
function right() {
    current = current + 1
    if (current==(max+1)) {
        current=1
    }
    show()
}
document.body.onload=function () {
    show()
    document.getElementById("buttonLeft").addEventListener("click",left);
    document.getElementById("buttonRight").addEventListener("click",right)
}