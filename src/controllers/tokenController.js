import jwt from 'jsonwebtoken';

const createTokenHandler = (req, res) => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    return res.status(500).json({
      status: 'internal-error',
      message: 'JWT secret is not configured',
    });
  }

  try {
    const token = jwt.sign(
      {
        scope: 'product:full-access',
      },
      jwtSecret,
      {
        expiresIn: '1h',
      }
    );

    return res.status(200).json({
      status: 'success',
      message: 'JWT token generated',
      data: {
        token,
        authorizationHeader: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 'internal-error',
      message: 'failed to generate token',
    });
  }
};

export { createTokenHandler };
