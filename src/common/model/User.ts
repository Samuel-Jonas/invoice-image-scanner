export default interface User {
    id:        string
    email:     string
    name:      string
    emailVerified: Date
    image:      string
    password:  string
    isActive:  boolean
    createdAt: Date
    updatedAt: Date
}