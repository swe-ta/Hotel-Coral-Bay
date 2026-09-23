const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hotel Coral Bay API is running!");
});

// app.get("/", (req, res) => {
//     console.log("🔥 THIS IS THE CORRECT SERVER.JS");
//     res.send("Hotel Coral Bay API is running!");
// });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});