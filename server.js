/*
npm init -y
node server.js
npm install nodemon -D
npm install express --save
*/
import app from './src/app.js'

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Servidor escutando na porta http://localhost:${port}`)
})