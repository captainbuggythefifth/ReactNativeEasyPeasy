import React from 'react';
import { View } from 'react-native';
import Button from 'components/atoms/Button';
import { useNavigation } from '@react-navigation/native';
import Text from 'components/atoms/Text';

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