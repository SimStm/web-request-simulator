FROM oven/bun AS build-stage
WORKDIR /build
COPY . .
RUN bun build ./index.ts --outdir ./dist

FROM oven/bun AS run-stage
WORKDIR /app
COPY --from=build-stage /build/dist .

# ENTRYPOINT [ "bash" ]
ENTRYPOINT [ "bun", "index.js" ]