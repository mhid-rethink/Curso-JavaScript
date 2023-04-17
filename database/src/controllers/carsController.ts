import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Car = {
  id?: number;
  name: string;
  model: string;
  color: string;
  brand: string;
};
const index = async (req: Request, res: Response) => {
  try {
    const cars: Car[] = await knexInstance("cars")
      .select("cars.name", "cars.model", "cars.color", "brands.name as brand")
      .join("brands", "cars.brand_id", "=", "brands.id");
    res.status(200).json(cars);
  } catch (error: any) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const car = await knexInstance("cars")
      .select("cars.name", "cars.model", "cars.color", "brands.name as brand")
      .join("brands", "cars.brand_id", "=", "brands.id")
      .where({ "cars.id": id });

    if (!car.length) {
      throw new Error("Esse carro não existe");
    }

    res.status(200).json(car);
  } catch (error: any) {
    res.send(error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { name, model, color, brand } = req.body;

    const findBrand = await knexInstance("brands")
      .select("id")
      .where({ name: brand });

    const brandId = findBrand[0].id;

    const id: number[] = await knexInstance("cars").insert({
      name,
      model,
      color,
      brand_id: brandId,
    });

    res.status(201).json({ id: id[0], name, model, color, brand });
  } catch (error: any) {
    res.send(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, model, color, brand } = req.body;
    const updatedData: any = { name, model, color };

    if (brand) {
      const brandData = await knexInstance("cars")
        .select("id")
        .where({ name: brand });

      if (!brandData[0]) {
        throw new Error("Marca não existe");
      }
      updatedData.brand_id = brandData[0].id;
    }
    await knexInstance("cars").update(updatedData).where({ id });

    res.status(200).json({ name, model, color, brand });
  } catch (error: any) {
    res.send(error);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const car = await knexInstance("cars").delete().where({ id });

    if (!car) {
      throw new Error("Esse carro não existe");
    }

    res.status(200).json({ msg: "Carro deletado" });
  } catch (error: any) {
    res.send(error);
  }
};

export default { insert, index, show, update, remove };
