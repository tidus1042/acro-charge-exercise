import { BasicCRUDRouter } from "./BasicCRUDRouter";
import { customerBrokerController } from "../controllers/customerBrokerController";

export const customerBrokerRouter = new BasicCRUDRouter(customerBrokerController).router;
