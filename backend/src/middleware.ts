import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";


export const authenticateToken = async (req: Request & {user?: any}, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    // @ts-ignore
    jwt.verify(token, process.env.ACESS_TOKEN_SECRET as string, (error, decoded) => {
        if (error) return res.status(403).json({message: error.stack})
        req.user = decoded
        next()
    })
}