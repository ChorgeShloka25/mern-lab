
import { useEffect, useState } from "react";

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/products`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Unable to connect to the backend.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h2>Loading products...</h2>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Product List</h1>

            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <strong>{product.name}</strong>
                            {" - ₹"}
                            {product.price.toLocaleString("en-IN")}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
