import React, { useEffect, useState } from 'react'

const Products = () => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            let res = await fetch("http://localhost:8080/Products");
            let data = res.json();
            setProducts(data);
        }
        fetchProducts();
    },[])

  return (
      <div>
          {products.map(product => product.name)}
      </div>
   
  )
}

export default Products
