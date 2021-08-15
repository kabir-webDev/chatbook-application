const createError = require("http-errors");
// 404 not found Handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested contents was not found!"));
}

// default error handler

function errorHandler(err, req, res, next) {
  // either object type title or res.locals.title="Error Page"
  res.render("error", {
    title: "Error Page",
  });
}
module.exports = {
  notFoundHandler,
  errorHandler,
};
