import Router from 'express'
import prisma from '../prisma/client.js'

const router = Router()

router.post('/create', async (req, res) => {
  const response = await prisma.comment.create({ data: req.body })
  res.json(response)
})

router.get('/', async (req, res) => {
  const response = await prisma.comment.findMany()
  res.json(response)
})

export default router