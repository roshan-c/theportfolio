export default {
  build: {
    buildCommand: "pnpm run build && pnpm run pages:build",
    deployCommand: "pnpm wrangler pages deploy .next",
    nodeVersion: "20"
  }
}