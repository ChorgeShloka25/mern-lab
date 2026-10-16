
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample product data
const products = [
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Mobile Phone", price: 18000 },
    { id: 3, name: "Headphones", price: 1500 }
];

// GET: Retrieve products
app.get("/api/products", (req, res) => {
    res.status(200).json(products);
});

// Home route
app.get("/", (req, res) => {
    res.send("MERN Lab Backend is running");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
