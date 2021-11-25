import React, { createContext } from 'react';
import useDataProvider from '../Hooks/useDataProvider';
export const Context = createContext()

const DataProvider = ({children}) => {
    const allContext = useDataProvider()
    return (
        <Context.Provider value={allContext}>
            {children}
        </Context.Provider>
    );
};

export default DataProvider;