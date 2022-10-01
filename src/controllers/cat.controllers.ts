import type { Request, Response } from 'express'
import { Cat } from '../models/cat.models'

import catServices from '../services/cat.services'

function findAll(req: Request, res: Response) {
  const cats = catServices.getCats()

  return res.status(200).json({ status: 'success', data: cats })
}

function findOne(req: Request, res: Response) {
  const { id } = req.params
  const cat = catServices.getCatById(Number(id))

  return res.status(200).json({ status: 'success', data: cat })
}

function create(req: Request, res: Response) {
  const newCat: Cat = req.body
  const cats = catServices.addCat(newCat)

  return res.status(201).json({ status: 'success', data: cats })
}

function update(req: Request, res: Response) {
  const { id } = req.params
  const { name } = req.body

  const cat = catServices.updateCat(Number(id), name)

  return res.status(200).json({ status: 'success', data: cat })
}
function remove(req: Request, res: Response) {
  const { id } = req.params

  catServices.removeCat(Number(id))

  return res.status(204).end()
}

export default { findAll, findOne, create, update, remove }
