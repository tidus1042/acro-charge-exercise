import { TransactionModel } from "../database/transactionSchema";
import { BasicCRUDController } from './BasicCRUDController';

export const transactionBrokerController = new BasicCRUDController(TransactionModel);

