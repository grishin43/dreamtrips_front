const express = require('express');
const path = require('path');
const app = express();
const srcPath = "/dist/dreamtrips-ang";

// Serve static files....
app.use(express.static(__dirname + srcPath));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + `${srcPath}/index.html`));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
