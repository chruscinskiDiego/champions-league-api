import { Router } from "express";
import { deletePlayer, getPlayerById, getPlayers, patchPlayer, postPlayer } from "../controllers/players-controller";
import { getClubs, getClubById, postClub, updateClub, deleteClub } from "../controllers/clubs-controller";

const router = Router();

//players
router.get("/players", getPlayers); 
router.get("/players/:id", getPlayerById);
router.post("/players", postPlayer);
router.patch("/players/:id", patchPlayer);
router.delete("/players/:id", deletePlayer);

//clubs
router.get("/clubs", getClubs); 
router.get("/clubs/:id", getClubById);
router.post("/clubs", postClub);
router.put("/clubs/:id", updateClub);
router.delete("/clubs/:id", deleteClub);


export default router;