// ACCESSING CONTENT
// let element = document.getElementById('chicken');
// let elementTwo = document.querySelector('#chicken')
// console.log(element.innerText);
// console.log(elementTwo.tagName);
let bodyElement = document.querySelector('body')
let btn = document.querySelector('button');

// let listItems = document.getElementsByClassName('list-item')
// console.log(listItems)
// let listItem = document.querySelector('.list-item')
// console.log(listItem)
// let listItemsTwo = document.querySelectorAll('.list-item')
// console.log(listItemsTwo)

// CREATING ELEMENTS
let paragraph = document.createElement('p');
paragraph.innerText = "DOM Manipulation"
paragraph.style = "color:green; border: 2px solid orange; text-align:center; padding:5px;"
console.log(paragraph)

// Add paragraph to body element
bodyElement.appendChild(paragraph)

// Delete content
// bodyElement.removeChild(paragraph)
// paragraph.remove()

// Add an event listener to the element
btn.addEventListener('click', ()=>{
    bodyElement.style = "background-color: yellow;"
})

