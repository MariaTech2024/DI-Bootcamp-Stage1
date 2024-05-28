import { register } from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const {ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRE} = process.env
const expirationTime = Math.floor(Date.now() / 1000) + 15 * 60

export const _login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await _login(email.toLowerCase())

        if(!user) return res.json(404).json({msg: 'Email not found'})

        const isMatch = bcrypt.compareSync(password+'', user.password)
        if(!isMatch) return res.status(404).json({msg: 'Wrong Password'})

        const accessToken = jwt.sign(
            {id: user.id, email: user.email},
            ACCESS_TOKEN_SECRET,
            {
                expiresIn: ACCESS_TOKEN_EXPIRE * 1000
            }
        )

        res.cookie("token", accessToken, {
            httpOnly: true,
            maxAge: ACCESS_TOKEN_EXPIRE * 1000
        })

        res.json({token: accessToken})
    } catch (error) {
        console.log(`_login => ${error}`);
        res.status(404).json({msg: 'login failed'})
    }
}

export const _register = async (req, res) => {
    const {email, password} = req.body;
    try {
        const lowerEmail = email.toLowerCase();

        const salt = bcrypt.genSaltSync(10)
        const hashPass = bcrypt.hashSync(password+'', salt)

        const newUser = await register({
            email: lowerEmail,
            password: hashPass,
        });
        res.json(newUser)
    } catch (error) {
        console.log(`_register => ${error}`);
        res.status(404).json({msg: 'registration failed'})
    }
}

export const _all = async(req, res) => {
    try {
        const users = await all();
        res.json(users)
    } catch (error) {
        console.log(`_all => ${error}`);
        res.status(404).json({msg: 'get all func failed'})
    }
}