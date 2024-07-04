export interface User {
    id:        BigInt
    email:     string
    name:      string
    password:  string
    isActive:  Boolean
    createdAt: Date
}