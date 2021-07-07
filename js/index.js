
import { congressPerson } from 'js/representatives.js'
import { removeChildren } from 'js/utility.js'

const senatorDir = document.querySelector('.congressPerson')
const sortByDem = document.querySelector('#sortByDem')
const sortByRepub = document.querySelector('#sortByRepub')
const sortByInde = document.querySelector('#sortByInde')

sortByDem.addEventListener('click', event => {
    populateSenatorDir(getSimpleSenators(dems))
})

sortByRepub.addEventListener('click', event => {
    populateSenatorDir(getSimpleSenators(reps))
})

sortByInde.addEventListener('click', event => {
    populateSenatorDir(getSimpleSenators(indes))
})





