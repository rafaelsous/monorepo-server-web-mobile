import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' })
})

routes.post('/post', (request, response) => {
  return response.json({ message: 'New Post' })
})

export default routes
