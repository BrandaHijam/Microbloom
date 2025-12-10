import bcrypt from 'bcrypt';

export const hash = async (plain: string) => bcrypt.hash(plain, 10);
export const compare = async (plain: string, hashStr: string) => bcrypt.compare(plain, hashStr);
