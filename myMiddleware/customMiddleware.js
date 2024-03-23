const applicationMiddleware = (req, res, next) => {
  console.log("This is Application level middleware");
  next();
};

const routeMiddleware = (req, res, next) => {
  console.log('This is route level middleware');
  if(req.query.name === 'special') {
    next("route");
  } else if(req.query.name === 'error') {
    next(11111);
  } else {
    next(); 
  }  
};

const errorHandler = (err, req, res, next) => {
  console.log('This is default error handler middleware');
  res.json({"success": false, "message": "Error has happened"});
};

module.exports = {
  applicationMiddleware, routeMiddleware, errorHandler
}