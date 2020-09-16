import React from 'react'
import { View, Text } from 'react-native'


interface IHello {
    str: string
}

/**
 * @description Accepts string and returns it
 * @param  {IHello} {str}
 * @returns string
 */

const Hello = ({ str }: IHello): React.ReactElement => {
    return (
        <>
            <View></View>
        </>
    )
}

export default Hello