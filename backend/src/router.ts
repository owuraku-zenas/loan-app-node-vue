import {Express} from "express";
import {getUser, signin, signOut, signup} from "./controller/authController"
import {createCustomer, getAllCustomers} from "./controller/customerController";
import {authenticateToken} from "./middleware";
import {createLoan} from "./controller/loanController";

export default function (app: Express) {
    app.get("/test", (req, res) => res.sendStatus(200))

    app.post("/signin", signin)
    app.post("/signup", signup)
    app.get("/user", authenticateToken,getUser)
    app.get("/signout", authenticateToken,signOut)

    app.post('/customer', authenticateToken,createCustomer)
    app.get("/customer", authenticateToken,getAllCustomers)

    app.post("/loan", authenticateToken, createLoan)
}