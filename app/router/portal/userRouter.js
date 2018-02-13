module.exports = app => {
  app.router.post('/user/login', app.controller.portal.userController.login);

  app.router.get('/user/logout', app.controller.portal.userController.logout);

  app.router.post('/user/register', app.controller.portal.userController.register);

  app.router.get('/user/checkValid/:str/:value', app.controller.portal.userController.checkValid);

  app.router.get('/user/getUserSession', app.controller.portal.userController.getUserSession);

  app.router.get('/user/forgetGetQuestion/:username', app.controller.portal.userController.forgetGetQuestion);

  app.router.post('/user/forgetCheckAnswer', app.controller.portal.userController.forgetCheckAnswer);

  app.router.put('/user/forgetRestPassword', app.controller.portal.userController.forgetRestPassword);

  app.router.put('/user/resetPassword', app.controller.portal.userController.resetPassword);

  app.router.put('/user/updateUserInfo', app.controller.portal.userController.updateUserInfo);

  app.router.get('/user/getUserInfo', app.controller.portal.userController.getUserInfo);
}