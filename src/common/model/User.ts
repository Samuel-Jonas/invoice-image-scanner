export default interface User {
    id:        number
    email:     string
    name:      string
    password:  string
    isActive:  boolean
    createdAt: Date
}