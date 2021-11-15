import { Deserializable } from './deserializable.model';
import { Stage } from './stage.model';

export class Project implements Deserializable {
    public id: any;
    public title: string;
    public stages: Stage[];

    constructor() {
        this.title = 'New Project';
        this.stages = [];
    }

    deserialize(input: any) {
        return Object.assign(this, input);
    }
}