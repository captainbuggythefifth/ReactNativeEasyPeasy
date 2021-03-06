import React, { ReactElement, useState } from 'react';
import { View } from 'react-native';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';


export const componentsTodoFormID = "componentsTodoFormID";

/**
 * todoIdInputPlaceholder
 * @exports todoIdInputPlaceholder
 */
export const todoIdInputPlaceholder = "todoIdInputPlaceholder";


/**
 * todoTitleInputPlaceholder
 * @exports todoTitleInputPlaceholder
 */
export const todoTitleInputPlaceholder = "Title";

interface ITodoFormProps {
    onSubmit: Function
}

/**
 * TodoForm
 * @description - add to do
 */
const TodoForm = ({onSubmit}: ITodoFormProps): ReactElement => {
    const [title, setTitle] = useState<string>("");
    return (
        <View testID={componentsTodoFormID}>
            <Input placeholder={todoTitleInputPlaceholder} value={title} onChangeText={setTitle} />
            <Button label={"Submit"} onPress={() => onSubmit(title)} />
        </View>
    )
};


export default TodoForm

