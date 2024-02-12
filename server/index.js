import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import router from './routes/index.js'

const PORT = process.env.SERVER_PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/api', router)

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
