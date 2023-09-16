// Define an interface for the Customer model
import {Loan} from "./Loan";

interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    maritalStatus: MaritalStatus;
    employmentStatus: EmploymentStatus;
    employer?: string | null;
    dateOfBirth: Date;
    idCard: string;
    address: string;
    phoneNumber: string;
    loans: Loan[] | null;

    createdAt: Date;
    updatedAt: Date;
}
interface CustomerCreateInput  {
    firstName: string;
    lastName: string;
    maritalStatus: MaritalStatus;
    employmentStatus: EmploymentStatus;
    employer?: string | null;
    dateOfBirth: Date;
    idCard: string;
    address: string;
    phoneNumber: string;
}

enum MaritalStatus {
    SINGLE = 'SINGLE',
    MARRIED = 'MARRIED',
    DIVORCED = 'DIVORCED',
    WIDOWED = 'WIDOWED',
}

enum EmploymentStatus {
    EMPLOYED = 'EMPLOYED',
    UNEMPLOYED = 'UNEMPLOYED',
    SELF_EMPLOYED = 'SELF_EMPLOYED',
    RETIRED = 'RETIRED',
}

export {Customer, CustomerCreateInput , EmploymentStatus,MaritalStatus}