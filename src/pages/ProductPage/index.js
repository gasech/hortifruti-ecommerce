import { useEffect, useState} from "react";
import { BrowserRouter, Link, useParams} from "react-router-dom";
import { getAllFruits } from "lib/fruits"

import PageNotFound from "pages/PageNotFound";

function ProductPage() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchFruits = async () => {
      let fruitsData = await getAllFruits();
      
      setFruits(fruitsData)
    }

    fetchFruits()
      .catch(console.error)
  }, [])

  const { productName } = useParams();

  const productFind = fruits.find(fruit => {
    return fruit.name.toLowerCase() === productName 
  })
  
  if(!productFind) return <PageNotFound />
  
  return (
    <h1>Product Page: {productName}</h1>
  );
}

export default ProductPage;
