/**
 * @type { import("fastify").RouteHandlerMethod }
 */
export function Home(req, reply) {
  reply.send({ message: 'Server is running!!!' })
}
