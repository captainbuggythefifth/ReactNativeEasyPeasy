import React, { ReactElement } from 'react';
import { StoreProvider } from 'easy-peasy';
import store from 'stores/store';


interface IStoreHOCParams {
    children: ReactElement
}

/** 
 * @description - Wraps the whole application with the StoreProvider component from easy-peasy
 * @param {children}
*/
const StoreHOC = ({children}: IStoreHOCParams): ReactElement => {
    return (
        <StoreProvider store={store}>
            {children}
        </StoreProvider>
    )
};

export default StoreHOC