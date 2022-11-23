import {ServerOptions} from "ws";
import {WsHandler} from "./app/WsHandler";

function main() {
    const options: ServerOptions = {port: 8080}
    const handler = new WsHandler()
    handler.initialize(options)
}

main();