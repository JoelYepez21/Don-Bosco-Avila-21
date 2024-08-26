const jwt = require('jsonwebtoken');
const User = require('../models/user');

// obtiene el token para saber si hay una sesion activa
const userExtractor = async (request, response, next) => {
  try {
    const token = request.cookies?.accessToken;
    // si el token no existe devuelve un error
    if (!token) {
      return response.sendStatus(401);
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id);
    // envia el usuario que inicio sesion
    request.user = user;
  } catch (error) {
    return response.sendStatus(401);
  }
  next();
};

module.exports = { userExtractor };
