module.exports = {
  reactStrictMode: false,
  serverRuntimeConfig: {
    secret: 'jwt-secret nextjs project',
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api' // development api
      : 'http://localhost:3000/api' // production api
  },
}
