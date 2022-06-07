const user = require("../models/user");

exports.getLogin = (req, res, next) => {
        console.log(res.get('Cookie'))
        res.render('auth/login', {
          path: '/login',
          pageTitle: 'Login',
          isAuthenticated: req.session.isLoggedIn
          
        });
  };

  exports.postLogin = (req, res, next) => {
    user.findById('629e890862d233fd8f3af606')
    .then(user => {
    req.session.isLoggedIn = true
    req.session.user = user
    req.session.save(err => {
      console.log(err)
      res.redirect('/');
    })
    
  })
  .catch(err => {console.log(err)})
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
};