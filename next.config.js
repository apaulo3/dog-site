/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV
var nextConfig = {}

if (env == "development") {
  nextConfig = {}
} else {
  nextConfig = {
    output: 'export',
    basePath: '/dog-site',
    images: {
      loader: 'custom',
      loaderFile: './imgLoader.js'
    }
  }
}

module.exports = nextConfig
