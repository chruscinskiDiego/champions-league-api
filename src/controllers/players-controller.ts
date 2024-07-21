import express, { Request, Response } from "express"
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayersService, patchPlayerService } from "../services/players-service";
import { badRequest, noContent } from "../utils/http-help";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayers = async (req: Request, res: Response) => {

    const httpResponse =  await getPlayersService();

    res.status(httpResponse.statusCode).json(httpResponse.body);

};

export const getPlayerById = async ( req: Request, res: Response) => {


    const id = parseInt(req.params.id); //mesmo nome passado na rota

    const httpResponse = await getPlayerByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {

    const bodyValue = req.body;

    const httpResponse = await createPlayerService(bodyValue);

    if(httpResponse){

        res.status(httpResponse.statusCode).json(httpResponse.body);
        
    }
    
}

export const deletePlayer = async (req:Request, res:Response) => {

    const id = parseInt(req.params.id);

    const httpResponse = await deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const patchPlayer = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    const bodyValue:StatisticsModel = req.body;
    const httpResponse = await patchPlayerService(id, bodyValue);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}