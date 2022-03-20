/**
 * @type {import("fastify").RouteHandlerMethod}
 */

 import { articleslist } from './articleslist.js'

 export async function RequestArticles(req, reply) {
   reply.send(articleslist)
 }