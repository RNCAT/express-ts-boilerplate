import { Router } from 'express'

import catController from '../controllers/cat.controllers'

const catRoutes = Router()

catRoutes
  .get('/', catController.findAll)
  .get('/:id', catController.findOne)
  .post('/', catController.create)
  .patch('/:id', catController.update)
  .delete('/:id', catController.remove)

export default catRoutes
