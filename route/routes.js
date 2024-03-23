const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/user');
const { routeMiddleware } = require('../myMiddleware/customMiddleware'); 

router.get('/helloWorld', (req, res) => {
  res.send('Hello, World!');
});

router.delete('/deleteuser', userCtrl.deleteUser, (req, res) => {
  const { name, email } = req.query;
  res.json({"status": "success", "result": res.result});
});

router.get('/users', userCtrl.getUsers, (req, res) => {
  res.json({"status": "success", "result": res.result});
});

router.post('/adduser', userCtrl.addUsers, (req, res) => {
  const { name, email } = req.body;
  res.json({"status": "success", "result": res.result});
});

module.exports = router;
