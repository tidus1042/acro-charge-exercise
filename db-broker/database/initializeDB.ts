import { CustomerModel } from '../database/customerSchema'
import { TransactionModel } from "../database/transactionSchema";

export const transactionsData = require('./data.json');

export const initializeData = () => {
    transactionsData.forEach((transactionData) => {
        const customer: object = {
            _id: transactionData.customer_id,
            firstName: transactionData.first_name,
            lastName: transactionData.last_name,
            email: transactionData.email,
            gender: transactionData.gender,
            country: transactionData.country,
            city: transactionData.city,
            street: transactionData.street,
            phone: transactionData.phone,
        };
        CustomerModel.create(customer);

        let transaction: object = {
            totalPrice: transactionData.total_price,
            currency: transactionData.currency,
            creditCardType: transactionData.cerdit_card_type,
            creditCardNumber: transactionData.cerdit_card_number,
            customerId: transactionData.customer_id,
        };

        TransactionModel.create(transaction);
    });
};
