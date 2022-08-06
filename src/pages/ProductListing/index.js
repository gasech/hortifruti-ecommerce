import { useEffect, useState} from "react";
import { BrowserRouter, Link} from "react-router-dom";

import { getAllFruits } from "lib/fruits"

import './style.css';

function Products() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchFruits = async () => {
      let fruitsData = await getAllFruits();
      
      setFruits(fruitsData)
    }

    fetchFruits()
      .catch(console.error)
  }, [])


  return (
    <div className="products">
      {
        fruits.map((fruit) => {
          return (
            <div className="products-item" key={fruit.name}>
              <h1>{fruit.name}</h1>
              <Link to={`/products/` + fruit.name.toLowerCase()}>Show details</Link>
            </div>
          ) 
        })
      }
    </div>
  );
}

export default Products;
