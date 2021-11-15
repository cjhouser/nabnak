import { Deserializable } from './deserializable.model';

export class Task implements Deserializable {
    public id: any;
    public title: string;

    constructor() {
        this.title = 'New Task';
    }

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}