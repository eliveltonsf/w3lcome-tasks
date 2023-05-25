import { Optional } from '../../shared/types/optional';
import { randomUUID } from 'crypto';

interface TaskAttributes {
  id: string;
  title: string;
  isDone: boolean;
}

export class Task {
  public id: string;
  public title: string;
  public isDone: boolean;

  constructor({ id, title, isDone }: Optional<TaskAttributes, 'id'>) {
    this.id = id || randomUUID();
    this.title = title;
    this.isDone = isDone;

    if (!title) {
      throw new Error('Title is a required field!');
    }
  }
}
