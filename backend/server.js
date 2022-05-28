const fs = require("fs");
const path = require("path");

const fastify = require("fastify")({
  logger: false
});

// fastify-formbody lets us parse incoming forms
fastify.register(require("fastify-formbody"));

// point-of-view is a templating manager for fastify
fastify.register(require("point-of-view"), {
  engine: {
    handlebars: require("handlebars")
  }
});

// Load and parse SEO data
const seo = require("../src/seo.json");
if (seo.url === "glitch-default") {
  seo.url = `https://wiredin.glitch.me`;
}

fastify.get("/", async (request, reply) => {
  let params = request.query.raw ? {} : { seo: seo };
  reply.send('hello'); 
});

fastify.listen(process.env.PORT, '0.0.0.0', function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
});
