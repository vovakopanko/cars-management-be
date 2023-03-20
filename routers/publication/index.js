import { Router } from "express";
import publicationsController from "../../controllers/publications-controller.js";

const publicationsRouter = new Router();

publicationsRouter.get("/post", publicationsController.getAllPosts);
publicationsRouter.post("/post", publicationsController.addPost);
publicationsRouter.put("/post/:id", publicationsController.updatePost);
publicationsRouter.delete("/post", publicationsController.deletePost);
publicationsRouter.delete("/post/:id", publicationsController.getOnePost);

export default publicationsRouter;
