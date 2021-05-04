const User = require("../models/user");
const sequelize = require("../util/database");

exports.getLogin = (req, res, next) => {
  //   const isLoggedIn = req
  //     .get('Cookie')
  //     .split(';')[1]
  //     .trim()
  //     .split('=')[1] === 'true';
  //console.log(req.session.isLoggedIn);
  let message = req.flash('error');
  console.log(message);
  if(message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
    errorMessage: message
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  console.log(message);
  if(message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    isAuthenticated: false,
    errorMessage: message
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({where: { email: email }})
    .then((user) => {
      //console.log(user.email+user.password);
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect("/login");
      }
      
      if (!password.localeCompare(user.password)) {
        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save((err) => {
          console.log(err);
          return res.redirect("/");
        });
      }
      console.log('here');
      req.flash('error', 'Invalid email or password.');
      return res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/login");
    });
};

exports.postSignup = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({where: { email: email }})
    .then((userDoc) => {
      if (userDoc) {
        req.flash('error', 'E-Mail already picked, please pick a different one.');
        return res.redirect("/signup");
      }
      if( password.localeCompare(confirmPassword) ){
        req.flash('error', 'The passwords do not match, please try again.');
        return res.redirect("/signup");
      }
      sequelize.sync()
      .then(result => {
        return User.create({
          name: name,
          email: email,
          password: password,
        })})
        .then((user) => {
          return user.createCart();
        })
        .then((result) => {
          res.redirect("/login");
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
