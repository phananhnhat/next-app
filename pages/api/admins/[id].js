const bcrypt = require('bcryptjs');

import { apiHandler } from 'helpers/api';
import { omit } from 'helpers/api';
import { adminsRepo } from 'helpers/repos';

export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

function getById(req, res) {
    const user = adminsRepo.getById(req.query.id);

    if (!user) throw 'User Not Found';

    return res.status(200).json(omit(user, 'hash'));
}

function update(req, res) {
    const user = adminsRepo.getById(req.query.id);

    if (!user) throw 'User Not Found';

    // split out password from user details
    const { password, ...params } = req.body;

    // validate
    if (user.username !== params.username && adminsRepo.find(x => x.username === params.username))
        throw `User with the username "${params.username}" already exists`;

    // only update hashed password if entered
    if (password) {
        user.hash = bcrypt.hashSync(password, 10);
    }

    adminsRepo.update(req.query.id, params);
    return res.status(200).json({});
}

function _delete(req, res) {
    adminsRepo.delete(req.query.id);
    return res.status(200).json({});
}
