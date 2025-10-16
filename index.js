const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const rateLimit = require('express-rate-limit');


const app = express();

app.use(cors());
app.use(express.json());


const limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 30, 
  message: { status: "error", message: "Too many requests, please try again later." },
});

app.use(limiter);


app.use ('/', require ('./routes/getFact'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});