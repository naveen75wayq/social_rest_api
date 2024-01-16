import dotenv from 'dotenv';
import path from 'path';
export const envPath = path.resolve('src/.env')
dotenv.config({path: envPath})

export const PORT=process.env.PORT
export const ATLAS_PASS=process.env.ATLAS_PASS
export const CLOUD_NAME=process.env.CLOUD_NAME
export const CLOUD_API=process.env.CLOUD_API
export const CLOUD_API_SECRET=process.env.CLOUD_API_SECRET
export const JWT_KEY=process.env.JWT_KEY