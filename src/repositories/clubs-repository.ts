import { ClubModel } from "../models/club-model";

const clubsList: ClubModel[] = [
    {
        id: 1,
        name: "Paris Saint Germain",
        foundation: 1970
    },
    {
        id: 2,
        name: "Real Madrid",
        foundation: 1902
    },
    {
        id: 3,
        name: "FC Barcelona",
        foundation: 1899
    },
    {
        id: 4,
        name: "Bayern Munich",
        foundation: 1900
    },
    {
        id: 5,
        name: "Manchester City",
        foundation: 1880
    },
    {
        id: 6,
        name: "Liverpool",
        foundation: 1892
    },
    {
        id: 7,
        name: "Juventus",
        foundation: 1897
    },
    {
        id: 8,
        name: "Chelsea",
        foundation: 1905
    },
    {
        id: 9,
        name: "Atletico Madrid",
        foundation: 1903
    },
    {
        id: 10,
        name: "Inter Milan",
        foundation: 1908
    }
];

export const findAllClubs = async(): Promise<ClubModel[]> => {

    return clubsList;

}

export const findClubById = async(id:number): Promise<ClubModel | undefined> => {
    return clubsList.find(club => club.id === id);
}

export const insertClub = async (club:ClubModel) => {
    return clubsList.push(club);
}

export const deleteClubById = async(id: number) => {

    const index = clubsList.findIndex(club => club.id === id);

    if(index !== -1){
        clubsList.splice(index, 1);
        return true;
    }
    else{
        return false;
    }
}

export const updateClub = async(id: number, body: ClubModel) => {

    const index = clubsList.findIndex(club => club.id === id);

    if(index !== -1){
        clubsList[index] = body;
    }

    return clubsList[index];
}
