import { db } from "../config/db.js";

//register a new user
export const register = async ({email, password}) => {
    try {
        const [user] = await db('users').insert({email,password}, [
            'id',
            'email',
        ]);
        return user
    } catch (error) {
        console.log(`Registration error: ${error}`);
        throw new Error('registration failed')
    }
}

//login
export const login = async (email) => {
    try {
        const user = db('users')
        .select('id', 'email', 'password')
        .where({email})
        .first()
        return user || null
    } catch (error) {
        console.log(`Login Error: ${error}`);      
        throw new Error('Login Failed') 
    }
}

export const all = async() => {
    try {
        const users = db('users').select('id', 'email').orderBy('id')
        return users
    } catch (error) {
        console.log(`Get all func Error: ${error}`);      
        throw new Error('Get all func Failed') 
    }
}