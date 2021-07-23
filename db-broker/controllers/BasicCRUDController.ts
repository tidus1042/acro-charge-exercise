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
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
            } else {
                res.status(StatusCodes.CREATED).end();
            }
        });
    }

    read(req, res) {
        this.model.find({}).exec((err, docs) => {
            if (err) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
            } else {
                res.json(docs);
            }
        });
    }

    update(req, res) {
        const id = req.params.id;
        const updatedDoc = req.body;
        this.model.updateOne({_id: id}, updatedDoc).exec((err, resDB) => {
            if (err) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
            } else {
                res.status(StatusCodes.NO_CONTENT);
            }
        });
    }

    delete(req, res) {
        const id = req.params.id;
        this.model.deleteOne({_id: id}, (err, resDB) => {
            if (err) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
            } else {
                res.status(StatusCodes.NO_CONTENT).end();
            }
        });
    }
}
