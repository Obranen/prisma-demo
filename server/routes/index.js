import Router from 'express'
import commentRouter from './commentRouter.js'

const router = Router()

router.use('/comment', commentRouter)

export default router