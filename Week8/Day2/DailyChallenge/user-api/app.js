const express = require('express');
const app = express();
const router = require('./routes/userRoutes.js')


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)

app.listen(5000, ()=>console.log(`Server running on port 5000`));
