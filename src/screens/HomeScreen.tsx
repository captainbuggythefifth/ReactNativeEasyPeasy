import React from 'react';
import { View, Text } from 'react-native';
import Button from 'components/atoms/Button';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>
                Home Screen
            </Text>
            <Button label={"Go to Todo"} onPress={() => {
                navigation.navigate("Todo");
            }} />
        </View>
    )
};

export default HomeScreen