import { CustomerModel } from '../database/customerSchema'
import { BasicCRUDController } from "./BasicCRUDController";

export const customerBrokerController = new BasicCRUDController(CustomerModel);


