import { StatusCodes } from 'http-status-codes';
import { Model } from "mongoose";

export class BasicCRUDController {
    // @ts-ignore
    model: Model;

    // @ts-ignore
    constructor(model: Model) {
        this.model = model;
    }

    create(req, res) {
        const newDoc = req.body;
        this.model.create(newDoc, (err) => {
            if (err) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).end(err);
            } else {
                res.status(StatusCodes.CREATED).end();
            }
        });
    }

    read(req, res) {
        this.model.find({}).exec((err, docs) => {
            if (err) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).end(err);
            } else {
                res.json(docs);
            }
        });
    }

    update(req, res) {
        const id = req.params.id;
        const updatedDoc = req.body;
        this.model.updateOne({_id: id}, updatedDoc).exec((err) => {
            if (err) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
            } else {
                res.status(StatusCodes.NO_CONTENT);
            }
        });
    }

    delete(req, res) {
        const id = req.params.Id;
        this.model.deleteOne({_id: id}, (err) => {
            if (err) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
            } else {
                res.status(StatusCodes.NO_CONTENT).end();
            }
        });
    }
}
