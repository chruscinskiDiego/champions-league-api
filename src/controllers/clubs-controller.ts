import { Request, Response } from "express";
import { getClubsService, getClubByIdService, createClubService, deleteClubService, updateClubService } from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {

    const httpResponse =  await getClubsService();

    res.status(httpResponse.statusCode).json(httpResponse.body);

};

export const getClubById = async ( req: Request, res: Response) => {


    const id = parseInt(req.params.id); //mesmo nome passado na rota

    const httpResponse = await getClubByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postClub = async (req: Request, res: Response) => {

    const bodyValue = req.body;

    const httpResponse = await createClubService(bodyValue);

    if(httpResponse){

        res.status(httpResponse.statusCode).json(httpResponse.body);
        
    }
    
}

export const deleteClub = async (req:Request, res:Response) => {

    const id = parseInt(req.params.id);

    const httpResponse = await deleteClubService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const updateClub = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    const bodyValue = req.body;
    const httpResponse = await updateClubService(id, bodyValue);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}