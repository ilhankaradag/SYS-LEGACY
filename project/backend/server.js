const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const connections = require('./connections');
const router = require('./Routers/routers');
const controllers = require('./controllers/controllers');
const CLIENT_URL = process.env.CLIENT_URL;

const corsOptions = {
  origin: CLIENT_URL,
  methods: 'GET,POST,PUT,DELETE,PATCH',
  credentials: true,
  maxAge: 3600,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', CLIENT_URL);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/', router);

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
