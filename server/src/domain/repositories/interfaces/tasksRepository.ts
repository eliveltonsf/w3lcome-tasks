import { Task } from "../../entities/task";

export interface TasksRepository {
  create(task: Task): Promise<void>;
  list(
    offset: number,
    limit: number
  ): Promise<{
    tasks: Task[];
    totalPages: number;
  }>;
  patch(task: Task): Promise<void>;
  findById(id: string): Promise<Task | null>;
  delete(id: string): Promise<void>;
}
