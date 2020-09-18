import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import Text, { sText } from 'components/atoms/Text';

describe('Text rendering', () => {

    let wrapper: RenderAPI;
    let handleClick: jest.Mock;

    const text = "Yeah";

    beforeEach(() => {
        handleClick = jest.fn();
        wrapper = render(<Text>{text}</Text>);
    });

    it('should render text', () => {
        expect(wrapper.getAllByText(text)).toHaveLength(1);
    });

    describe('no type', () => {
        it('should have the default style', () => {
            expect(wrapper.getByText(text).props.style).toEqual(sText.default);
        })
    });

    describe('primary type', () => {
        const type = "primary";
        beforeEach(() => {
            wrapper = render(<Text type={type}>{text}</Text>);
        });
        it('should have the primary style', () => {
            expect(wrapper.getByText(text).props.style).toEqual(sText[type]);
        })
    });
    describe('secondary type', () => {
        const type = "secondary";
        beforeEach(() => {
            wrapper = render(<Text type={type}>{text}</Text>);
        });
        it('should have the primary style', () => {
            expect(wrapper.getByText(text).props.style).toEqual(sText[type]);
        })
    });
});