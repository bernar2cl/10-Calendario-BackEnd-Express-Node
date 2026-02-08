const { Schema, model } = require('mongoose');

/**
 * @typedef {Object} IUsuario
 * @property {string} _id
 * @property {string} name
 * @property {string} email
 * @property {string} password
 */

const UsuarioSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

/**
 * @type {import('mongoose').Model<IUsuario>}
 */
const usuario = model('Usuario', UsuarioSchema);

module.exports = usuario;
