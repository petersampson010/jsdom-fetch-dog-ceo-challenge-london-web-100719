console.log('%c HI', 'color: firebrick')

function fetchImage() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
     .then(resp => resp.json())
     .then(results => {results.message.forEach(json => addImage(json))
    })
}

function addImage(json) {
    let dogImages = document.querySelector('#dog-image-container')
    let image = document.createElement('img')
    image.src = json
    dogImages.appendChild(image)
}

document.addEventListener("DOMContentLoaded", function() {
    fetchImage()
    fetchBreed()
})

function fetchBreed() {
    fetch("https://dog.ceo/api/breeds/list/all")
     .then(resp => resp.json())
     .then(results => {
         breeds = Object.keys(results.message)
         addBreed(breeds)
     })
}

let dogBreeds = document.querySelector('#dog-breeds')

function addBreed(breeds) {
    removeChildren(dogBreeds)
    breeds.forEach(breed => addBread(breed))
}

function addBread(breed) {
    let dogBreeds = document.querySelector('#dog-breeds')
    let newLi = document.createElement('li')
    newLi.addEventListener("click", function() {
        newLi.style.color = "red"
    })
    newLi.innerText = breed
    dogBreeds.appendChild(newLi)
}

function filterBreeds(dropDownValue) {
    addBreed(breeds.filter(breed => breed.startsWith(letter)))
}
breedDropdown.addEventLister("change", function(event) {
    filterBreeds(event.target.value)
})
const arrayOfBreeds = []
const dropDown = document.querySelector('#breed-dropdown')
let dropDownValue = dropDown.value
