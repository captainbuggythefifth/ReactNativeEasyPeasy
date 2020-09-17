import React from 'react';
import { RenderAPI, render, fireEvent } from '@testing-library/react-native';
import { componentsTodoFormID, todoIdInputPlaceholder, todoTitleInputPlaceholder } from 'components/molecules/TodoForm';
import Todo from 'components/organisms/Todo';
import storeModel from 'stores/model';
import { createStore, StoreProvider } from 'easy-peasy';
import { ReactTestInstance } from 'react-test-renderer';


describe('Todo render', () => {
    let wrapper: RenderAPI;
    let handlePress: jest.Mock;

    beforeEach(() => {
        const store = createStore(storeModel);
        const app = (
            <StoreProvider store={store}>
                <Todo />
            </StoreProvider>
        );
        handlePress = jest.fn();
        wrapper = render(app);
    });

    it('should render TodoForm', () => {
        expect(wrapper.getAllByTestId(componentsTodoFormID)).toHaveLength(1);
    });
});

describe('Todo interactions', () => {
    
    let wrapper: RenderAPI;
    let handlePress: jest.Mock;

    let idInput: ReactTestInstance;
    let nameInput: ReactTestInstance;

    const typedTodoId = "1";
    const typedTodoTitle = "Todo 1";

    beforeEach(() => {
        const store = createStore(storeModel);
        const app = (
            <StoreProvider store={store}>
                <Todo />
            </StoreProvider>
        );
        handlePress = jest.fn();
        wrapper = render(app);
    });

    it('should have no items on first load', () => {
        expect(wrapper.getByTestId('list').children).toHaveLength(0)
    });

    describe('submit ', () => {

        beforeEach(() => {
            // type in ID field
            /* idInput = wrapper.getByPlaceholderText(todoIdInputPlaceholder);
            fireEvent.changeText(idInput, typedTodoId); */

            // type in name field
            nameInput = wrapper.getByPlaceholderText(todoTitleInputPlaceholder);
            fireEvent.changeText(nameInput, typedTodoTitle);

            const submitButton = wrapper.getByText("Submit");
            fireEvent.press(submitButton);
        });

        it('should have an item after submission', () => {
            expect(wrapper.getByTestId('list').children).toHaveLength(1);
        });

        it('should match the item name after submission', () => {
            expect(wrapper.getAllByText(typedTodoTitle)).toHaveLength(1);
        });
    })
})