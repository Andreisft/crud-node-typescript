import { Router } from "express";
import { select, create, removeById, updateById } from "../controllers/userController";

const routes = Router();

routes.get("/users", select);
routes.post("/create", create);
routes.delete("/remove/:id", removeById);
routes.put("/update/:id", updateById);

export default routes;