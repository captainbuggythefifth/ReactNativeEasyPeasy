import React from 'react';
import { RenderAPI, render, fireEvent } from '@testing-library/react-native';
import LoginForm, { passwordInputPlaceholder, emailInputPlaceholder } from 'components/molecules/LoginForm';
import { componentsButtonTestID } from 'components/atoms/Button';
import { ReactTestInstance } from 'react-test-renderer';

describe('LoginForm render', () => {
    let wrapper: RenderAPI;
    let handlePress: jest.Mock;

    beforeEach(() => {
        handlePress = jest.fn();
        wrapper = render(<LoginForm onSubmit={handlePress} />);
    });

    it('should render Input component for email', () => {
        expect(wrapper.getAllByPlaceholderText(emailInputPlaceholder)).toHaveLength(1);
    });

    it('should render Input component for password', () => {
        expect(wrapper.getAllByPlaceholderText(passwordInputPlaceholder)).toHaveLength(1);
    });

    it('should render Button component for submission', () => {
        expect(wrapper.getAllByText("Submit")).toHaveLength(1);
    });
});

describe('LoginForm interaction', () => {

    let wrapper: RenderAPI;
    let handlePress: jest.Mock;

    let emailInput: ReactTestInstance;
    let passwordInput: ReactTestInstance;

    const typedEmail = "sample@email.com";
    const typedPassword = "samplePassword";

    const returnedValues = {
        typedEmail,
        typedPassword
    }

    describe('typed values', () => {

        beforeEach(() => {
            wrapper = render(<LoginForm onSubmit={handlePress} />);
        });

        it('should match email value with the returned value from onChangeText', () => {
            emailInput = wrapper.getByPlaceholderText(emailInputPlaceholder);
            fireEvent.changeText(emailInput, typedEmail);
            expect(emailInput.props.value).toEqual(typedEmail);
        });

        it('should match password value with the returned value from onChangeText', () => {
            passwordInput = wrapper.getByPlaceholderText(passwordInputPlaceholder);
            fireEvent.changeText(passwordInput, typedPassword);
            expect(passwordInput.props.value).toEqual(typedPassword);
        });

    })

    describe('should call onSubmit', () => {

        beforeEach(() => {
            handlePress = jest.fn(value => returnedValues);
            wrapper = render(<LoginForm onSubmit={handlePress} />);
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