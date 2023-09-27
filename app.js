//NEED TO DECIDE ON A TEMPLATE ENGINE TO RENDER HTML//

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080; // environment variable should be based on the hosting platform's value and set from the terminal.

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
