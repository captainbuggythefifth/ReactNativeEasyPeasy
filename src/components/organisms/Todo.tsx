import React, { ReactElement, useCallback, useState } from 'react';
import TodoForm from 'components/molecules/TodoForm';
import { useStoreActions, useStoreState } from 'stores/hooks';
import { View, Text } from 'react-native';
import { ITodo } from 'stores/todos';



/**
 * Todo
 * @returns ReactElement
 */
const Todo = (): ReactElement => {

    const addTodo = useStoreActions(actions => actions.todos.add);
    const itemsTodo = useStoreState(state => state.todos.items);
    const id = useStoreState(state => state.todos.generateId);

    return (
        <View>
            <TodoForm onSubmit={(title: string) => {
                const todo: ITodo = {
                    id,
                    title,
                    completed: false,
                    userId: 1
                }                
                addTodo(todo);
            }} />
            <View testID={"list"}>
                {itemsTodo.map((item) => {
                    return (
                        <Text key={item.id + "_" + item.title}>
                            {item.title}
                        </Text>
                    )
                })}
            </View>
        </View>
    )
};

export default Todo;