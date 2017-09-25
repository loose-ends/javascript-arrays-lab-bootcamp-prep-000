const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
kittens.push(name)
}
function destructivelyPrependKitten(name) {
kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name)  {
kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name) {
kittens.shift(name)
}
function appendKitten(name) {
<<<<<<< HEAD
return [...kittens, name]
}
function prependKitten(name) {
return [name, ...kittens]
}
function removeLastKitten(name) {
return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten() {
return kittens.slice(1)
=======
[...kittens, name]
return kittens
>>>>>>> 6851cc505ecc4c3df72c8218bf6f5bacb720cec9
}
