const {models: {User}} = require('../model');
const getUsers = async function () {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
}
const addUsers = async function (userObj) {
  try {
    const insertResult = await User.create(userObj);
    return insertResult;
  } catch (error) {
    throw error;
  }
}
const deleteUser = async function (id) {
  try {
    const deleteResult = await User.destroy({"where": {"id": id}});
    return deleteResult;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getUsers, addUsers, deleteUser
}