const httpErrorHandler = (error, req, res, next) => {
  if ("HttpError" === error.name) {
    res.status(error.code).send({
      message: error.message,
    });
  } else {
    next(error);
  }
};

module.exports = httpErrorHandler;
