import React from "react";

import { render, RenderAPI } from "@testing-library/react-native"
import TodoScreen from "screens/TodoScreen";
import { componentsTodoFormID } from "components/molecules/TodoForm";
import { createStore, StoreProvider } from "easy-peasy";
import storeModel from "stores/model";

describe('TodoScreen render', () => {
    let wrapper: RenderAPI;
    let handlePress: jest.Mock;

    beforeEach(() => {
        const store = createStore(storeModel);
        const app = (
            <StoreProvider store={store}>
                <TodoScreen />
            </StoreProvider>
        );
        handlePress = jest.fn();
        wrapper = render(app);
    })

    it('should render Todo component', () => {
        expect(wrapper.getAllByTestId(componentsTodoFormID)).toHaveLength(1);
    })
})