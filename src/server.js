'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
app.use(express.static('./build'));
app.get('*', (req, res) => res.sendFile(path.resolve('build', `${__dirname}/src/index.html`)));
app.listen(port, () => console.log(`Listening on port ${port}`));

