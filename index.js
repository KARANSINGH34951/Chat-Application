const express= require('express');
const { Server } = require('socket.io');
const app = express();
const PORT =  3000;
// import.meta.env.VITE_PORT ||

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const io=require("socket.io")(Server)

io.on('connection',(socket)=>{
  console.log(socket.id);
  
})

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });


app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
