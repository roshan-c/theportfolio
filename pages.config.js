export default {
  build: {
    buildCommand: "pnpm run build && pnpm run pages:build",
    nodeVersion: "20",
    deployCommand: "pnpm run pages:deploy"
  }
}