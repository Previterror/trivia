import { TriviaController } from "./controllers/TriviaController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [TriviaController],
    view: /*html*/`
    <div class="bg-primary text-dark p-3">
      <div class="card-body">
        <h3>Trivial Escape</h3>
        
      </div>
    </div>
    `
  },
])