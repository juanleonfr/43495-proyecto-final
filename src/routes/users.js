import express, { Router } from 'express';
const routeUsers = Router();
import { deleteUser, postSignup, signout, postSignin, getUserBySession, getUserInfo, deleteUserByAdmin } from '../controllers/users.js';
import { passportSignin, checkAuthentication, checkNoSession } from '../middleware/passportAuth.js';
import checkAdminRole from '../middleware/adminPrivileges.js';

const app = express();

app.use('/user', routeUsers);

routeUsers.post('/signup', checkNoSession, postSignup, passportSignin, postSignin);

routeUsers.post('/signin', checkNoSession, passportSignin, postSignin);

routeUsers.delete('/signout', checkAuthentication, signout);

routeUsers.get('/profile', checkAuthentication, getUserBySession);

routeUsers.delete('/profile', checkAuthentication, deleteUser);

routeUsers.delete('/admin', checkAuthentication, checkAdminRole, deleteUserByAdmin);

routeUsers.get('/admin', checkAuthentication, checkAdminRole, getUserInfo);

export default routeUsers;
