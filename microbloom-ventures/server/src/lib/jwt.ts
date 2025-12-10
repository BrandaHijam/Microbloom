import jwt, { Secret, SignOptions, JwtPayload } from 'jsonwebtoken';

const SECRET: Secret = process.env.JWT_SECRET ?? 'dev-secret';

// expiresIn type from SignOptions (string like '7d' or number in seconds)
const EXPIRES: SignOptions['expiresIn'] =
  (process.env.JWT_EXPIRES_IN ?? '7d') as SignOptions['expiresIn'];

export const signToken = (payload: JwtPayload) =>
  jwt.sign(payload, SECRET, { expiresIn: EXPIRES });

export const verifyToken = (token: string): JwtPayload =>
  jwt.verify(token, SECRET) as JwtPayload;
