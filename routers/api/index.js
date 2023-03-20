import { Router } from "express";
import usersController from "../../controllers/users-controller.js";

const apiRouter = new Router();

apiRouter.post("/registration", usersController.registation);
apiRouter.post("/login", usersController.login);
apiRouter.post("/logout", usersController.logout);
apiRouter.get("/activate/:link", usersController.activated);
apiRouter.get("/refresh", usersController.refresh);
apiRouter.get("/users", usersController.getUser);

export default apiRouter;
