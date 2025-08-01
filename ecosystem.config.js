module.exports = {
  apps: [
    {
      name: 'recrearsesuenoslucidos.com',
      script: './current/server/index.mjs',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production'
      }
    },
  ],
};