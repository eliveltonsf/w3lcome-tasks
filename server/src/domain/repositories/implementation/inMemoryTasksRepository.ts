import { randomUUID } from "crypto";
import { Task } from "../../entities/task";
import { TasksRepository } from "../interfaces/tasksRepository";

export class InMemoryTasksRepository implements TasksRepository {
  public tasks: Task[] = [
    {
      id: randomUUID(),
      title: "Apreender React",
      isDone: false,
    },
    {
      id: randomUUID(),
      title: "Estudar NodeJS",
      isDone: true,
    },
    {
      id: randomUUID(),
      title: "Praticar TypeScript",
      isDone: false,
    },
  ];

  async create(task: Task): Promise<void> {
    this.tasks.unshift(task);
  }

  async list(
    offset: number,
    limit: number
  ): Promise<{
    tasks: Task[];
    totalPages: number;
  }> {
    const startIndex = (offset - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedTasks = this.tasks.slice(startIndex, endIndex);

    const totalPages = Math.ceil(this.tasks.length / limit);

    return { tasks: paginatedTasks, totalPages };
  }

  async findById(id: string): Promise<Task | null> {
    const task = this.tasks.find((task) => task.id === id);

    return task || null;
  }

  async patch(task: Task): Promise<void> {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);

    this.tasks[taskIndex] = task;
  }

  async delete(id: string): Promise<void> {
    const indexToRemove = this.tasks.findIndex((task) => task.id === id);

    if (indexToRemove !== -1) {
      this.tasks.splice(indexToRemove, 1);
    }
  }
}
