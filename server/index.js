import express from 'express';
import { read } from 'fs';

let app = express();

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log("Running Server on Port 3000"));