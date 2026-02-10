# Backend - Calendario

##Dev

1. Instalar dependencias `npm install`
2. Clonar el archivo `.env.template` y renombrarlo a `.env`
3. Cambiar las variables de entorno acorde a tu configuración.
4. Correr el servidor `npm start`

## Crear Muevo

1. `npm init -y`
2. `package.json` creado.
3. crear `index.js` en la raiz y colocar `console.log('hola')`
4. Linea de comando escribir `node index.js`
5. instalar forma global `sudo npm i nodemon -g`
6. cambiar el `index.js` y en la consola se vera que cambia
7. modificar `package.json` y en scripts se debe agregar
   "scripts": {
   "dev": "nodemon index.js",
   "start": "node index.js"
   }
8. es para evitar volver a llamar el `index.js`y con solo `npm run dev` se ejecute
9. sólo para desarrollo se ocupa el nodemon
