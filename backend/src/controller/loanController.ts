import {Request, Response, NextFunction} from "express";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()


export const createLoan = async (req: Request, res: Response) => {

    const customer = await prisma.customer.findFirst({
        where: {
            idCard: req.body.customerId
        }

    })

    if (customer == null) {
        return res.status(400).json({message: "Customer Does not Exist"})
    }

    prisma.loan.create({
        data: {
            amount: req.body.amount,
            interest: req.body.interest,
            total: req.body.total,
            customerId: req.body.customerId,
            status: req.body.status,
        }
    }).then((loan) => {
        return res.status(200).json({message: "Loan Created", customer: loan})
    }).catch((e) => {
        console.log(e)
        return res.status(400).json({message: "Loan creation Unsuccessful"})
    })
}