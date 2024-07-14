import type { Invoice } from "@prisma/client";
import Users  from "@/src/app/data/constants/users"
import { Decimal } from "@prisma/client/runtime/library";

const invoices: Invoice[] = [
    {
        id: 1,
        userId: Users[0].id,
        description: "Web development services",
        price: new Decimal(123.45),
        quantity: 1,
        total: new Decimal(123.45),
        createdAt: new Date(2023, 1, 20, 9, 15, 30) // February 20, 2023, 09:15:30 AM
      },
      {
        id: 2,
        userId: Users[1].id,
        description: "Graphic design services",
        price: new Decimal(75.25),
        quantity: 2,
        total: new Decimal(150.50),
        createdAt: new Date(2023, 2, 15, 11, 30, 45) // March 15, 2023, 11:30:45 AM
      },
      {
        id: 3,
        userId:Users[2].id,
        description: "SEO services",
        price: new Decimal(200.00),
        quantity: 1,
        total: new Decimal(200.00),
        createdAt: new Date(2023, 3, 10, 14, 45, 0) // April 10, 2023, 02:45:00 PM
      },
]

export default invoices;