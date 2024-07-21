import createApp from "./app";

const app = createApp();

app.listen(process.env.PORT, () =>  {
    console.log(`🌄 Servidor Iniciado com sucesso na porta: ${process.env.PORT} 🌄`);
});