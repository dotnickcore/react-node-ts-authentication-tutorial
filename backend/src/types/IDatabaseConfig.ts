import { Pool } from 'pg';

export interface DatabaseConfig {
    user?: string;
    host?: string;
    database?: string;
    password?: string;
    port?: number;
    max: number;
    idleTimeoutMillis: number;
    connectionTimeoutMillis: number;
}

export type DatabasePool = Pool;