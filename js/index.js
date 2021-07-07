
import { congressPerson } from 'js/representativees.js'
import { removeChildren } from 'js/utility.js'

const personDir = document.querySelector('.congressPerson')
// const sortBySen = document.querySelector('#sortBySen')
const sortByDem = document.querySelector('#sortByDem')
const sortByRepub = document.querySelector('#sortByRepub')
const sortByInde = document.querySelector('#sortByInde')
// const sortBySenat = document.querySelector('#sortBySenat')
// const sortByRep = document.querySelector('#sortByRep')

sortByRepub.addEventListener('click', event => {
    populatePersonDir(getSimplePersons(reps))
})

sortByDem.addEventListener('click', event => {
    populatePersonDir(getSimplePersons(dems))
})

sortByInde.addEventListener('click', event => {
    populatePersonDir(getSimplePersons(indes))
})

function  getSimplePersons(personArray) {
    return personArray.map(person => {
    let middleName = person.middle_name ? ` ${person.middle_name} ` : ` `
    return {
        id: person.id,
        name: `${person.first_name}${middleName}${person.last_name}, ${senator.state}`,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
        seniority: parseInt(person.seniority, 10)
    }
})
}

function populatePersonDir(getSimplePersons) {
    console.log(simplePersons)
    removeChildren(personDir)
    simplePersons.forEach(person => {
        let perFigure = document.createElement('figure')
        let figImg = document.createElement ('img')
        let figCaption = document.createElement('figcaption')
        
        figImg.src = person.imgURL
        figCaption.textContent = person.name

        perFigure.appendChild(figImg)
        perFigure.appendChild(figCaption)
        personDir.appendChild(perFigure)
    })
}

const filterPersons = (prop, value) => {
    return congressPerson.filter(person => {
        return person[prop] === value
    })
}

const dems = filterPersons('party', 'D')
const reps = filterPersons('party', 'R')
const indes = filterPersons('party', 'ID')

const mostSeniority = getSimplePersons(reps).reduce(
    (acc, person) => {
        return acc.seniority > person.seniority ? acc : person
    }
)