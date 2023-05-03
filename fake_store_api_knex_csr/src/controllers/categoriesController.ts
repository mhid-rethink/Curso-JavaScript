import { Response, Request } from "express";
import categoryServices from "../services/categoryServices";
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
    const categoriesNames = await categoryServices.selectAll();
    res.status(200).json(categoriesNames);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const category: string = req.params.category;
    const formatedProducts = await categoryServices.selectProductByCategory(
      category
    );

    res.status(200).json(formatedProducts);
  } catch (error) {
    res.send(error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;

    const id: number[] = await categoryServices.insertCategory(name);

    res.status(201).json({ id: id[0], name });
  } catch (error: any) {
    res.status(500).send(error.message ? { error: error.message } : error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const name = req.body.name;

    await categoryServices.updateCategoryById(id, name);

    res.status(200).json({ msg: "categoryUpdated" });
  } catch (error) {
    res.send(error);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    await categoryServices.deleteCategoryById(id);

    res.status(200).json({ msg: "Categoria deletada" });
  } catch (error) {
    res.send(error);
  }
};
export default { index, show, insert, update, remove };
