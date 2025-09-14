//importa a instancia do servidor criado
import { server } from "./server/server";

//"escuta" o servidor e roda naporta 3333
//o objeto listen recebe dois parâmetros: a porta e um callback que é executado quando o servidor é iniciado
server.listen(3333, () => console.log("App rodando na porta 3333"));
