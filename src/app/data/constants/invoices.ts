import Invoice from "@/common/model/Invoice";
import Users  from "@/app/data/constants/users"

const invoices: Invoice[] = [
    {
        id: 1,
        user: Users[0],
        totalAmount: 123.45,
        tax: 0.10,
        amountDue: 135.80,
        createdAt: new Date(2023, 1, 20, 9, 15, 30) // February 20, 2023, 09:15:30 AM
    },
    {
        id: 2,
        user: Users[1],
        totalAmount: 87.60,
        tax: 0.10,
        amountDue: 96.36,
        createdAt: new Date(2023, 1, 21, 14, 20, 45) // February 21, 2023, 02:20:45 PM
    },
    {
        id: 3,
        user: Users[2],
        totalAmount: 150.00,
        tax: 0.10,
        amountDue: 165.00,
        createdAt: new Date(2023, 1, 22, 8, 30, 0) // February 22, 2023, 08:30:00 AM
    },
    {
        id: 4,
        user: Users[3],
        totalAmount: 72.80,
        tax: 0.10,
        amountDue: 80.08,
        createdAt: new Date(2023, 1, 23, 11, 45, 15) // February 23, 2023, 11:45:15 AM
    },
    {
        id: 5,
        user: Users[4],
        totalAmount: 99.99,
        tax: 0.10,
        amountDue: 109.99,
        createdAt: new Date(2023, 1, 24, 13, 0, 30) // February 24, 2023, 01:00:30 PM
    },
    {
        id: 6,
        user: Users[5],
        totalAmount: 120.50,
        tax: 0.10,
        amountDue: 132.55,
        createdAt: new Date(2023, 1, 25, 16, 10, 45) // February 25, 2023, 04:10:45 PM
    },
    {
        id: 7,
        user: Users[6],
        totalAmount: 85.75,
        tax: 0.10,
        amountDue: 94.33,
        createdAt: new Date(2023, 1, 26, 18, 20, 0) // February 26, 2023, 06:20:00 PM
    },
    {
        id: 8,
        user: Users[7],
        totalAmount: 63.25,
        tax: 0.10,
        amountDue: 69.57,
        createdAt: new Date(2023, 1, 27, 20, 30, 15) // February 27, 2023, 08:30:15 PM
    },
    {
        id: 9,
        user: Users[8],
        totalAmount: 110.00,
        tax: 0.10,
        amountDue: 121.00,
        createdAt: new Date(2023, 1, 28, 9, 45, 30) // February 28, 2023, 09:45:30 AM
    },
    {
        id: 10,
        user: Users[9],
        totalAmount: 80.20,
        tax: 0.10,
        amountDue: 88.22,
        createdAt: new Date(2023, 2, 1, 10, 0, 45) // March 1, 2023, 10:00:45 AM
    }
]

export default invoices;