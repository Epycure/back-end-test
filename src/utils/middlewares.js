const bearerAuth = (req, res, next) => {
  if (req.headers.authorization) {
    const bearerToken = req.headers.authorization.split(' ')[1];
    if (bearerToken === process.env.BEARER_TOKEN) {
      return next();
    }
  }
  return res.status(401).send({
    ok: false,
    message: 'Access denied: authentication failed.',
  });
};

module.exports = {
  bearerAuth,
};
