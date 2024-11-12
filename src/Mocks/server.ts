import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

/*налаштування серверу для тестування. 
setupServer - сервер для node.js, контроює запит під час тестування  */
