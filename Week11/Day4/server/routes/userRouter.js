import express from 'express';
import { _register, _login, _all } from '../controllers/userController.js';
import { verifyAccessToken } from '../middlewares/verifyAccessToken.js';

const router = express.Router();

router.post('/register', _register)
router.post('/login', _login)
router.get('/', verifyAccessToken, _all)
router.get('/verify', verifyAccessToken, (req, res) => {
    res.sendStatus(200);
})

export default router;