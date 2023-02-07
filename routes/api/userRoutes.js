//route from 22-Stu_virtuals tutorial
const router = require('express').Router();
const {
  createUser,
  getUsers,
  getSingleUser,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;