module.exports = {
  apps: [
    {
      name: 'recrearsesuenoslucidos.com',
      // Cambia el 'script' a 'npm'
      script: 'npm',
      // Pasa el comando 'start' como argumento
      args: 'run start',
      // Establece el directorio de trabajo a la ruta del proyecto
      cwd: './current',
      // Opcional, pero recomendado
      env: {
        NODE_ENV: 'production'
      }
    },
  ],
};