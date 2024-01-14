import Router from 'express'
import prisma from '../prisma/client.js'

const router = Router()

router.post('/reg', async (req, res) => {
  const newUser = await prisma.user.create({ data: req.body })
  res.json(newUser)
})

router.get('/', async (req, res) => {
  const allUsers = await prisma.user.findMany()
  res.json(allUsers)
})

export default router
