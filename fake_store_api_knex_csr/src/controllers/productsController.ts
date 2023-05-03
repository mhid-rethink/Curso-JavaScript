import { Response, Request } from "express";
import productsServices from "../services/productsServices";

const index = async (req: Request, res: Response) => {
  try {
    const productsMap = await productsServices.selectAll();

    res.status(200).json(productsMap);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const productsMap = await productsServices.selectById(id);

    res.status(200).json(productsMap[0]);
  } catch (error) {
    res.send(error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const newProduct = await productsServices.createProduct(product);
    res.status(200).json({
      id: newProduct[0],
      ...product,
    });
  } catch (error: any) {
    res.status(500).send(error.message ? { error: error.message } : error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const updatedProduct = req.body;
    const id = req.params.id;

    const product = await productsServices.udpateProduct(id, updatedProduct);

    res.send({ msg: "productUpdated" });
  } catch (error: any) {
    console.log(error.message);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await productsServices.deleteProduct(id);

    res.status(200).json({ msg: "Produto deletado" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { index, show, insert, update, remove };
