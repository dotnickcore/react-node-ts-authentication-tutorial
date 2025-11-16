import bcrypt from 'bcrypt';

export async function ComparePasswords(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
}