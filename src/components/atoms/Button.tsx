import React, { ReactElement } from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";

/**
 * sOpacityDefault
 * @description default style for TouchableOpacity component; must pass in to sButton so that we can override the default
 */
const sOpacityDefault = {
    opacity: 1
}

/**
 * sButton
 * @description default style value for Button
 * @exports sButton
 */

export const sButton = StyleSheet.create({
    default: {
        ...sOpacityDefault,
        backgroundColor: "papayawhip"
    },
    primary: {
        ...sOpacityDefault,
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
            <Text>
                {label}
            </Text>
        </TouchableOpacity >
    )
}

export default Button