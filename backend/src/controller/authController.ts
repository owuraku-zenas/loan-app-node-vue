import {Request, Response, NextFunction} from "express";
import {PrismaClient, User} from '@prisma/client'
import {compare, genSalt, hash} from "bcrypt"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export const signin = async (req: Request, res: Response) => {
    const {email, password} = req.body
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })


    if (user == null) {
        return res.status(400).json({message: "User does not exists"})
    }

    const isMatch = await compare(password, user.password)

    if (!isMatch) {
        return res.status(400).json({message: "Wrong Password"})
    }

    const userData = {
        id: user.id,
        email: user.email
    }

    const accessToken = jwt.sign(userData, process.env.ACESS_TOKEN_SECRET as string, {expiresIn: '1d'});
    res.cookie('jwt', accessToken, { maxAge: 90000000 });
    res.status(200).json({ message: 'Login successful' });
}

export const signup = async (req: Request, res: Response) => {
    const {email, password} = req.body

    const user = await prisma.user.findFirst({
        where: {
            email: email,
        }
    })
    if (user !== null) {
        return res.status(400).json({message: "User already exists"})
    }

    const salt = await genSalt();
    const hashedPassword = await hash(password, salt)

    prisma.user.create({
        data: {
            email, password: hashedPassword
        }
    }).then((response) => {
        res.status(201).json({message: "User Created"})
    }).catch((e) => {
        res.status(400).json({message: "User creation Unsuccessful"})
    })

}

export const getUser = async (req: Request & {user?: User}, res: Response) => {
    res.json({ user: req.user })
}

export const signOut = async (req: Request, res: Response) => {
    res.clearCookie('jwt');

    res.send('You have been signed out.');
}