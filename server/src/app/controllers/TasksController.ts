import { TasksRepository } from "../../domain/repositories/interfaces/tasksRepository";
import { ListTaskUseCase } from "../../domain/useCases/ListTask";
import { DeleteTaskUseCase } from "../../domain/useCases/deleteTask";
import { PatchTaskUseCase } from "../../domain/useCases/patchTasks";
import { CreateTaskUseCase } from "./../../domain/useCases/createTask";
import { Request, Response } from "express";

export default class TasksController {
  private tasksRepository: TasksRepository;

  constructor(tasksRepository: TasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  async createTask(req: Request, res: Response) {
    try {
      const createTaskUseCase = new CreateTaskUseCase(this.tasksRepository);

      const response = await createTaskUseCase.execute({
        title: req.body.title,
      });

      return res
        .status(201)
        .json({ task: response.task, message: "Task created successfully!" });
    } catch (error: any) {
      if (error?.message) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(500).send(error);
      }
    }
  }

  async listTasks(req: Request, res: Response) {
    const listTaskUseCase = new ListTaskUseCase(this.tasksRepository);

    const response = await listTaskUseCase.execute({
      offset: Number(req.query.offset),
      limit: Number(req.query.limit) || 5,
    });

    return res
      .status(200)
      .json({ tasks: response.tasks, totalPages: response.totalPages });
  }

  async patchTask(req: Request, res: Response) {
    try {
      const patchTaskUseCase = new PatchTaskUseCase(this.tasksRepository);

      const response = await patchTaskUseCase.execute({
        id: String(req.params.id),
        title: req.body.title,
        isDone: req.body.isDone,
      });

      return res
        .status(200)
        .json({ task: response.task, message: "Task updated successfully!" });
    } catch (error: any) {
      if (error?.message) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(500).send(error);
      }
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const deleteTaskUseCase = new DeleteTaskUseCase(this.tasksRepository);

      await deleteTaskUseCase.execute({
        id: req.params.id,
      });

      return res.status(200).json({ message: "Task deleted successfully!" });
    } catch (error: any) {
      if (error?.message) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(500).send(error);
      }
    }
  }
}
