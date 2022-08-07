// React
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Lib
import { getFruitByName } from "lib/fruits";

// Not Found
import PageNotFound from "pages/PageNotFound";

// Components
import Button from "components/Button";
import Container from "components/Container";

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
  if (!fruit) return <PageNotFound />
  return (
    <Container>
      <h1>{fruit.name || "NA"}</h1>
      <p>Genus: {fruit.genus || "NA"}</p>
      <p>Family: {fruit.family || "NA"}</p>
      <p>Order: {fruit.order || "NA"}</p>
      <h2>Nutrition Table:</h2>
      <p>Carbohydrates: {fruit.nutritions.carbohydrates || "NA"}g</p>
      <p>Protein: {fruit.nutritions.protein || "NA"}g</p>
      <p>Fat: {fruit.nutritions.fat || "NA"}g</p>
      <p>Calories: {fruit.nutritions.calories || "NA"}g</p>
      <p>Sugar: {fruit.nutritions.sugar || "NA"}g</p>
      <Button>
        Add to Cart
      </Button>
    </Container>
  );
}

export default ProductPage;
