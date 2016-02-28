
/**
 * Basic interface definition of a Todo
 */
interface Todo {
    todo: string;
    done: Boolean;
    created:Date;
    key?: string; // optional
}
