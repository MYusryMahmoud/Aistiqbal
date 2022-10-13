import env from 'dotenv'
import express from 'express'
import users from './data/users.js'

env.config()
const app = express()

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const user = users.find((u) => u.id === req.params.id)
    res.json(user)
})

const PORT = process.env.PORT || 4000
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`)
)