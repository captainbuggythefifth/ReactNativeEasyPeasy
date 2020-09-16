import React from 'react'
import { RenderAPI, render, fireEvent } from '@testing-library/react-native';
import TodoForm, { todoIdInputPlaceholder, todoTitleInputPlaceholder } from 'components/molecules/TodoForm';
import { ReactTestInstance } from 'react-test-renderer';
import { componentsButtonTestID } from 'components/atoms/Button';

describe('TodoForm render', () => {
    let wrapper: RenderAPI;
    let handlePress: jest.Mock;

    beforeEach(() => {
        handlePress = jest.fn();
        wrapper = render(<TodoForm onSubmit={handlePress} />);
    });

    it('should render Input component for id', () => {
        expect(wrapper.getAllByPlaceholderText(todoIdInputPlaceholder)).toHaveLength(1);
    });

    it('should render Input component for title', () => {
        expect(wrapper.getAllByPlaceholderText(todoTitleInputPlaceholder)).toHaveLength(1);
    });

    it('should render Button component for submission', () => {
        expect(wrapper.getAllByText("Submit")).toHaveLength(1);
    });
});

describe('TodoForm interaction', () => {

    let wrapper: RenderAPI;
    let handlePress: jest.Mock;

    let idInput: ReactTestInstance;
    let titleInput: ReactTestInstance;

    const typedTodoId = "1";
    const typedTodoTitle = "Todo 1";

    const returnedValues = {
        typedTodoId,
        typedTodoTitle
    }

    describe('typed values', () => {

        beforeEach(() => {
            wrapper = render(<TodoForm onSubmit={handlePress} />);
        });

        it('should match todoid value with the returned value from onChangeText', () => {
            idInput = wrapper.getByPlaceholderText(todoIdInputPlaceholder);
            fireEvent.changeText(idInput, typedTodoId);
            expect(idInput.props.value).toEqual(typedTodoId);
        });

        it('should match title value with the returned value from onChangeText', () => {
            titleInput = wrapper.getByPlaceholderText(todoTitleInputPlaceholder);
            fireEvent.changeText(titleInput, typedTodoTitle);
            expect(titleInput.props.value).toEqual(typedTodoTitle);
        });

    })

    describe('submit values', () => {

        beforeEach(() => {
            handlePress = jest.fn(value => returnedValues);
            wrapper = render(<TodoForm onSubmit={handlePress} />);
            const submitButton = wrapper.getByTestId(componentsButtonTestID);
            fireEvent.press(submitButton);
        });

        it('should call the onSubmit callback', () => {
            expect(handlePress).toHaveBeenCalledTimes(1);
        });

        it('should match the data onSubmit callback', () => {
            expect(handlePress.mock.results[0].value).toEqual(returnedValues);
        });
    })
})