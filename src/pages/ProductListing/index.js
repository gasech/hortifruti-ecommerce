// React
import { useEffect, useState } from "react";

// Lib
import { getAllFruits } from "lib/fruits"

// CSS
import './style.css';

// Components
import Link from "components/Link";

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
            <Link to={`/products/` + fruit.name.toLowerCase()} key={fruit.name}>
              <div className="products-item">
                <h1>{fruit.name}</h1>
              </div>
            </Link>
          )
        })
      }
    </div>
  );
}

export default Products;
