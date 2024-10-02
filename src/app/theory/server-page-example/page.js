import { fetchListOfProducts } from "@/actions";

   

async function ServerActionsExample() {

    // async function fetchListOfProducts() {
    //     'use server'
    //     const response = await fetch('https://dummyjson.com/products');
    //     const data = await response.json();
    //     return data?.products;
    // } 


    const products = await fetchListOfProducts();
    console.log(products);
  return (
    <div>
        <h1>Server Actions-server components</h1>
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

export default ServerActionsExample;