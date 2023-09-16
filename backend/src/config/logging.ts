export enum Section {
	DATABASE = "DATABASE",
	SERVER = "SEVER"
}

const getTimeStamp = (): string => {
	return new Date().toISOString();
};

export const logging = (section: Section, message: string) => {
	console.log(`[${getTimeStamp()}] [${section}] ${message}`);
};

