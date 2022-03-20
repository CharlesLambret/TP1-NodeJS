/**
 * @type {import("fastify").RouteHandlerMethod}
 */

 import { articleslist } from './articleslist.js'




 export async function DeleteArticle(req, reply) {
   const id = req.params.id
   const article = articleslist.find((x) => x.id === id)
   if (!article) {
     return reply.code(404).send({ error: `Article ${req.params.id} not found` })
   }
   reply.code(200).send({ message: 'Article deleted' })
 }
 