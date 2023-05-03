import productsRepositories from "../repositories/productsRepositories";

type ProductParams = {
  title: string;
  pice: number;
  description: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
  rate?: number;
  count?: number;
  category?: string;
  category_id?: number;
};

const createProduct = async (product: ProductParams) => {
  const newProduct = { ...product, ...product.rating };
  delete newProduct.rating;
  delete newProduct.category;

  const categoryId = await productsRepositories.verifyCategory(
    product.category!
  );

  if (!categoryId.length) {
    throw new Error("Categoria não existe");
  }

  const insertedProduct = await productsRepositories.insertProduct({
    ...newProduct,
    category_id: categoryId[0].id,
  });
  return insertedProduct;
};

const selectAll = async () => {
  const products = await productsRepositories.selectAllProducts();
  const productsMap = products.map((product) => {
    return {
      ...product,
      rating: {
        rate: product.rate,
        count: product.count,
      },
    };
  });
  return productsMap;
};

const selectById = async (id: string) => {
  const products = await productsRepositories.selectProductById(id);

  if (!products.length) {
    throw new Error("Esse livro não existe!");
  }

  const productsMap = products.map((product) => {
    return {
      ...product,
      rating: {
        rate: product.rate,
        count: product.count,
      },
    };
  });

  return productsMap;
};
const udpateProduct = async (id: string, updatedProduct: ProductParams) => {
  console.log("entrei em updateProduct");

  const newProduct = { ...updatedProduct, ...updatedProduct.rating };
  if (newProduct.category) {
    const category = await productsRepositories.verifyCategory(
      newProduct.category!
    );
    console.log(category);

    if (category.length) {
      newProduct.category_id = category[0].id;
    }
  }

  delete newProduct.category;
  delete newProduct.rating;
  console.log(newProduct);

  return await productsRepositories.udpateProductById(id, newProduct);
};
const deleteProduct = async (id: string) => {
  const book = await productsRepositories.deleteProductById(id);
  if (!book) throw new Error("Esse produto não existe");
};
export default {
  createProduct,
  selectAll,
  selectById,
  udpateProduct,
  deleteProduct,
};
