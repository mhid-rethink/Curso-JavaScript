import { Response, Request } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Category = {
  id?: number;
  name: string;
};

type Product = {
  id?: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rate: number;
  count: number;
  category: string;
};

const index = async (req: Request, res: Response) => {
  try {
    const categories: Category[] = await knexInstance("categories").select("*");
    const reducer = (acc: string[], curr: Category): string[] => {
      acc.push(curr.name);
      return acc;
    };
    const categoriesNames: string[] = categories.reduce(reducer, []);
    res.status(200).json(categoriesNames);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const category: string = req.params.category;
    const findCategory: Category[] = await knexInstance("categories")
      .select("*")
      .where({ name: category });

    const categoryId = findCategory[0].id;
    if (!category) throw new Error("Essa categoria não existe");

    const products: Product[] = await knexInstance("products")
      .select(
        "products.title",
        "products.price",
        "products.description",
        "products.image",
        "products.rate",
        "products.count",
        "categories.name as category"
      )
      .join("categories", "categories.id", "=", "products.category_id")
      .where({ category_id: categoryId });

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

    res.status(200).json(formatedProducts);
  } catch (error) {
    res.send(error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;

    const id: number[] = await knexInstance("categories").insert({
      name,
    });

    res.status(201).json({ id: id[0], name });
  } catch (error) {
    res.send(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const name = req.body.name;
    const updatedData: Category = { name };

    const categoryId = await knexInstance("categories")
      .update(updatedData)
      .where({ id });

    res.status(200).json({ msg: "categoryUpdated" });
  } catch (error) {
    res.send(error);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const category = await knexInstance("categories").delete().where({ id });

    if (!category) throw new Error("Essa categoria não existe");

    res.status(200).json({ msg: "Categoria deletada" });
  } catch (error) {
    res.send(error);
  }
};
export default { index, show, insert, update, remove };
