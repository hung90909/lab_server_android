const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3030;

app.use(bodyParser.json());

app.get('/API', (req, res) => {
  const num1 = parseInt(req.query.num1) ;
  console.log(num1)
  const num2 = parseInt(req.query.num2) ;
  const sum = num1 + num2;
  res.json({ result: sum });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

  
  
  
  
  