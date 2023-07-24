import pokedex from './pokedex.json' assert {type: 'json'}
const max = pokedex.length
let current = 36
function show() {
    let pokemon = pokedex.find(p => p.id == current)
    const screen=document.getElementById("screen")
    const url = (current < 100 ? ( current < 10 ? "00" : "0" ) : "") + current
    screen.innerHTML="<img src='./thumbnails/" + url + ".png' />"
    const name=document.getElementById("name")
    name.innerHTML=pokemon.name.english
    const description=document.getElementById("description")
    description.innerHTML=pokemon.type[0]
}
function modify() {
    const div=document.getElementById("description")
}
show()
mofidy()