import { TransactionModel } from "../database/transactionSchema";
import { BasicCRUDController } from './basicCRUDController';

export const transactionBrokerController = new BasicCRUDController(TransactionModel);

