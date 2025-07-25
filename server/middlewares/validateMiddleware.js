const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = "fail to input properly";
    console.log(err);
    const extraDetails = err.errors[0].message;
    const status = 422;
    const error = {
      status,
      message,
      extraDetails,
    };
  
    next(error);
  }
};
module.exports = validate;
