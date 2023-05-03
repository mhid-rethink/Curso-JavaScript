import categoryRepositories from "../repositories/categoryRepositories";

type Category = {
  id?: number;
  name: string;
};

type Product = {
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
  const categoryId = findCategory[0].id;
  const products = await categoryRepositories.selectProductsByCategory(
    categoryId
  );
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
  return await categoryRepositories.insertCategory(name);
};

const updateCategoryById = async (id: string, name: string) => {
  const updatedData: Category = { name };
  return await categoryRepositories.updateCategory(id, updatedData);
};

const deleteCategoryById = async (id: string) => {
  const category = await categoryRepositories.deleteCategory(id);
  if (!category) throw new Error("Essa categoria não existe");
};

export default {
  selectAll,
  selectProductByCategory,
  insertCategory,
  updateCategoryById,
  deleteCategoryById,
};
