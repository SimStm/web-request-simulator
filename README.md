# Web Request Simulator

This is a basic, lightweight web server using [Bun](https://bun.sh) as JavaScript/TypeScript runtime.

This app is really useful in some situations, like:
- When you need to retrieve some token, text or a HTML page fast, without the need to configure a `Nginx/Apache` web server, or even creating an `Express` application from zero
- When you are trying to generate a Let's Encrypt certificate for a domain/subdomain you own, but you can't solve the `.well-known/acme-challenge/xxxxxxxx` challenge
- Retrieve any kind of mock response for any URL path

You can point your IP/host to this app, and he'll retrieve what you pass through environment variables. Simple as that.

# Execute in Docker (container)
This code has an public [image available in Docker Hub](https://hub.docker.com/r/simstosh/web-request-simulator), with the runtime size of only **~88mb**. Feel free to use this anywhere you like. 😎

```bash
docker pull simstosh/web-request-simulator

docker run --rm --name web-request -e RESPONSE="<b>Hello World</b>" simstosh/web-request-simulator
```

# Building and running the project

To install dependencies:

```bash
bun install
```

To run the project:
```bash
RESPONSE="content to retrieve" bun run dev
```

Environment variables available to use:
```bash
# This env var will be the body of the response. What you provide here, it'll return as response
RESPONSE="<b>Hello world!</b>"

# The port used by the app
PORT=3000

# The content-type of your response. If you don't provide anything, the default will be "text/html"
CONTENT_TYPE="text/html"
```