import jwt from "jsonwebtoken";
import { IJwtPayload } from "../types/IJwtPayload";
import { BadRequestException } from "./error";

class JWTUtils {
    private readonly jwtSecret: string;

    constructor() {
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new BadRequestException('JWT_SECRET environment variable is not defined');
        }
        this.jwtSecret = jwtSecret;
    }

    public async generateToken(payload: IJwtPayload): Promise<string> {
        try {
            return jwt.sign({ payload }, this.jwtSecret, { expiresIn: "7d" });
        } catch (error) {
            throw new BadRequestException(`Failed to generate token: ${error}`);
        }
    }

    public async verifyToken(token: string): Promise<IJwtPayload> {
        try {
            const decoded = jwt.verify(token, this.jwtSecret) as { payload: IJwtPayload };
            return decoded.payload;
        } catch (error) {
            throw new BadRequestException(`Invalid token: ${error}`);
        }
    }

    public async decodeToken(token: string): Promise<IJwtPayload | null> {
        try {
            const decoded = jwt.decode(token) as { payload: IJwtPayload };
            return decoded?.payload || null;
        } catch (error) {
            throw new BadRequestException(`Failed to decode token: ${error}`);
        }
    }
}

export const jwtUtils = new JWTUtils();