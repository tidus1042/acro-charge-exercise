import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
import { customerBrokerRouter } from './routes/customerBrokerRouter';
import { transactionBrokerRouter } from "./routes/transactionBrokerRouter";


const config = require('config');

const port = config.get('port');
const appNAme = config.get('applicationName');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/customer', customerBrokerRouter);
app.use('/transaction', transactionBrokerRouter);

app.listen(port, () => console.log(`${appNAme} listening on port ${port}!`));
