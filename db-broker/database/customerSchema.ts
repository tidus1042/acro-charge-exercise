import { Schema } from 'mongoose';
import { db } from './connection'

export const CustomerSchema = new Schema({
    _id: String,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    country: String,
    city: String,
    street: String,
    phone: String,
});

export const CustomerModel = db.model('customer', CustomerSchema );

export type Customer = { [K in keyof typeof CustomerSchema]?: string }
