/** @type {import('express')} */
const { response, request } = require('express');

/** @type {import('jsonwebtoken')} */
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res = response, next) => {
  // x-token headers
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la petición',
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req.uid = uid;
    req.name = name;
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        ok: false,
        msg: 'El token ha expirado',
      });
    }

    return res.status(401).json({
      ok: false,
      msg: 'Token no válido',
    });
  }

  next();
};

module.exports = {
  validarJWT,
};
