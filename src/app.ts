import express, { json} from "express"
import router from "./routes/routes";
import cors from "cors";

function createApp() {

    const app = express();

    app.use(json());

    app.use(cors(
        //defina aqui que endereco pode consumir a API
    ));

    app.use("/", router);


    return app;
}

export default createApp;
