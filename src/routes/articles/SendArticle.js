
export const SchemaPost = {
    body: {
      type: 'object',
      properties: {
        title: { type: 'string' },
      },
      required: ['title'],
      additionalProperties: false,
    },
  }
  
  export async function SendArticle(req, reply) {
    reply.code(201).send({ message: 'Article created' })
  }