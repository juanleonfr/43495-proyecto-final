export const mongodb = process.env.MONGO_DB;
export const sessionSecret = process.env.SESSION_SECRET;
let db = '';
switch (process.env.INSTANCIA) {
	case 'mongo': {
		db = 'Mongo Atlas';
		break;
	}
	case 'memoria': {
		db = 'Memoria';
		break;
	}
	case 'archivo': {
		db = 'File System';
		break;
	}
	case 'firebase': {
		db = 'Firebase Firestore';
		break;
	}
}
export { db };
export const envPort = process.env.PORT;
export const uri = process.env.MONGO_URI;
export const accountSid = process.env.TWILIO_SID;
export const authToken = process.env.TWILIO_TOKEN;
export const twilioNumber = process.env.TWILIO_NUMBER;
export const twilioWpp = process.env.TWILIO_WPP;
export const adminNumber = process.env.AUX_NUMBER;
export const sendToMe = process.env.EMAIL_ADDRESS;
export const password = process.env.EMAIL_PASSWORD;
export const name = process.env.EMAIL_NAME;
export const instance = process.env.INSTANCIA;
