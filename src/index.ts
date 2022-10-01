import 'dotenv/config'
import Express from 'express'
import type { Application, Request, Response } from 'express'
import cors from 'cors'

import config from './config'
import catRoutes from './routes/cat.rotues'

const app: Application = Express()

app.use(cors())
app.use(Express.json())

app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', data: null })
})

app.use('/cats', catRoutes)

app.listen(config.environments.port, () => console.log('Server is running...'))
