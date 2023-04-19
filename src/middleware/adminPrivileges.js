import Users from '../classes/UserClass.js';
import { userCollection, userSchema } from '../models/userModel.js';
const users = new Users(userCollection, userSchema);
import { roleList } from '../utils/roleList.js';

const adminPrivileges = async (req, res, next) => {
	const id = req.session.passport.user;
	let user;
	if (id !== undefined) {
		user = await users.getById(id);
		const isAdmin = user.role.admin === roleList.admin ? true : false;
		if (isAdmin) {
			return next();
		} else {
			return res.sendStatus(403);
		}
	}
	return res.status(401).send('not logged in');
};

export default adminPrivileges;
