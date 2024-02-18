import Router from 'express'
import commentRouter from './comment.route.js'

const router = Router()

router.use('/comment', commentRouter)

export default router