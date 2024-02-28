// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public')); // Serve static files from 'public' directory

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
