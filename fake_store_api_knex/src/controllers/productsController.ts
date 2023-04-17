import { Response, Request } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

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
      .join("categories", "categories.id", "=", "products.category_id");

    const productsMap = products.map((product) => {
      return {
        ...product,
        rating: {
          rate: product.rate,
          count: product.count,
        },
      };
    });

    res.status(200).json(productsMap);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

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
      .where({ "products.id": id });

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

    res.status(200).json(productsMap[0]);
  } catch (error) {
    res.send(error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { title, price, description, image, category } = req.body;
    const { rate, count } = req.body.rating;

    const findCategory = await knexInstance("categories")
      .select("id")
      .where({ name: category });
    const categoryId = findCategory[0].id;

    const id: number[] = await knexInstance("products").insert({
      title,
      price,
      description,
      image,
      rate,
      count,
      category_id: categoryId,
    });

    res.status(201).json({
      id: id[0],
      title,
      price,
      description,
      image,
      category,
      rate,
      count,
    });
  } catch (error) {
    res.send(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const updatedProduct = req.body;

    if (updatedProduct.category) {
      const category = await knexInstance("categories")
        .select("*")
        .where({ name: updatedProduct.category });
      if (category[0].id) {
        updatedProduct.category_id = category[0].id;
      }
    }

    delete updatedProduct.category;

    await knexInstance("products")
      .update(updatedProduct)
      .where({ id: req.params.id });

    res.send({ msg: "productUpdated" });
  } catch (error: any) {
    console.log(error.message);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const book = await knexInstance("products").delete().where({ id });

    if (!book) throw new Error("Esse produto não existe");

    res.status(200).json({ msg: "Produto deletado" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { index, show, insert, update, remove };
