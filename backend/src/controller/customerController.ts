import {Request, Response, NextFunction} from "express";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const createCustomer = async (req: Request, res: Response) => {
    prisma.customer.create({
        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            maritalStatus: req.body.maritalStatus,
            employer: req.body.employer,
            employmentStatus: req.body.employmentStatus,
            dateOfBirth: new Date(req.body.dateOfBirth),
            idCard: req.body.idCard,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
        }
    }).then((customer) => {
        return res.status(200).json({message: "Customer Created", customer})
    }).catch((e) => {
        console.log(e)
        return res.status(400).json({message: "Customer creation Unsuccessful"})
    })
}

export const getAllCustomers = async (req: Request, res: Response) => {
    const customers = await prisma.customer.findMany({
        include: {
            loans: true
        }
    })

    return res.json({message: "Customers Retrieved", customers})
}