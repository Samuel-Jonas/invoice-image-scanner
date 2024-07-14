import User from "@/src/common/model/User"

export default interface Invoice {
    id:           number
    user:         User
    description:  string
    price:        number
    quantity:     number
    total:        number
    createdAt:    Date
}

