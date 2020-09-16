import { action, StateMapper, Action, Thunk, thunk } from "easy-peasy";
import { IStoreModel } from "./model";
import { Injections } from "./store";

export interface ITodo {
    id: number,
    title: string,
    completed: boolean,
    userId: number
}

export interface IError {
    message: string
    error: Error
}

export interface ITodosModel {
    items: ITodo[];
    add: Action<ITodosModel, ITodo>,
    fetch: Thunk<ITodosModel, ITodo, Injections>,
    errors: IError[],
    addError: Action<ITodosModel, IError>
}

const todosModel: ITodosModel = {
    items: [],
    errors: [],
    add: action((state, payload) => {
        // state.todos[payload.id] = payload
        state.items.push(payload)
    }),
    addError: action((state, payload) => {
        // state.todos[payload.id] = payload
        state.errors.push(payload)
    }),
    fetch: thunk(async (actions, payload, { injections }) => {
        // const result = await fetch();
        const { todoService } = injections;
        const method = "GET";
        const url = `https://jsonplaceholder.typicode.com/todos/${payload.id}`;
        
        const result = await todoService.execute({
            method,
            url
        });

        if (result.success) {
            actions.add(result.response.data);
        } else {
            const error: IError = {
                message: "Something went wrong. Please try again",
                error: result.error
            };
            actions.addError(error);
        }
    }),
};

export default todosModel;