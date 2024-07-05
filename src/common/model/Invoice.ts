import User from "@/common/model/User"

export default interface Invoice {
    id:           number
    user:         User
    totalAmount:  number
    tax:          number
    amountDue:    number
    createdAt:   Date
}