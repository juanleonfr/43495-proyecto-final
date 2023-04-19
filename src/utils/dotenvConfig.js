import dotenv from 'dotenv';
import cors from 'cors';
const dev = dotenv.config();
const production = 'production';

const conditionalExport = process.argv[2] == 'dev' ? { dev, cors } : production;
export default conditionalExport;
