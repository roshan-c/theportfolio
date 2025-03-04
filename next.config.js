/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  // Enable static exports for Cloudflare Pages
  output: 'export',
  
  // Disable image optimization since it's not supported in Cloudflare Pages
  images: {
    unoptimized: true,
  }
};

export default config;
