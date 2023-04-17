import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Game = {
  id?: number;
  name: string;
  price: number;
};

const index = async (req: Request, res: Response) => {
  try {
    const games: Game[] = await knexInstance("games").select("*");
    res.status(200).json(games);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const game = await knexInstance("games").select("*").where({ id });
    if (!game.length) {
      throw new Error("Esse jogo não existe");
    }
    res.status(200).json(game);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    const id: number[] = await knexInstance("games").insert({
      name,
      price,
    });

    res.status(201).json({ id: id[0], name, price });
  } catch (error) {
    res.send(error);
  }
};

export default { index, show, insert };
