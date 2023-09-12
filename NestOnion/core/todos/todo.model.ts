export class Todo {
    constructor(
        readonly id: number,
        readonly task: string,
        readonly done: boolean,
        readonly timestamp: string,
    ) { }
}
