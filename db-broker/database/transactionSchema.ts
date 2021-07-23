import { Schema } from 'mongoose';

import { db } from './connection'

export const TransactionSchema = new Schema({
    totalPrice: String,
    currency: String,
    creditCardType: String,
    creditCardNumber: String,
    customerId: String
});

export const TransactionModel = db.model('transaction', TransactionSchema);

export type Transaction = { [K in keyof typeof TransactionSchema]?: string }
