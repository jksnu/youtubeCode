const userService = require('../service/user');
const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getUsers();
        res["result"] = users;
        next();
    } catch (error) {
        throw error;
    }
};
const addUsers = async (req, res, next) => {
    try {
        const userObj = {
            "name": req.body.name,
            "email": req.body.email
        };
        const insertResult = await userService.addUsers(userObj);
        res["result"] = insertResult;
        next();
    } catch (error) {
        throw error;
    }
};
const deleteUser = async (req, res, next) => {
    try {        
        const deleteResult = await userService.deleteUser(req.query.id);
        res["result"] = deleteResult;
        next();
    } catch (error) {
        throw error;
    }
};
module.exports = {
    getUsers, addUsers, deleteUser
}