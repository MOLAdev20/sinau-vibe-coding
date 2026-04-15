import jwt from 'jsonwebtoken';

const authorizationMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({
      status: 'unauthorized',
      message: "you don't have access to resources",
    });
  }

  const [scheme, token] = authorizationHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({
      status: 'unauthorized',
      message: "you don't have access to resources",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || '');
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).json({
      status: 'unauthorized',
      message: "you don't have access to resources",
    });
  }
};

export default authorizationMiddleware;
