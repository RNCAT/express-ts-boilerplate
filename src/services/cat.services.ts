import { Cat } from '../models/cat.models'

let cats: Cat[] = [
  {
    id: 1,
    name: 'maewfai',
  },
  {
    id: 2,
    name: 'maewsom',
  },
]

function getCats() {
  return cats
}

function getCatById(id: number) {
  return cats.find((cat) => cat.id === id)
}

function addCat(newCat: Cat) {
  cats.push(newCat)

  return cats.find((cat) => cat.id === newCat.id)
}

function updateCat(id: number, name: string) {
  return cats
    .map((cat) => {
      if (cat.id === id) {
        cat.name = name
      }

      return cat
    })
    .find((cat) => (cat.id = id))
}

function removeCat(id: number) {
  cats = cats.filter((cat) => cat.id !== id)
}

export default { getCats, getCatById, addCat, updateCat, removeCat }
