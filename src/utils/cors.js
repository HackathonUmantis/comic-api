import config from '../config';

export default function cors(req, res, next) {
  const origins = config.cors.allowedOrigins;
  const methods = config.cors.allowedMethods;
  const headers = config.cors.allowedHeaders;

  const origin = origins.indexOf(req.hostname);
  const method = methods.indexOf(req.method);
  if (origin < 0 || method < 0) {
    return res.sendStatus(401);
  }

  res.header("Access-Control-Allow-Origin", origins[origin]);
  res.header("Access-Control-Allow-Methods", methods.join(','));
  res.header("Access-Control-Allow-Headers", headers.join(','));
  next();
};
