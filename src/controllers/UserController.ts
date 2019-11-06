import { Request, Response } from "express";
import connection from "../db/config";
import { IUser } from "../models/user";
import { createUserbyId, selectUserbyId, removeUserbyId, updateUserbyId } from "../utils/queries";

const db = connection();

export const create = async (req: Request, res: Response) => {
    const { cpf, name, age, phone } = req.body;
    const values: IUser[] = [ cpf, name, age, phone ];

    try {
        await db.query(createUserbyId, values);
        res.status(200).send("inserido!")
    } catch (err) {
        res.send(`Não foi possível inserir`);
    }
};

export const select = (_: Request, res: Response) => {
    db.query(selectUserbyId, (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
    })
};

export const updateById = async (req: Request, res: Response) => {
    const { cpf, name, age, phone } = req.body;

    const values: IUser[] = [ cpf, name, age, phone, parseInt(req.params.id)];

    try {
        await db.query(updateUserbyId, values);
        res.status(200).send("atualizado!");
    } catch (err) {
        res.send(`Não foi possível atualizar`);
    }
};

export const removeById = async (req: Request, res: Response) => {
    try {
        await db.query(removeUserbyId, [parseInt(req.params.id)]);
        res.status(200).send("removido!");
    } catch (err) {
        res.send(`Não foi possível remover`);
    }
};