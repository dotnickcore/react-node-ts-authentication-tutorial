// db.ts
import { Pool } from 'pg';
import dotenv from 'dotenv';
import { DatabaseConfig } from './types/IDatabaseConfig';

// Load environment variables
dotenv.config();

// Create typed configuration
const dbConfig: DatabaseConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT ? parseInt(process.env.PG_PORT) : 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
};

// Create a new Pool instance with typed config
const pool = new Pool(dbConfig);

// Optional: Listen for pool events
pool.on('connect', () => {
    console.log('Database connected');
});

pool.on('error', (err: Error) => {
    console.error('Unexpected database error', err);
});

// Export the pool for use in other files
export default pool;
export { dbConfig };