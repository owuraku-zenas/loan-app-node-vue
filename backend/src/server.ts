import express from "express"
import {logging, Section} from "./config/logging";
import * as http from "http";
import config from "./config/config";
import router from "./router";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use((req,res, next) => {
    logging(Section.SERVER, `METHOD - [${req.method}], URL - [${req.url}]`)

    res.on("finish", () => {
        logging(Section.SERVER, `METHOD - [${req.method}], URL - [${req.url}], STATUS - [${res.statusCode}]`)
    })
    next()
})


const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies to be sent with requests
    optionsSuccessStatus: 204, // No content response for preflight requests
};

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

const httpServer = http.createServer(app)
app.listen(config.server.port, config.server.hostname,() => {
    router(app)
    logging(Section.SERVER, `Server running on ${config.server.hostname}:${config.server.port}`)
})