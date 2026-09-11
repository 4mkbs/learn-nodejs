const firstMiddleware = (req, res, next) => {
  console.log("this is the body ", req.body);
  console.log("now i will change the req.body");
  req.body.city = "Sylhet";
  next();
};

const showAllInfomiddleware = (req, res, next) => {
  console.log("see the all info");
  console.log(
    req.body,
    req.url,
    req.method,
    req.headers,
    req.ip,
    req.params,
    req.query,
    req.fresh,
    req.stale,
    req.protocol,
    req.secure,
    req.route,
    req.originalUrl,
    req.path,
    req.hostname,
    req.subdomains,
  );
  next();
};

const changeAge = (req, res, next) => {
  req.body.age = 18;
  console.log("this is changeAge");
  next();
};

// new post request with blocking middlware

const storeBodyInRequest = (req, res, next) => {
  console.log("this is the body ", req.body);
  console.log("now i am going to block if name is not sakib");
  if (req.body.name !== "sakib") {
    return res.json({
      message: "name is not sakib",
    });
  }
  next();
};

const loginchechmiddlewate = (req, res, next) => {
  console.log("this is loginchechmiddlewate");
  if (req.body.token !== "abc") {
    return res.json({
      message: "missing or invalide token",
    });
  }
  next();
};

const checkAgeMiddleware = (req, res, next) => {
  if (req.query.age < 18) {
    return res.json({
      message: "You are not adult",
    });
  }
  next();
};

module.exports = {
  firstMiddleware,
  showAllInfomiddleware,
  changeAge,
  storeBodyInRequest,
  loginchechmiddlewate,
  checkAgeMiddleware,
};
