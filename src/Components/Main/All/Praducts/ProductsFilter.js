import axios from 'axios'; 
import {useState, useEffect } from 'react';

export default function ProductsFilter({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        const data = response.data;
        const filteredProducts = category
          ? data.filter((product) => product.category === category)
          : data;
        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { products, loading, error };
}
