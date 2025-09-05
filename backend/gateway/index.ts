import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

app.use(
  '/user',
  createProxyMiddleware({ target: 'http://localhost:5001', changeOrigin: true })
)
app.use(
  '/post',
  createProxyMiddleware({ target: 'http://localhost:5002', changeOrigin: true })
)
app.use(
  '/comment',
  createProxyMiddleware({ target: 'http://localhost:5003', changeOrigin: true })
)

app.listen(5000, () => console.log('server running on http://localhost:5000'))
