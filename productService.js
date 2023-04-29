async function getProduct(productId) {
  const apiUrl = `https://fakestoreapi.com/products/${productId}`;
  try {
    const response = await fetch(apiUrl);
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getProduct;
