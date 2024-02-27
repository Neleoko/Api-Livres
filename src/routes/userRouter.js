const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    addUser,
    modifyUser,
    deleteUser
} = require('../controllers/userController');

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', addUser);

router.patch('/:id', modifyUser);

router.delete('/:id', deleteUser);

module.exports = router;
