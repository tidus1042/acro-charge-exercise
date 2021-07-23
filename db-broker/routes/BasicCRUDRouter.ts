import express, { Router } from 'express';
import { BasicCRUDController } from "../controllers/basicCRUDController";

export class BasicCRUDRouter {
    router: Router;

    constructor(basicCRUDController: BasicCRUDController) {
        this.router = express.Router();

        const controllerScope = {model: basicCRUDController.model};
        this.router.post("/", basicCRUDController.create.bind(controllerScope));
        this.router.get("/", basicCRUDController.read.bind(controllerScope));
        this.router.put("/:id", basicCRUDController.update.bind(controllerScope));
        this.router.delete("/:id", basicCRUDController.delete.bind(controllerScope));
    }
}
