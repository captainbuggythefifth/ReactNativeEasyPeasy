import React, { ReactElement } from "react";
import { TouchableOpacity, StyleSheet, GestureResponderEvent } from "react-native";
import Text from "./Text";

/**
 * sOpacityDefault
 * @description default style for TouchableOpacity component; must pass in to sButton so that we can override the default
 */
const sOpacityDefault = {
    opacity: 1
};

const sButtonStyles = {
    padding: 16,
    borderRadius: 8,
}

/**
 * sButton
 * @description default style value for Button
 * @exports sButton
 */

export const sButton = StyleSheet.create({
    default: {
        ...sOpacityDefault,
        ...sButtonStyles,
        backgroundColor: "#F8BBD0"
    },
    primary: {
        ...sOpacityDefault,
        ...sButtonStyles,
        backgroundColor: "blue"
    }
})

/**
 * @exports componentsButtonTestID - test ID
 */
export const componentsButtonTestID = "componentsButtonTestID"


/**
 * IButtonProps
 * @param {string} label - texts written on the Button
 * @param {string} [type="default"]  - sets the style
 * @callback onClick - callback whenever the TouchableOpacity is pressed
 * @exports IButtonProps
 */
export interface IButtonProps {
    label: string,
    type?: "default" | "primary",
    onPress: (event: GestureResponderEvent) => void
};


/**
 * Button
 * @param {string} label - texts written on the Button
 * @param {string} [type="default"]  - sets the style
 * @callback onClick - callback whenever the TouchableOpacity is pressed
 * @returns {ReactElement}
 * @exports <Button></Button>
 */
const Button = ({label, type = "default", onPress}: IButtonProps): ReactElement => {
    const style = sButton[type];
    return (
        <TouchableOpacity testID={componentsButtonTestID} style={style} onPress={onPress}>
            <Text customStyle={{
                textAlign: "center"
            }}>
                {label}
            </Text>
        </TouchableOpacity >
    )
}

export default Button