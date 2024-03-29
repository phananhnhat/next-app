import { apiHandler, omit } from 'helpers/api';
import { usersRepo } from 'helpers/repos';

export default apiHandler({
    get: getUsers
});

function getUsers(req, res) {
    // return users without hashed passwords in the response
    const response = usersRepo.getAll().map(x => omit(x, 'hash'));
    return res.status(200).json(response);
}
