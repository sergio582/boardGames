const User = require("../../model/main/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const createJWT = (email, userId, duration) => {
  const payload = {
    email,
    userId,
    duration,
  };
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: duration,
  });
};

exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    err === null ? res.json(users) : res.json({ message: err });
  });
};

exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user !== null ? res.json({ success: true, result: user }) : res.json({ error: "Utilisateur non trouvé !" });
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

exports.signup = (req, res, next) => {
  let { pseudo, email, password, password_confirmation } = req.body;

  if (!emailRegexp.test(email)) {
    return res.json({ errors: "Email invalide" });
  }

  if (password != password_confirmation) {
    return res.json({ errors: "Les mots de passe ne correspondent pas !" });
  }

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res.json({ errors: "Email existant" });
      } else {
        const user = new User({
          pseudo: pseudo,
          email: email,
          password: password,
        });
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then((response) => {
                res.status(200).json({
                  success: true,
                  result: response,
                });
              })
              .catch((err) => {
                res.status(500).json({
                  errors: [{ error: err }],
                });
              });
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: "Something went wrong" }],
      });
    });
};

exports.signin = (req, res) => {
  let { email, password } = req.body;

  if (!emailRegexp.test(email)) {
    return res.json({ errors: "Email invalide" });
  }

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.json({
          errors: "Utilisateur non trouvé !",
        });
      } else {
        bcrypt
          .compare(password, user.password)
          .then((isMatch) => {
            if (!isMatch) {
              return res.json({ errors: "Mot de passe incorrect !" });
            }
            let access_token = createJWT(user.email, user._id, 3600);
            jwt.verify(access_token, process.env.TOKEN_SECRET, (err, decoded) => {
              if (err) {
                res.status(500).json({ erros: err });
              }
              if (decoded) {
                return res.status(200).json({
                  success: true,
                  token: access_token,
                  message: user,
                });
              }
            });
          })
          .catch((err) => {
            res.status(500).json({ erros: err });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ erros: err });
    });
};
