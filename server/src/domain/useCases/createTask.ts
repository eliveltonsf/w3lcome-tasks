import { Task } from '../entities/task';
import { TasksRepository } from '../repositories/interfaces/tasksRepository';

interface CreateTaskUseCaseParams {
  title: string;
}

interface CreateTaskUseCaseResponse {
  task: Task;
}

export class CreateTaskUseCase {
  private tasksRepository: TasksRepository;
  constructor(tasksRepository: TasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  async execute(params: CreateTaskUseCaseParams): Promise<CreateTaskUseCaseResponse> {
    const task = new Task({
      title: params.title,
      isDone: false
    });

    await this.tasksRepository.create(task);

    return {
      task
    };
  }
}
