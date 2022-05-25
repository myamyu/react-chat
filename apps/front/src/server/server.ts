import express from 'express';

const {PORT = 3001} = process.env;

const app = express();

if (process.env.TS_NODE_DEV === 'true') {
  // TS_NODE_DEV === 'true'のときはviteを使う
  require('./setup-vite-server')(app);
} else {
  require('./setup-server')(app);
}

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
