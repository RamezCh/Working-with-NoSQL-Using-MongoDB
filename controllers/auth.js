exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie').split(';')[1].trim().split('=')[1];
  const isLoggedIn = req.session.isLoggedIn;
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  //Set-Cookie pre-defined header, value is key value pair
  // Expires default when closing browser
  // Domain = where cookie should be sent
  // HttpOnly prevents client-side scripts from capturing data stored on these cookies
  // res.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly');
  req.session.isLoggedIn = true;
  // session is like cookie but different, it is stored on server side
  res.redirect('/');
};
