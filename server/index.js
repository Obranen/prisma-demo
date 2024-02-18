import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import routes from './route/root.route.js'

const PORT = process.env.SERVER_PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/api', routes)

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(
        `Server connect on port ${PORT}, url http://localhost:${PORT}`
      )
    )
  } catch (e) {
    console.log(e)
  }
}

start()
