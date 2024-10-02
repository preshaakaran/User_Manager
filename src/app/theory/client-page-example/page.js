'use client';

import { fetchListOfProducts } from "@/actions";
import { useEffect, useState } from "react";

function ClientPageExample() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getListOfProducts() {
        setLoading(true);
        const data = await fetchListOfProducts();
        console.log(data);
        if(data) {
            setProducts(data);
            setLoading(false);
        }
    }

    useEffect(() => {
        getListOfProducts();
    }, []);

    if(loading) {
        return <div>Loading...</div>
    }


  return (
    <div>
        <h1>Client Page Server Actions</h1>
        <ul>
            {
                products && products.length > 0 ?
                products.map((product, index) => (
                    <li key={index}>{product.title}</li>
                )) : <li>No products found</li>}
        </ul>
        
    </div>
  );
}

export default ClientPageExample;