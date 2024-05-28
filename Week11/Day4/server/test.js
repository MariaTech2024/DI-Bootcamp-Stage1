import jwt from 'jsonwebtoken';

const token = jwt.sign(
    { id:1, email: 'test@gmail.com', name: 'John' },
    '123456',
    {
        expiresIn: 60 * 1000,

    }
);

// console.log(token);

const mytoken = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsIm5hbWUiOiJKb2huIiwiaWF0IjoxNzE2NzkzNDczLCJleHAiOjE3MTY4NTM0NzN9.syWXqfw5ZsVhgybOvNMQijyN9fU1NTi5MVIjFayJthM";


jwt.verify(mytoken, "123456", (err, decode) => {
    if(err) return console.log(err.message);

    console.log(decode);
});