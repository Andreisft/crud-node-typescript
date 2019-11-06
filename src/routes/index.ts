import { Router } from "express";
import { select, create, removeById, updateById } from "../controllers/userController";
import { updateUserPath, removeUserPath, createUserPath, selectUsersPath } from "./paths";

const routes = Router();

routes.get(selectUsersPath, select);
routes.post(createUserPath, create);
routes.delete(removeUserPath, removeById);
routes.put(updateUserPath, updateById);

export default routes;