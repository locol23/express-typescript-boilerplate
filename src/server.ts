import cors from 'cors'
import Express from 'express'

const app = Express()

app.use(cors())
app.listen(4000)

app.get('/', (req: Express.Request, res: Express.Response) =>
  res.send({ a: 'get' })
)
app.get('/set-status-code', (req: Express.Request, res: Express.Response) =>
  res.status(500).send({ a: 'get-500' })
)

app.post('/', (req: Express.Request, res: Express.Response) =>
  res.send({ a: 'post' })
)
app.post('/set-status-code', (req: Express.Request, res: Express.Response) =>
  res.status(400).send({ a: 'post-400' })
)
