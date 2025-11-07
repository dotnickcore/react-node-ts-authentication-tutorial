import bcrypt from 'bcrypt';
import HASH_AUTH_USER_PASSWORD from '../constants/utilConstant';

export async function HashAuthUserPassword(password: string) {
    return await bcrypt.hash(password, HASH_AUTH_USER_PASSWORD.SALT_ROUNDS);
}