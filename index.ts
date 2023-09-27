import { isEmpty } from 'lodash';

const RESPONSE_ENV = Bun.env.RESPONSE;
const CONTENT_TYPE_ENV = Bun.env.CONTENT_TYPE;
const APP_PORT_ENV = Bun.env.PORT || 3000;

// Starts the Web Server returning what is filled in 'RESPONSE' environment variable,
// using the port specified in PORT environemnt variable (or using default 3000)
const server = Bun.serve({
  port: APP_PORT_ENV,
  fetch(request) {
    return new Response(
      !isEmpty(RESPONSE_ENV)
        ? RESPONSE_ENV
        : 'Missing RESPONSE environment variable',
      {
        headers: {
          'Content-Type': CONTENT_TYPE_ENV || 'text/html',
        },
      }
    );
  },
});

console.log(`[SERVER] Running in port ${APP_PORT_ENV}!`);

// If it's missing the 'response' environment variable, warning the user
if (isEmpty(RESPONSE_ENV)) {
  console.warn(
    `[SERVER] WARNING: Environment variable 'RESPONSE' is empty. Fill the variable before running the server.`
  );
}

// If it's missing the 'content type' environment variable, warning the user
if (isEmpty(CONTENT_TYPE_ENV)) {
  console.warn(
    `[SERVER] WARNING: Environment variable 'CONTENT_TYPE' is empty. Using the default content-type 'text/html'.`
  );
}

// Exit the process if receives a TERMINATION SIGNAL
process.on('SIGINT', function () {
  console.error('[SERVER] Finishing server...');
  process.exit();
});
