import { connect, set } from 'mongoose';
import { logger } from './winstonLogger.js';

const mongooseConnect = (uri) => {
	set('strictQuery', false);
	connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'backend' }).catch((err) => {
		logger.error(`Date: ${Date.now()} \n MongoDB: ${err}`);
	});
};

export default mongooseConnect;
