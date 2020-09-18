import React from 'react';
import { createStore, Store } from 'easy-peasy';
import todosModel, { ITodosModel, ITodo } from 'stores/todos';
import mockSuccessTodo, { mockTodoData } from '__mocks__/services/http/MockSuccessTodo';
import mockFailTodo from '__mocks__/services/http/MockFailTodo';

describe('Todos default', () => {
    // const todo = { completed: false, id: 1, title: 'delectus aut autem', userId: 1 };
    
    let store: Store<ITodosModel>;
    let todoService = mockSuccessTodo(mockTodoData);

    beforeEach(() => {
        // arrange
        store = createStore(todosModel, {
            injections: {
                todoService
            }
        });
    });
    it('should show default', () => {
        expect(store.getState().items).toEqual([]);
    })
    
})

describe('Todos interaction', () => {
    let store: Store<ITodosModel>;
    const todo = { completed: false, id: 1, title: 'delectus aut autem', userId: 1 };
    const todo2 = { completed: false, id: 2, title: 'delectus aut autem 2', userId: 2 };

    let todoService;

    beforeEach(() => {
        // arrange
        todoService = mockSuccessTodo(todo2);
        store = createStore(todosModel, {
            injections: {
                todoService
            }
        });

        // act
        store.getActions().add(todo);

    })

    it('should add todo', () => {
        // assert
        expect(store.getState().items[0]).toEqual(todo);
    });

    it('should add todo2', () => {
        store.getActions().add(todo2);

        // assert
        expect(store.getState().items[1]).toEqual(todo2);
    });

    it('should fetch todo', async () => {
        await store.getActions().fetch(todo2);
        expect(store.getState().items.length).toEqual(2);
        
    });

    it('should generate id', () => {
        const id = store.getState().generateId;
        expect(store.getState().items.length + 1).toEqual(id);
    })

});

describe('Todos interaction fail', () => {
    let store: Store<ITodosModel>;
    const todo2 = { completed: false, id: 2, title: 'delectus aut autem 2', userId: 2 };

    let todoService;//  = mockFailTodo(todo2);

    beforeEach(() => {
        todoService = mockFailTodo(todo2);
        store = createStore(todosModel, {
            injections: {
                todoService
            }
        });

    })

    it('should no errors by default', async () => {
        expect(store.getState().errors.length).toEqual(0);
    });

    it('should fetch todo with error', async () => {
        await store.getActions().fetch(todo2);
        expect(store.getState().errors.length).toEqual(1);
    });

});