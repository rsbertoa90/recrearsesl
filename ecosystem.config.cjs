module.exports = {
  apps: [
    {
      name: 'recrearsesuenoslucidos.com',
      // Apunta el script a la ruta completa a través del enlace simbólico
      script: './current/server/index.mjs',
      // Especifica el intérprete
      interpreter: '/home/forge/.nvm/versions/node/v18.16.0/bin/node',
      // Opcional, pero recomendado
      env: {
        NODE_ENV: 'production'
      }
    },
  ],
};