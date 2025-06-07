// html structure

// window = global object (top node)
console.log(window) // same as directly typing "window" in the console

/*
document = document object
"document" is equivalent to "window.document"
*/
// console.log(document) // equivalent to console.log(window.document); log() may only show the document
console.dir(document) // dir() shows document properties & methods

// get element by using methods (current way)
console.dir(document.getElementById('main'))
console.log(document.querySelector('#main ul'))

// get element by using properties (old way)
console.log(document.documentElement) // returns <html> element
console.dir(document.body)
console.log(document.body.innerHTML) // returns html only
console.log(document.body.innerText) // returns text only
console.log(document.body.children) // returns HTMLCollection of direct children

// get element attributes
console.log(document.querySelector('div').id)

// get document properties
console.log(document.characterSet)
console.log(document.contentType)
console.log(document.doctype)
console.log(document.URL)

// modify element html
// document.body.innerHTML = '<h1>No Links</h1>'
// const main = document.getElementById('main')
// main.innerHTML = '<h1>New Header</h1>'
const header = (document.querySelector('#main h1').innerText = 'Home')

// get all links
console.log(document.links) // returns HTMLCollection

// get/modify HTMLCollection elements/attributes
console.log(document.links[0])
console.log(document.body.children[1])
document.links[1].innerText = 'Reddit!'
