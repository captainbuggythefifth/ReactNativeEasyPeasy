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
    /* const [todo, setTodo] = useState<ITodo>()
    const handleSubmit = useCallback(
        () => {
            addTodo()
        },
        [addTodo, setTodo, todo],
    ) */

    return (
        <View>
            <TodoForm onSubmit={(todo: ITodo) => addTodo(todo)} />
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