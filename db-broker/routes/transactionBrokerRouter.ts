import { BasicCRUDRouter } from "./BasicCRUDRouter";
import { transactionBrokerController } from "../controllers/transactionBrokerController";

export const transactionBrokerRouter = new BasicCRUDRouter(transactionBrokerController).router;
