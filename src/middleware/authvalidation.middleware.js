const validator = require("../utils/validate");
const regsiterValidation = async (req, res, next) => {
  const validateRule = {
    fullName: "required|string|min:3",
    email: "required|email",
    password: "required|min:6",
    phoneNumber: "required|max:11|min:11",
  };

  await validator(req.body, validateRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};

const loginValidation = async (req, res, next) => {
  const validateRule = {
    email: "required|email",
    password: "required|min:6",
  };

  await validator(req.body, validateRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};

module.exports = {
  regsiterValidation,
  loginValidation,
};
