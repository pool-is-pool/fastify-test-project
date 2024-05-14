// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
import firstRoute from './route-1.js'

const fastify = Fastify({
    logger: true
})

fastify.register(firstRoute)

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})