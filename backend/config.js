import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/LA-Drink-1',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
}