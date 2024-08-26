const refresRouter = require('express').Router();
// este controlador es para enviar esto al hook y pueda ser usado en el front
refresRouter.get('/', async (request, response) => {
  return response.status(200).json({
    id: request.user.id,
    name: request.user.name,
    typeUser: request.user.typeUser,
    email: request.user.email,
    datos: request.user.datos,
    registrado: request.user.registrado,
  });
});

module.exports = refresRouter;
