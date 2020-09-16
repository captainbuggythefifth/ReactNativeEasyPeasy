import React from 'react';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import Button, { componentsButtonTestID, sButton } from 'components/atoms/Button';

/**
 * 1. Describe it
 * 2. Make it read
 * 3. Make it green
 * 4. Refactor
 */


describe('Button rendering', () => {
    
    let wrapper: RenderAPI;
    let handleClick: jest.Mock;

    beforeEach(() => {
        handleClick = jest.fn();
        wrapper = render(<Button label={"Submit"} onPress={handleClick} />);
    });

    it('should render a component <TouchableOpacity />', () => {
        expect(wrapper.getAllByTestId(componentsButtonTestID)).toHaveLength(1);
    });

    it('should render a label', () => {
        expect(wrapper.getAllByText('Submit')).toHaveLength(1);
    });

    describe('no type', () => {
        it('should have the default style', () => {
            expect(wrapper.getAllByTestId(componentsButtonTestID)[0].props.style).toEqual(sButton.default)
        })
    });

    describe('primary type', () => {
        beforeEach(() => {
            wrapper = render(<Button label={"Submit"} type={"primary"} onPress={handleClick} />);
        });
        it('should have the primary style', () => {
            expect(wrapper.getAllByTestId(componentsButtonTestID)[0].props.style).toEqual(sButton.primary)
        })
    })
});


describe('Button interaction', () => {
    
    let wrapper: RenderAPI;
    let handleClick: jest.Mock;

    beforeEach(() => {
        handleClick = jest.fn();
        wrapper = render(<Button label={"Submit"} onPress={handleClick} />);
    });
    describe('clicking the button', () => {
        beforeEach(() => {
            const element = wrapper.getByTestId(componentsButtonTestID);
            fireEvent.press(element);
        })
        it('should call the onClick callback', () => {
            expect(handleClick).toHaveBeenCalledTimes(1);
        })
    })
})