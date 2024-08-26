const express= require('express');
const app = express();
const PORT =  3000;
// import.meta.env.VITE_PORT ||

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// app.get('/', (req, res) => {
//   res.send('Hello World');
// });


app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
