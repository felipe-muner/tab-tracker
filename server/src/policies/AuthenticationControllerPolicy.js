const Joi = require("@hapi/joi");

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$")),
    });

    console.log(schema.validate(req.body));

    const { error, value } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "You must provide a valid e-mail address",
          });
          break;
        case "password":
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1 - Lowercase, Uppercase, Numerics
            <br>
            8-32 characters`,
          });
          break;
        default:
          res.status(400).send({
            error: "Invalid registration information",
          });
      }
    } else {
      next();
    }
  },
};
