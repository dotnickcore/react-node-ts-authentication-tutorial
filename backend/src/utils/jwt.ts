import jwt from "jsonwebtoken";
import { IJwtPayload } from "../types/IJwtPayload";

class JWTUtils {
    public async generateToken(payload: IJwtPayload) {
        const jwtSecret = process.env.JWT_SECRET;
        
        if (!jwtSecret) {
            throw new Error('JWT_SECRET environment variable is not defined');
        }
        
        return jwt.sign({payload}, jwtSecret, {expiresIn: "7d"});
    }
}