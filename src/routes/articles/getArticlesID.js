/**
 * @type {import("fastify").RouteHandlerMethod}
 */

import { articleslist } from './articleslist.js'


export const SchemaArticles = {
    params: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        title: { type: 'string' },
      },
      required: ['id'],
      additionalProperties: false,
    },
  }
  
  export async function FindID(req, reply) {
    const id = req.params.id
    const article = articleslist.find((x) => x.id === id)
    if (!article) {
      return reply.code(404).send({ error: `Article ${req.params.id} not found` })
    }
    reply.send(article)
  }