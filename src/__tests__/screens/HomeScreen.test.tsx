import React from 'react'
import { act, fireEvent, render, RenderAPI } from '@testing-library/react-native'
import HomeScreen from 'screens/HomeScreen'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { renderHook } from '@testing-library/react-hooks';
import TodoScreen from 'screens/TodoScreen';
import { createStore, StoreProvider } from 'easy-peasy';
import storeModel from 'stores/model';
import { componentsTodoFormID } from 'components/molecules/TodoForm';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

const { Screen, Navigator } = createStackNavigator();

describe('HomeScreen render', () => {
    let wrapper: RenderAPI;

    const { result, waitForNextUpdate } = renderHook(() => useNavigation());

    beforeEach(() => {
        wrapper = render(
            <NavigationContainer>
                <Navigator initialRouteName="Home">
                    <Screen name="Home" component={HomeScreen} />
                </Navigator>
            </NavigationContainer>

        );
    });

    it('should render HomeScreen', async () => {


        await act(async () => {

        });

        const texts = wrapper.getAllByText("Home Screen");
        const link = wrapper.getAllByText("Go to Todo");
        expect(texts).toHaveLength(1);
        expect(link).toHaveLength(1);

    });
});

describe('HomeScreen interaction', () => {
    let wrapper: RenderAPI;

    const { result, waitForNextUpdate } = renderHook(() => useNavigation());

    const store = createStore(storeModel);
 
    beforeEach(() => {
        wrapper = render(
            <StoreProvider store={store}>
                <NavigationContainer>
                    <Navigator initialRouteName="Home">
                        <Screen name="Home" component={HomeScreen} />
                        <Screen name="Todo" component={TodoScreen} />
                    </Navigator>
                </NavigationContainer>
            </StoreProvider>
        );
    });

    it('should render redirect to Todo when Go to Todo is pressed', async () => {

        const link = wrapper.getByText("Go to Todo");
        fireEvent.press(link);
        
        await act(async () => {
        });
        
        expect(wrapper.getAllByTestId(componentsTodoFormID)).toHaveLength(1);
    });
});