import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from 'express'
import { JWT_KEY } from "../loadEnvironment";

interface ExtendedRequest extends Request {
    user?: any;
}
export function authenticateToken(req: ExtendedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header('authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            error: 'Unauthorized - Missing token'
        });
    }
    jwt.verify(token,
        JWT_KEY as string,
        (err, user) => {
            if(err){
                return res.status(403).json({
                    error: 'Unauthorized - Invalid token'
                })
            }
            req.user = user
            next();
        });


}