import { Task } from '../entities/task';
import { TasksRepository } from '../repositories/interfaces/tasksRepository';

interface ListTaskUseCaseParams {
  offset: number;
  limit: number;
}

interface ListTaskUseCaseResponse {
  tasks: Task[];
  totalPages: number;
}

export class ListTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(params: ListTaskUseCaseParams): Promise<ListTaskUseCaseResponse> {
    const { tasks, totalPages } = await this.tasksRepository.list(params.offset, params.limit);

    return { tasks, totalPages };
  }
}
