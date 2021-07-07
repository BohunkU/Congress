
import { congressPerson } from 'js/representatives.js'
import { removeChildren } from 'js/utility.js'

const senatorDiv = document.querySelector('.congressPerson')
const sortByDem = document.querySelector('#sortByDem')
const sortByRepub = document.querySelector('#sortByRepub')
const sortByInde = document.querySelector('#sortByInde')

sortByDem.addEventListener('click', event => {
    populateSenatorDiv(getSimplifiedSenators(dems))
})

sortByRepub.addEventListener('click', event => {
    populateSenatorDiv(getSimplifiedSenators(reps))
})

sortByInde.addEventListener('click', event => {
    populateSenatorDiv(getSimplifiedSenators(indes))
})





