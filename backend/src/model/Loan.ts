// Define an interface for the Loan model
import {Customer} from "./Customer";

interface Loan {
    id: number;
    amount: number;
    interest: number;
    total: number;
    customer: Customer;
    customerId: number;
    status: LoanStatus;
    createdAt?: Date;
    updatedAt?: Date;
}

enum LoanStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
}



export { Loan, LoanStatus };
