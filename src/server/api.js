import { Router } from 'express'
import catRoutes from './routes/cat.js'

const router = Router()

router.use(catRoutes);

export { router };