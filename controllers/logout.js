const logoutRouter = require('express').Router();

logoutRouter.get('/', async (request, response) => {
  const cookies = request.cookies;
  // si la cookkie no existe devuelve un error
  if (!cookies?.accessToken) {
    return response.status(401);
  }

  response.clearCookie('accessToken', {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
  });

  return response.sendStatus(204);
});

module.exports = logoutRouter;
