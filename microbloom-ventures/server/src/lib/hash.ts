import bcrypt from 'bcryptjs';

export const hash = async (password: string) => {
  return bcrypt.hash(password, 10);
};

export const compare = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
