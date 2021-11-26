import { Deserializable } from './deserializable.model';
import { Task } from './task.model';

export class Stage implements Deserializable {
    public id: number;
    public title: string;
    public tasks: Task[];

    constructor() {
        this.id = Math.floor(Math.random() * 10000);
        this.title = 'New Stage';
        this.tasks = [];
    }

    deserialize(input: any) {
        return Object.assign(this, input);
    }
}
