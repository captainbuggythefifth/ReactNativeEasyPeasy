import React from 'react'
import { RenderAPI, render, fireEvent } from '@testing-library/react-native';
import Input, { componentsInputTestID, componentsInputDefaultValue, sInput, IInputProps } from 'components/atoms/Input';
import { ReactTestInstance } from 'react-test-renderer';

/**
 * 1. Describe it
 * 2. Make it read
 * 3. Make it green
 * 4. Refactor
 */

const style = sInput

describe('Input render', () => {
    let wrapper: RenderAPI;
    const inputValue = 'This is the typed value';
    let props: IInputProps = {
        onChangeText: jest.fn(),
        value: componentsInputDefaultValue
    }

    beforeEach(() => {
        wrapper = render(<Input {...props} />);
    });

    it('should render a <TextInput />', () => {
        expect(wrapper.getAllByTestId(componentsInputTestID)).toHaveLength(1);
    });

    it('should render with a default style', () => {
        expect(wrapper.getByTestId(componentsInputTestID).props.style).toEqual(sInput.default)
    });

    describe('no value prop', () => {
        it('should render with defaul value', () => {
            expect(wrapper.getByTestId(componentsInputTestID).props.value).toEqual(componentsInputDefaultValue);
        });
    });

    describe('has value prop', () => {
        beforeEach(() => {
            props = {
                ...props,
                value: inputValue
            }
            wrapper = render(<Input {...props} />);
        });
        it('should render with value prop', () => {
            expect(wrapper.getByTestId(componentsInputTestID).props.value).toEqual(inputValue);
        });
    });
});

describe('Input interaction', () => {
    let wrapper: RenderAPI;
    let element: ReactTestInstance;
    let props: IInputProps;
    

    const inputValue = 'This is the typed value';
    let onChangeText = jest.fn(value => inputValue)

    beforeEach(() => {
        // let handleChangeText = jest.fn();
        props = {
            onChangeText,
            value: componentsInputDefaultValue
        };
        wrapper = render(<Input {...props} onChangeText={onChangeText} />);
        element = wrapper.getByTestId(componentsInputTestID);
        fireEvent.changeText(element, inputValue);
    });

    describe('type value', () => {

        it('should call the onChangeText callback', () => {
            const calledTimes = 1;
            expect(onChangeText).toHaveBeenCalledTimes(calledTimes);
        });

        it('should match the input value', () => {
            expect(onChangeText.mock.results[0].value).toEqual(inputValue);
        });
    });
})