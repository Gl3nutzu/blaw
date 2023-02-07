const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({origin: 'http://localhost:3001'}));
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const courseRouter = require('./routes/courseRoutes.js');
app.use("/api/course", courseRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})