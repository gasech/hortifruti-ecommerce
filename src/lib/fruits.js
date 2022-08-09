export const getAllFruits = async () => {
  let fruitsRequest = await fetch('https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all', {
    method: 'GET',
  })
  
  let fruits = await fruitsRequest.json()

  return fruits;  
}

export const getFruitByName = async (name) => {
  let fruitRequest = await fetch(`https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/${name}`, {
    method: 'GET',
  })
  
  let fruit = await fruitRequest.json()

  return fruit;
}