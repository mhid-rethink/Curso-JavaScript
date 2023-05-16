const getAllProducts = async (url = "https://fakestoreapi.com/products/") => {
  try {
    const result = await fetch(url);
    const resultJson = await result.json();

    return resultJson;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProductById = async (
  id,
  url = "https://fakestoreapi.com/products/"
) => {
  try {
    const request = await fetch(url + id);
    const requestJson = await request.json();

    return requestJson;
  } catch (error) {
    throw new Error(error.message);
  }
};
// console.log(getProducts(1));
const getAllCategories = async (url = "https://fakestoreapi.com/products/") => {
  try {
    const request = await fetch(url + "categories");
    const requestJson = await request.json();

    return requestJson;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProductByCategory = async (
  categoryParam,
  url = "https://fakestoreapi.com/products/category/"
) => {
  try {
    const request = await fetch(url + categoryParam);
    const requestJson = await request.json();

    return requestJson;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProductWithRatingHigherThan = async (
  rateParam,
  url = "https://fakestoreapi.com/products"
) => {
  if (!rateParam) {
    throw new Error("Parametro invalido");
  }
  try {
    const request = await fetch(url);
    const requestJson = await request.json();
    const requestFilteredByRate = await requestJson.filter(
      (product) => product["rating"]["rate"] > rateParam
    );

    return requestFilteredByRate;
  } catch (error) {
    throw error;
  }
};

const getMostVotedProduct = async (
  url = "https://fakestoreapi.com/products"
) => {
  try {
    const request = await fetch(url);
    const requestJson = await request.json();
    const requestSortedByRatingCount = await requestJson.sort(
      (o1, o2) => o2["rating"]["count"] - o1["rating"]["count"]
    );

    return requestSortedByRatingCount[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAveragePrice = async (url = "https://fakestoreapi.com/products") => {
  try {
    const request = await fetch(url);
    const requestJson = await request.json();
    const priceSum = await requestJson.reduce(async (accumulator, element) => {
      const acc = await accumulator;
      const productPrice = await element["price"];
      return acc + productPrice;
    }, 0);
    const averagePrice = (await priceSum) / requestJson.length;

    return averagePrice;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getMostExpensiveProduct = async (
  url = "https://fakestoreapi.com/products"
) => {
  try {
    const request = await fetch(url);
    const requestJson = await request.json();
    const requestSortedByHighestPrice = await requestJson.sort(
      (o1, o2) => o2["price"] - o1["price"]
    );

    return requestSortedByHighestPrice[0];
  } catch (error) {
    throw new Error(error.message);
  }
};
const getCheaperProduct = async (url = "https://fakestoreapi.com/products") => {
  try {
    const request = await fetch(url);
    const requestJson = await request.json();
    const requestSortedByLowestPrice = await requestJson.sort(
      (o1, o2) => o1["price"] - o2["price"]
    );

    return requestSortedByLowestPrice[0];
  } catch (error) {
    throw new Error(error.message);
  }
};
export {
  getAllProducts,
  getProductById,
  getAllCategories,
  getProductByCategory,
  getProductWithRatingHigherThan,
  getMostVotedProduct,
  getAveragePrice,
  getMostExpensiveProduct,
  getCheaperProduct,
};
