import dotenv from "dotenv";

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 8000;

interface Server {
	hostname: string;
	port:  number;
}

interface Config {
    server: { hostname: string; port: number };
}

const config: Config = {
    server: {
        hostname: SERVER_HOSTNAME as string,
        port: SERVER_PORT as number,
    }
}

export default config