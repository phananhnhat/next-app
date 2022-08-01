const bcrypt = require('bcryptjs');

import { apiHandler } from 'helpers/api';
import { adminsRepo } from 'helpers/repos';

export default apiHandler({
    post: register
});

function register(req, res) {
    // split out password from user details
    const { password, ...user } = req.body;

    // validate
    if (adminsRepo.find(x => x.username === user.username))
        throw `User with the username "${user.username}" already exists`;

    // hash password
    user.hash = bcrypt.hashSync(password, 10);

    adminsRepo.create(user);
    return res.status(200).json({});
}
