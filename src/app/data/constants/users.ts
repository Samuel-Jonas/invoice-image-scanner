import User from "@/common/model/User";

const users: User[] = [
    {
        id: 1,
        email: "john.doe@example.com",
        name: "John Doe",
        password: "johnnyD123",
        isActive: true,
        createdAt: new Date(2023, 0, 15, 8, 45, 0, 0),
    },
    {
        id: 2,
        email: "jane.smith@example.com",
        name: "Jane Smith",
        password: "janeS2023",
        isActive: false,
        createdAt: new Date(2023, 1, 20, 9, 0, 0, 0),
    },
    {
        id: 3,
        email: "robert.brown@example.com",
        name: "Robert Brown",
        password: "robbieB456",
        isActive: true,
        createdAt: new Date(2023, 2, 25, 10, 15, 0, 0),
    },
    {
        id: 4,
        email: "linda.green@example.com",
        name: "Linda Green",
        password: "lindaG789",
        isActive: false,
        createdAt: new Date(2023, 3, 30, 11, 30, 0, 0),
    },
    {
        id: 5,
        email: "michael.white@example.com",
        name: "Michael White",
        password: "mikeW2023",
        isActive: true,
        createdAt: new Date(2023, 4, 5, 12, 45, 0, 0),
    },
    {
        id: 6,
        email: "susan.black@example.com",
        name: "Susan Black",
        password: "susanB123",
        isActive: false,
        createdAt: new Date(2023, 5, 10, 13, 0, 0, 0),
    },
    {
        id: 7,
        email: "david.clark@example.com",
        name: "David Clark",
        password: "davidC456",
        isActive: true,
        createdAt: new Date(2023, 6, 15, 14, 15, 0, 0),
    },
    {
        id: 8,
        email: "lisa.hill@example.com",
        name: "Lisa Hill",
        password: "lisaH789",
        isActive: false,
        createdAt: new Date(2023, 7, 20, 15, 30, 0, 0),
    },
    {
        id: 9,
        email: "james.scott@example.com",
        name: "James Scott",
        password: "jamesS2023",
        isActive: true,
        createdAt: new Date(2023, 8, 25, 16, 45, 0, 0),
    },
    {
        id: 10,
        email: "maria.josefina@gmail.com",
        name: "Maria Josefina",
        password: "josefina123",
        isActive: false,
        createdAt: new Date(2024, 6, 4, 10, 30, 0, 0),
    }
]

export default users;