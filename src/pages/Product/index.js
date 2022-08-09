// React
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

// Lib
import { getFruitByName } from "lib/fruits";

// CSS
import './style.css';

// Not Found
import NotFound from "pages/NotFound";

// Components
import Button from "components/Button";
import Container from "components/Container";
import { TextField } from "@mui/material";

function ProductPage() {
  const [fruit, setFruit] = useState(null);
  const { productName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let fruitData = await getFruitByName(productName);

      setFruit(fruitData)
    }

    fetchData()
      .catch(console.error)
  }, [])
  if (!fruit) return <NotFound />
  return (
    <Container>
      <div className="product-info">
        <div className="product-general">
          <h2>{fruit.name || "NA"}</h2>
          <img src={`/imagefruits/${fruit.name.toLowerCase()}.png`} />
          <p>Genus: {fruit.genus || "NA"}</p>
          <p>Family: {fruit.family || "NA"}</p>
          <p>Order: {fruit.order || "NA"}</p>
        </div>
        <div className="product-nutrition">
          <div>
            <h2>Nutrition Table:</h2>
            <p>Carbohydrates: {fruit.nutritions.carbohydrates || "N/A"}g</p>
            <p>Protein: {fruit.nutritions.protein || "N/A"}g</p>
            <p>Fat: {fruit.nutritions.fat || "N/A"}g</p>
            <p>Calories: {fruit.nutritions.calories || "N/A"}g</p>
            <p>Sugar: {fruit.nutritions.sugar || "N/A"}g</p>
          </div>
        </div>
        <div className="product-form">
          <h3>Quantity</h3>
          <input 
            type="number" 
            min="0" 
            max="99"
          />
          <Button>
            Add to Cart
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
