const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000; // Choose any port you prefer
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
