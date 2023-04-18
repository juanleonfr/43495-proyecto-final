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

const type = process.env.TYPE;
const project_id = process.env.PROJECT_ID;
const private_key_id = process.env.PRIVATE_KEY_ID;
const private_key = process.env.PRIVATE_KEY;
const client_email = process.env.CLIENT_EMAIL;
const client_id = process.env.CLIENT_ID;
const auth_uri = process.env.AUTH_URI;
const token_uri = process.env.TOKEN_URI;
const auth_provider_x509_cert_url = process.env.AUTH_PROVIDER;
const client_x509_cert_url = process.env.CLIENT_CERT_URI;

export const credentials = JSON.stringify({ type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url });
