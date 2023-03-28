const urlBase = "https://fakestoreapi.com/products/";
import {
  getAllProducts,
  getProductById,
  getAllCategories,
  getProductByCategory,
  getProductWithRatingHigherThan,
  getMostVotedProduct,
  getAveragePrice,
  getMostExpensiveProduct,
  getCheaperProduct,
} from "./main.js";

const displayConsole = async (fn) => console.log(await fn);

displayConsole(getProductByCategory("jewelery"));
