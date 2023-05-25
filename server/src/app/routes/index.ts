import { Router } from "express";
import TasksController from "../controllers/TasksController";
import { InMemoryTasksRepository } from "../../domain/repositories/implementation/inMemoryTasksRepository";

const tasksController = new TasksController(new InMemoryTasksRepository());

const routes = Router();

routes.get("/tasks", (req, res) => tasksController.listTasks(req, res));
routes.post("/tasks", (req, res) => tasksController.createTask(req, res));
routes.patch("/tasks/:id", (req, res) => tasksController.patchTask(req, res));
routes.delete("/tasks/:id", (req, res) => tasksController.deleteTask(req, res));

export default routes;
