import React, { ReactElement } from 'react';
import { StyleSheet, Text as TextRN, TextStyle } from 'react-native'

export const sText = StyleSheet.create({
    default: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 4
    },
    primary: {
        backgroundColor: "blue"
    },
    secondary: {
        backgroundColor: "blue"
    }
});

interface ITextProps {
    children: string | number,
    type?: "default" | "primary" | "secondary",
    customStyle?: TextStyle
}

const Text = ({ children, type = "default", customStyle = {} }: ITextProps) => {
    const style = sText[type];
    return (
        <TextRN style={{
            ...style,
            ...customStyle
        }}>
            {children}
        </TextRN>
    )
};

export default Text