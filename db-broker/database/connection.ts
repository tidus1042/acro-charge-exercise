import mongoose from 'mongoose';
import config from 'config';

const mongoDBServer: string = config.get('mongoDBServer');
const mongoDB: string = `mongodb://${mongoDBServer}/store`;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
