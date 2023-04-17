import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Brand = {
  id?: number;
  name: string;
  nativeCountry: string;
};

const index = async (req: Request, res: Response) => {
  try {
    const brands: Brand[] = await knexInstance("brands").select("*");
    res.status(200).json(brands);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const brand: Brand[] = await knexInstance("brands")
      .select("*")
      .where({ id });
    if (!brand.length) {
      throw new Error("Esse autor não existe");
    }

    res.status(200).send(brand);
  } catch (error) {
    res.send(error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { name, nativeCountry } = req.body;

    const id: number[] = await knexInstance("brands").insert({
      name,
      nativeCountry,
    });

    res.status(201).json({ id: id[0], name, nativeCountry });
  } catch (error) {
    res.send(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, nativeCountry } = req.body;
    const updatedData: Brand = { name, nativeCountry };

    const brand = await knexInstance("brands")
      .update(updatedData)
      .where({ id });

    res.status(200).json(brand);
  } catch (error) {
    res.send(error);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const brand = knexInstance("brands").delete().where({ id });

    if (!brand) {
      throw new Error("Esse livro não existe");
    }
    res.status(200).json({ msg: "Livro deletado" });
  } catch (error) {
    res.send(error);
  }
};

export default { insert, index, show, update, remove };
