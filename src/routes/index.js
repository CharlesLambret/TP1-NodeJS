import { Home } from './home.js'
import { Helloworld } from './helloworld.js'

export async function routes(app) {
  app.get('/', Home)
  app.get('/hello', Helloworld)

  const SchemaMessage = {
    body: {
      type: 'object',
      properties: {
        random: { type: 'string' },
        message: { type: 'string' },
      },
      required: ['message'],
      additionalProperties: false,
    },
  }

  app.post('/message', { schema: SchemaMessage }, (request, reply) => {
    reply.send({
      data: request.body,
      message: 'Message received',
    })
  })
}
