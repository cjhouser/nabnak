import { Deserializable } from './deserializable.model';
import { Task } from './task.model';

export class Stage implements Deserializable {
    public id: any;
    public title: string;
    public tasks: Task[];

    constructor() {
        this.title = 'New Stage';
        this.tasks = [];
    }

    deserialize(input: any) {
        return Object.assign(this, input);
    }
}
