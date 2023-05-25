import { TasksRepository } from "../repositories/interfaces/tasksRepository";

interface DeleteTaskUseCaseParams {
  id: string;
}

export class DeleteTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(params: DeleteTaskUseCaseParams): Promise<void> {
    const task = await this.tasksRepository.findById(params.id);

    if (!task) {
      throw new Error("Task does not exist!");
    }

    await this.tasksRepository.delete(params.id);
  }
}
