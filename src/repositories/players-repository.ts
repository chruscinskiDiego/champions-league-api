import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const playersList: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            overall: 93,
            pace: 85,
            shooting: 92,
            passing: 91,
            dribbling: 95,
            defending: 32,
            physical: 65
        }
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            overall: 92,
            pace: 87,
            shooting: 94,
            passing: 82,
            dribbling: 89,
            defending: 35,
            physical: 77
        }
    },
    {
        id: 3,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            overall: 91,
            pace: 76,
            shooting: 86,
            passing: 93,
            dribbling: 88,
            defending: 64,
            physical: 78
        }
    },
    {
        id: 4,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            overall: 90,
            pace: 71,
            shooting: 60,
            passing: 71,
            dribbling: 70,
            defending: 92,
            physical: 86
        }
    },
    {
        id: 5,
        name: "N'Golo Kanté",
        club: "Chelsea",
        nationality: "France",
        position: "Midfielder",
        statistics: {
            overall: 89,
            pace: 78,
            shooting: 66,
            passing: 77,
            dribbling: 82,
            defending: 87,
            physical: 84
        }
    },
    {
        id: 6,
        name: "Robert Lewandowski",
        club: "Bayern Munich",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            overall: 92,
            pace: 78,
            shooting: 93,
            passing: 79,
            dribbling: 85,
            defending: 44,
            physical: 82
        }
    },
    {
        id: 7,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            overall: 91,
            pace: 97,
            shooting: 88,
            passing: 80,
            dribbling: 92,
            defending: 39,
            physical: 76
        }
    },
    {
        id: 8,
        name: "Sergio Ramos",
        club: "Paris Saint-Germain",
        nationality: "Spain",
        position: "Defender",
        statistics: {
            overall: 89,
            pace: 71,
            shooting: 71,
            passing: 75,
            dribbling: 72,
            defending: 88,
            physical: 83
        }
    },
    {
        id: 9,
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            overall: 90,
            pace: 51,
            shooting: 40,
            passing: 60,
            dribbling: 50,
            defending: 22,
            physical: 77
        }
    },
    {
        id: 10,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            overall: 89,
            pace: 72,
            shooting: 74,
            passing: 86,
            dribbling: 84,
            defending: 82,
            physical: 81
        }
    }
];


export const findAllPlayers = async(): Promise<PlayerModel[]> => {

    return playersList;

}

export const findPlayerById = async(id:number): Promise<PlayerModel | undefined> => {
    return playersList.find(player => player.id === id);
}

export const insertPlayer = async (player:PlayerModel) => {
    return playersList.push(player);
}

export const deletePlayerById = async(id: number) => {

    const index = playersList.findIndex(player => player.id === id);

    if(index !== -1){
        playersList.splice(index, 1);
        return true;
    }
    else{
        return false;
    }
}

export const patchPlayerById = async(id: number, body: StatisticsModel) => {

    const index = playersList.findIndex(player => player.id === id);

    if(index !== -1){
        playersList[index].statistics = body;
    }

    return playersList[index];
}