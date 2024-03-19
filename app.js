const express = require('express');
const Ajv = require('ajv');
const ajv = new Ajv();
const app = express();

app.use(express.json());

const userSchema = require('./userSchema.json');
const productSchema = require('./productSchema.json');

app.post('/validateUser', (req, res) => {
  const validate = ajv.compile(userSchema);
  const valid = validate(req.body);
  if (valid) {
    res.status(200).send('User JSON is valid');
  } else {
    res.status(400).send('User JSON is not valid');
  }
});

app.post('/validateProduct', (req, res) => {
  const validate = ajv.compile(productSchema);
  const valid = validate(req.body);
  if (valid) {
    res.status(200).send('Product JSON is valid');
  } else {
    res.status(400).send('Product JSON is not valid');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
