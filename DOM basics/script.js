// html structure

// window = global object (top node)
console.log(window) // same as directly typing "window" in the console

/*
document = document object
"document" is equivalent to "window.document"
*/
// console.log(document) // equivalent to console.log(window.document); log() may only show the document
console.dir(document) // dir() shows document properties & methods

// get document properties
console.log(document.characterSet)
console.log(document.contentType)
console.log(document.doctype)
console.log(document.URL)

// get single element by using methods (current way)
console.dir(document.getElementById('main'))

// querySelector() returns only the first match
console.log(document.querySelector('#main')) // similar to getElementById
console.log(document.querySelector('.content')) // by class
const listItem = document.querySelector('li') // returns first li
// console.log('list item: ' + listItem.innerText)
console.log(document.querySelector('#main ul')) // returns a node list

// pseudo selectors
const listItem2 = document.querySelector('li:nth-child(2)') // returns 2nd li
// console.log(listItem2.innerHTML)

// get attribute of single element
const mainContainer = document.getElementById('main')
console.log(mainContainer.id)
console.log(mainContainer.getAttribute('id'))
console.log(mainContainer.className)
console.log(mainContainer.getAttribute('class'))

// get content of single element
console.log(document.getElementById('page-title').innerText)
console.log(document.getElementById('page-title').textContent)

// set attribute of single element
document.getElementById('external-links').id = 'ext-links'
document.getElementById('ext-links').setAttribute('id', 'ext-links2')
// console.log(document.getElementById('ext-links2').id)
document.getElementById('main').className = 'new class'
console.log(document.getElementById('main').getAttribute('class'))

// set content of single element
// document.body.innerHTML = '<h1>No Links</h1>'
// const main = document.getElementById('main')
// main.innerHTML = '<h1>New Header</h1>'
// document.getElementById('page-title').textContent = 'My App' // similar to innerText
document.querySelector('#main h1').innerText = 'Home'

// set style of single element
mainContainer.style.backgroundColor = 'pink'
mainContainer.style.padding = '12px 35px'

// get element by using properties (old way)
console.log(document.documentElement) // returns <html> element
console.dir(document.body)
console.log(document.body.innerHTML) // returns html only
console.log(document.body.innerText) // returns text only
console.log(document.body.children) // returns HTMLCollection of direct children

// get element attributes
console.log(document.querySelector('div').id)

// get all links
console.log(document.links) // returns HTMLCollection

// get/modify HTMLCollection elements/attributes
console.log(document.links[0])
console.log(document.body.children[1])
document.links[1].innerText = 'Reddit!'

// get array of HTMLCollection elements (useful for array methods)
console.log(Array.from(document.links))
