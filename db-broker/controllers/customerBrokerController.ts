import { CustomerModel } from '../database/customerSchema'
import { BasicCRUDController } from "./basicCRUDController";

export const customerBrokerController = new BasicCRUDController(CustomerModel);


