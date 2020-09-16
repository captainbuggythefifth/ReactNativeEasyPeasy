import todosModel, { ITodosModel } from "./todos";

export interface IStoreModel {
    todos: ITodosModel
} 

const storeModel = {
    todos: todosModel
};

export default storeModel