import { Response, Request, NextFunction } from "express";
import categoryServices from "../services/categoryServices";

const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoriesNames = await categoryServices.selectAll();
    res.status(200).json(categoriesNames);
  } catch (error) {
    next(error);
  }
};

const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category: string = req.params.category;
    const formatedProducts = await categoryServices.selectProductByCategory(
      category
    );

    res.status(200).json(formatedProducts);
  } catch (error) {
    next(error);
  }
};

const insert = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const name = req.body.name;

    const id: number[] = await categoryServices.insertCategory(name);

    res.status(201).json({ id: id[0], name });
  } catch (error: any) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;
    const name = req.body.name;

    await categoryServices.updateCategoryById(id, name);

    res.status(200).json({ msg: "categoryUpdated" });
  } catch (error) {
    next(error);
  }
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;

    await categoryServices.deleteCategoryById(id);

    res.status(200).json({ msg: "Categoria deletada" });
  } catch (error) {
    next(error);
    next(error);
  }
};
export default { index, show, insert, update, remove };
