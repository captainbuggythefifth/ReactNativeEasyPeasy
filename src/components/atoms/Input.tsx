import React, { ReactElement, useState } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';


/**
 * sButton
 * @description default style value for Input
 * @exports sInput
 */

export const sInput = StyleSheet.create({
    default: {
        padding: 8,
        borderRadius: 8,
        borderColor: "green",
        borderWidth: 1
    }
})

/**
 * @exports componentsInputTestID - test ID
 */

export const componentsInputTestID = "componentsInputTestID";

/**
 * @exports componentsInputDefaultValue - Input default value
 */

export const componentsInputDefaultValue = "";


/**
 * IInputProps
 * @description Interface Input properties
 * @extends TextInputProps
 */
export interface IInputProps extends TextInputProps {
    
}

/**
 * Input
 * @description displays custom InputText
 * @param value 
 * @callback onChangeText
 * @returns ReactElement
 */
const Input = (props: IInputProps): ReactElement => {
    // const [defaultValue, setDefaultValue] = useState<string>(value ? value : componentsInputDefaultValue);
    return (
        <TextInput
            testID={componentsInputTestID}
            style={sInput.default}
            {...props}
        />
    )
}

export default Input