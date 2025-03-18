import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/database.config.js'

dotenv.config()

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use('/', () => console.log('Server is ready!'))

app.listen(port, () => console.log(`Server has stated on port: ${port}`))
