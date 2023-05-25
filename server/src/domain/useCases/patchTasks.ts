import { Task } from '../entities/task';
import { TasksRepository } from '../repositories/interfaces/tasksRepository';

interface PatchTaskUseCaseParams {
  id: string;
  title: string;
  isDone: boolean;
}

interface PatchTaskUseCaseResponse {
  task: Task;
}

export class PatchTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(params: PatchTaskUseCaseParams): Promise<PatchTaskUseCaseResponse> {
    const task = await this.tasksRepository.findById(params.id);

    if (!task) {
      throw new Error('Task does not exist!');
    }

    const updatedTask = new Task({
      id: task.id,
      title: params.title || task.title,
      isDone: params.isDone === undefined ? task.isDone : params.isDone
    });

    await this.tasksRepository.patch(updatedTask);

    return { task: updatedTask };
  }
}
