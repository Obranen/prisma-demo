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

router.put('/update/', async (req, res) => {
  let {id, name, description} = req.body
  id = Number(id)
  const response = await prisma.comment.update({data: {name, description}, where: {id}})
  res.json(response)
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const response = await prisma.comment.delete({where: {id}})
  res.json(response)
})


export default router