import { Deserializable } from './deserializable.model';

export class Task implements Deserializable {
    public id: any;
    public title: string;

    constructor() {
        this.id = Math.floor(Math.random() * 10000);
        this.title = 'New Task';
    }

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}