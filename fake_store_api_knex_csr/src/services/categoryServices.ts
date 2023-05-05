import { makeError } from "../middlewares/errorHandler";
import categoryRepositories from "../repositories/categoryRepositories";

type Category = {
  id?: number;
  name: string;
};

const selectAll = async () => {
  const categories = await categoryRepositories.selectAllCategories();
  const reducer = (acc: string[], curr: Category): string[] => {
    acc.push(curr.name);
    return acc;
  };
  const categoriesNames: string[] = categories.reduce(reducer, []);
  return categoriesNames;
};

const selectProductByCategory = async (category: string) => {
  const findCategory = await categoryRepositories.verifyCategory(category);
  if (!findCategory.length) {
    throw makeError({ message: "Essa categoria não existe", status: 400 });
  }

  const categoryId = findCategory[0].id;
  const products = await categoryRepositories.selectProductsByCategory(
    categoryId
  );
  if (!products.length) {
    throw makeError({ message: "Produtos não encontrados", status: 404 });
  }

  const formatedProducts = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
    rating: {
      rate: product.rate,
      count: product.count,
    },
  }));
  return formatedProducts;
};

const insertCategory = async (name: string) => {
  const findCategory = await categoryRepositories.verifyCategory(name);
  if (findCategory.length) {
    throw makeError({ message: "Essa categoria já existe", status: 422 });
  }

  return await categoryRepositories.insertCategory(name);
};

const updateCategoryById = async (id: string, name: string) => {
  const findCategory = await categoryRepositories.verifyCategory(id);
  if (!findCategory.length) {
    throw makeError({ message: "Essa categoria não existe", status: 400 });
  }

  const updatedData: Category = { name };
  return await categoryRepositories.updateCategory(id, updatedData);
};

const deleteCategoryById = async (id: string) => {
  const findCategory = await categoryRepositories.selectCategoryById(id);
  if (!findCategory) {
    throw makeError({ message: "Essa categoria não existe", status: 400 });
  }

  const category = await categoryRepositories.deleteCategory(id);
  if (!category) {
    throw makeError({
      message: "Categoria não pôde ser deletada",
      status: 409,
    });
  }
};

export default {
  selectAll,
  selectProductByCategory,
  insertCategory,
  updateCategoryById,
  deleteCategoryById,
};
